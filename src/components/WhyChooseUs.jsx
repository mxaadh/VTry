import { FiAward, FiShield, FiTruck } from 'react-icons/fi'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FiAward size={40} />,
      title: 'Premium Quality',
      description: 'All our jewelry is crafted from the finest materials with expert craftsmanship.',
    },
    {
      icon: <FiShield size={40} />,
      title: 'Authenticity Guaranteed',
      description: 'Every piece comes with a certificate of authenticity and warranty.',
    },
    {
      icon: <FiTruck size={40} />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders with secure and tracked delivery.',
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-gray-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
