'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProductSection({ title }) {
  const products = [
    {
      id: 1,
      name: 'Diamond Earrings',
      price: 299,
      image: '/images/earrings-03-a-240x300.jpg',
    },
    {
      id: 2,
      name: 'Pearl Earrings',
      price: 199,
      image: '/images/earrings-04-a-240x300.jpg',
    },
    {
      id: 3,
      name: 'Gold Hoops',
      price: 249,
      image: '/images/earrings-01-a-240x300.jpg',
    },
    {
      id: 4,
      name: 'Crystal Drops',
      price: 179,
      image: '/images/earrings-05-a-240x300.jpg',
    },
  ]

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
