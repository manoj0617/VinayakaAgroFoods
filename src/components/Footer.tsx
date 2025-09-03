import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-green-400">
                Butterfly
              </div>
              <div className="ml-2 text-sm text-gray-300">
                by Vinayaka Agro Foods
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Vinayaka Agro Foods manufactures Butterfly brand tutti frutti in Telangana. Family-run business serving bakeries, ice cream makers, and confectioners across India.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>FSSAI Licensed</strong> Food Manufacturer</p>
              <p><strong>Location:</strong> Telangana, India</p>
              <p><strong>Established:</strong> Over 10 years in business</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <a href="tel:+919441587748" className="text-gray-300 hover:text-green-400 transition-colors">
                  Call for Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Telangana, India</p>
              <p>📞 +91 9441587748</p>
              <p>✉️ contact@vinayakaagrofoods.com</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/VINAYAKAAGROFOOD/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Vinayaka Agro Foods. All rights reserved. Butterfly is our trademark.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.facebook.com/VINAYAKAAGROFOOD/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 text-sm">
                Visit our Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
