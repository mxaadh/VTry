'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProductDetail({ productId }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const product = {
    id: productId,
    name: 'Diamond Earrings',
    price: 299,
    description: 'Exquisite diamond earrings crafted with precision and elegance. Perfect for any special occasion.',
    image: '/images/earrings-03-a-240x300.jpg',
    material: '18K White Gold',
    stone: 'Natural Diamonds',
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart`)
    router.push('/cart')
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-96 md:h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-900 mb-6">${product.price}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mb-6 space-y-2">
              <div className="flex">
                <span className="font-medium w-24">Material:</span>
                <span className="text-gray-600">{product.material}</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24">Stone:</span>
                <span className="text-gray-600">{product.stone}</span>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-24 px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
