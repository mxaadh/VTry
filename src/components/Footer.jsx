import Link from 'next/link'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Blingg Jewelry</h3>
            <p className="text-gray-400 text-sm">
              Premium jewelry crafted with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Earrings</li>
              <li className="text-gray-400">Bracelets</li>
              <li className="text-gray-400">Necklaces</li>
              <li className="text-gray-400">Rings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blingg Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
