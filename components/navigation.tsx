"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-playfair text-2xl font-bold text-black tracking-wide">
           <h2>MOSFAVOURED</h2> 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              About Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Gallery
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
