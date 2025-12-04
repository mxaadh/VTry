import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-01.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              Timeless Elegance
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Discover our exquisite collection of handcrafted jewelry
            </p>
            <Link
              href="#products"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
