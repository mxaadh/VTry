import Image from 'next/image'
import Link from 'next/link'

export default function AlwaysOnTrend() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="/images/bg-02.jpg"
              alt="Jewelry Collection"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-6">Always On Trend</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our jewelry pieces are carefully curated to match the latest fashion trends
              while maintaining timeless elegance that never goes out of style.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Each piece is handcrafted with attention to detail, ensuring quality
              and uniqueness in every design.
            </p>
            <Link
              href="#products"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
