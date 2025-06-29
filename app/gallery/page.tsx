import Navigation from "@/components/navigation"
import GallerySection from "@/components/gallery-section"

export default function GalleryPage() {
  // Sample images for each category - replace with actual image URLs
  const proposalImages = [

    "/images/proposal (3).JPG",
    "/images/proposal (4).JPG",
    "/images/proposal (5).JPG",
    "/images/proposal (6).JPG",
    "/images/proposal (7).JPG",
    "/images/proposal (8).JPG",
    "/images/proposal (9).JPG",
    "/images/proposal (16).JPG",
    "/images/proposal (18).JPG",
    "/images/proposal (20).jpg",
    "/images/proposal (10).JPG",
    "/images/proposal (11).JPG",
    "/images/proposal (13).JPG",
    "/images/proposal (12).JPG",
    "/images/proposal (1).jpg",
    "/images/proposal (2).JPG",
    "/images/proposal (14).JPG",
    "/images/proposal (15).JPG",
    "/images/proposal (17).JPG",
    "/images/proposal (19).JPG",
  ]

  const introductionImages = [
    "/images/introduction (2).jpg",
    "/images/introduction (5).jpg",
   
 
    "/images/introduction (9).jpg",
    "/images/introduction (10).jpg",
    "/images/introduction (11).jpg",
    "/images/introduction (1).jpg",
    "/images/introduction (3).jpg",
    "/images/introduction (4).jpg",
    "/images/introduction (6).jpg",
    "/images/introduction (7).jpg",
    "/images/introduction (8).jpg",
  ]

  const engagementImages = [
    "/images/engagement (1).JPG",
    "/images/engagement (2).JPG",
    "/images/engagement (3).JPG",
    "/images/engagement (4).JPG",
    "/images/engagement (5).jpg",
    "/images/engagement (6).JPG",
    "/images/engagement (7).JPG",
    "/images/engagement (8).JPG",
    "/images/engagement (9).JPG",
    "/images/engagement (10).jpg",
    "/images/engagement (11).jpg",
    "/images/engagement (13).jpg",
    "/images/engagement (14).jpg",
    "/images/engagement (15).jpg",
    "/images/engagement (16).jpg",
    "/images/engagement (17).jpg",
    "/images/engagement (18).jpg",
  ]

  const courtWeddingImages = [
    "/images/court (1).JPG",
    "/images/court (3).jpg",
    "/images/court (4).JPG",
    "/images/court (2).JPG",
  ]

  const churchWeddingImages = [
    "/images/wedding (1).JPG",
    "/images/wedding (2).jpg",
    "/images/wedding (3).JPG",
    "/images/wedding (4).JPG",
  ]

  const traditionalWeddingImages = [
    "/images/pre-wedding (1).jpg",
    "/images/pre-wedding (2).jpg",
    "/images/pre-wedding (3).jpg",
    "/images/pre-wedding (4).jpg",
    "/images/pre-wedding (5).jpg",
    "/images/pre-wedding (6).jpg",
    "/images/pre-wedding (7).jpg",
    "/images/pre-wedding (9).jpg",
    "/images/pre-wedding (10).jpg",
    "/images/pre-wedding (11).jpg",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Journey through our love story, from the first spark to our beautiful celebration of forever
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GallerySection
          title="The Proposal"
          description="The magical moment when our love story took its most beautiful turn. The surprise, joy, and overwhelming emotion of this life-changing question."
          images={proposalImages}
        />

        <GallerySection
          title="Our Beginning"
          description="The beautiful start of our love story. Intimate moments that showcase our connection and the chemistry that brought us together."
          images={introductionImages}
        />

        <GallerySection
          title="Engagement Bliss"
          description="Celebrating our commitment to each other. These photos capture our excitement and anticipation for our upcoming union."
          images={engagementImages}
        />

        <GallerySection
          title="Court Wedding"
          description="Making it official. The legal ceremony that marked the beginning of our married life together."
          images={courtWeddingImages}
        />

        <GallerySection
          title="Church Wedding"
          description="Our sacred vows exchanged in the presence of God and our loved ones. The spiritual beauty of our holy union."
          images={churchWeddingImages}
        />

        <GallerySection
          title="Traditional Wedding"
          description="Honoring our cultural heritage and family traditions. Celebrating the rich customs that connect our union to generations of love."
          images={traditionalWeddingImages}
        />
      </div>
    </div>
  )
}
