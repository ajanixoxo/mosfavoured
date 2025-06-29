import Navigation from "@/components/navigation"
import { Heart, Camera, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Meet the couple behind MOSFAVOURED - our love story, our journey, and our dreams for the future
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-black mb-6">Our Love Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              MOSFAVOURED represents more than just our names - it's a celebration of how we became each other's most
              favoured person. Our journey began with a chance meeting that blossomed into a love story worth sharing
              with the world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our first conversation to our wedding day, every moment has been filled with laughter, growth, and an
              ever-deepening love. We created this website to share our beautiful journey with family and friends,
              preserving these precious memories for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-black mb-4">What We Believe In</h2>
            <p className="text-lg text-gray-600">The values that guide our relationship and our life together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-black mb-4">Love</h3>
              <p className="text-gray-600">
                Unconditional love that grows stronger with each passing day, supporting each other through all of
                life's adventures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-black mb-4">Family</h3>
              <p className="text-gray-600">
                Cherishing our families and the new family we're building together, honoring traditions while creating
                new ones.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-black mb-4">Growth</h3>
              <p className="text-gray-600">
                Continuously growing together, supporting each other's dreams and becoming better versions of ourselves.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-black mb-4">Memories</h3>
              <p className="text-gray-600">
                Creating beautiful memories together and cherishing every moment of our journey as a couple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold text-black mb-8">Our Promise</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To love, honor, and cherish each other through all of life's seasons. To build a life filled with joy,
            laughter, and endless adventures together. To always be each other's most favoured person.
          </p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
      </section>
    </div>
  )
}
