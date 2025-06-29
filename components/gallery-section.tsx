"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "./lightbox"

interface GallerySectionProps {
  title: string
  description: string
  images: string[]
}

export default function GallerySection({ title, description, images }: GallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">{title}</h2>
        <p className="text-charcoal-600 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden  transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} ${index + 1}`}
                fill
                quality={100}
                className="object-contain p-2 hover:scale-105 transition-all duration-300"
              />
              {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" /> */}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  )
}
