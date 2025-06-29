import Navigation from "@/components/navigation"
import Link from "next/link"
import { ArrowRight, Heart, Camera, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen bg-hero  flex items-center justify-center overflow-hidden">
   
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">MOSFAVOURED</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Our Love Story • Our Journey • Our Forever
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Our Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Our Beautiful Moments</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into our love story through the lens of our special days
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className=" overflow-hidden rounded-lg">
              <Image
                src="/images/engagement (1).JPG"
                alt="Our moment 1"
                width={400}
                height={400}
                quality={100}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className=" overflow-hidden rounded-lg">
              <Image
                src="/images/proposal (12).JPG"
                alt="Our moment 2"
                width={400}
                height={400}
                quality={100}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className=" overflow-hidden rounded-lg">
              <Image
                src="/images/proposal (17).JPG"
                alt="Our moment 3"
                width={400}
                height={400}
                quality={100}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className=" overflow-hidden rounded-lg">
              <Image
                src="/images/pre-wedding (10).jpg"
                alt="Our moment 4"
                width={400}
                height={400}
                quality={100}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-black hover:bg-black hover:text-white text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
            >
              See All Photos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Our Journey Together</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From our first meeting to saying "I do" - every moment has been a beautiful chapter in our love story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">How We Met</h3>
              <p className="text-gray-600 leading-relaxed">
                Our beautiful love story began with a chance encounter that changed our lives forever.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">The Proposal</h3>
              <p className="text-gray-600 leading-relaxed">
                A magical moment when two hearts decided to become one, captured forever in our memories.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">Our Wedding</h3>
              <p className="text-gray-600 leading-relaxed">
                The celebration of our love surrounded by family and friends, marking the beginning of our forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Thank You for Being Part of Our Story</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We're grateful to have you witness our love story. Explore our gallery to see the beautiful moments we've
            shared.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Full Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
