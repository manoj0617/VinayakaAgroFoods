import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Butterfly Tutti Frutti — Manufactured by Vinayaka Agro Foods',
  description: 'Vinayaka Agro Foods, manufacturer of Butterfly brand tutti frutti, is India\'s trusted supplier and exporter of high-quality candied papaya for bakeries, ice creams, and confectionery worldwide.',
  keywords: 'tutti frutti, tutti frutti manufacturer India, bulk tutti frutti, wholesale tutti frutti, butterfly tutti frutti, candied papaya',
  openGraph: {
    title: 'Butterfly Tutti Frutti — Manufactured by Vinayaka Agro Foods',
    description: 'India\'s leading tutti frutti manufacturer and exporter. Premium quality candied papaya for global markets.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Butterfly Tutti Frutti — Manufactured by{' '}
                <span className="text-green-600">Vinayaka Agro Foods</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                Quality tutti frutti manufacturer from Telangana. We supply to bakeries, ice cream makers, and confectioners across India and export markets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/contact">Contact for Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <a href="tel:+919441587748">Call +91 9441587748</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  FSSAI Licensed
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Quality Products
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-orange-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-64 h-80 mx-auto mb-4 rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="/front_packet_white.png" 
                      alt="Butterfly Tutti Frutti Package - Premium Quality by Vinayaka Agro Foods" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">Premium Quality</div>
                  <div className="text-gray-700">Tutti Frutti for Global Markets</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                #1 Brand
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Call Us Now</h3>
                <p className="text-gray-700 mb-4">Get instant quotes and product information</p>
                <Button asChild size="sm" className="w-full">
                  <a href="tel:+919441587748">+91 9441587748</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Email Us</h3>
                <p className="text-gray-700 mb-4">Send detailed requirements and get quotes</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="mailto:contact@vinayakaagrofoods.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Visit Factory</h3>
                <p className="text-gray-700 mb-4">Schedule a visit to our manufacturing unit</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Family-run business producing quality tutti frutti for over 10 years. Simple, honest, reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <span className="text-2xl mr-3">✅</span>
                  Good Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Made with care using quality raw materials. FSSAI licensed facility following food safety standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">�</span>
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Speak directly with us for orders and queries. No middlemen. Call +91 9441587748 for current pricing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <span className="text-2xl mr-3">🚛</span>
                  Reliable Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We supply tutti frutti to customers across Telangana and nearby states. Contact us for delivery details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Butterfly tutti frutti is available in various forms to meet diverse industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl text-center mb-4">🍰</div>
                <CardTitle className="text-gray-900">Cake & Bakery Solutions</CardTitle>
                <CardDescription className="text-gray-700">Perfect for cakes, pastries, and baked goods</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Mixed color varieties</li>
                  <li>• Consistent size and texture</li>
                  <li>• Heat resistant for baking</li>
                  <li>• Long shelf life</li>
                </ul>
                <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/products/tutti-frutti-cake">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl text-center mb-4">🍦</div>
                <CardTitle className="text-gray-900">Ice Cream Solutions</CardTitle>
                <CardDescription className="text-gray-700">Specially processed for ice cream manufacturing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Freeze-resistant formula</li>
                  <li>• Maintains texture in cold</li>
                  <li>• Food-grade colors</li>
                  <li>• Bulk packaging available</li>
                </ul>
                <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/products/tutti-frutti-ice-cream">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl text-center mb-4">🍬</div>
                <CardTitle className="text-gray-900">Standard Tutti Frutti</CardTitle>
                <CardDescription className="text-gray-700">Premium quality candied papaya for all uses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Multiple size options</li>
                  <li>• Natural fruit base</li>
                  <li>• Vibrant colors</li>
                  <li>• Custom packaging</li>
                </ul>
                <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/products/tutti-frutti">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Tutti Frutti for Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Call us directly for current pricing and availability. We&apos;re here to help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919441587748">Call +91 9441587748</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600">
              <Link href="/contact">Send Message</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
