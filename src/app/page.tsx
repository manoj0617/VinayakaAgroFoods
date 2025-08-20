import { Metadata } from 'next'
import Link from 'next/link'
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
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Butterfly is the flagship brand of Vinayaka Agro Foods, known for its premium quality tutti frutti loved by bakeries, ice cream makers, and confectioners worldwide.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/wholesale">Get Wholesale Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/export">Export Enquiry</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  FSSAI Certified
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Export Quality
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Bulk Supply
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-red-200 via-yellow-200 to-green-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍬</div>
                    <div className="text-xl font-semibold text-gray-700">Premium Tutti Frutti</div>
                    <div className="text-sm text-gray-500 mt-2">High-quality candied papaya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Butterfly Tutti Frutti?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of bakeries, ice cream makers, and confectioners across India and globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">🏆</div>
                <CardTitle className="text-xl">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Made from selected raw papaya using traditional methods. Each piece maintains perfect texture, color, and taste for consistent results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">✅</div>
                <CardTitle className="text-xl">FSSAI Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fully licensed and certified by FSSAI. Manufactured in hygienic conditions following all food safety standards and regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">📦</div>
                <CardTitle className="text-xl">Bulk Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Available in 1kg, 5kg, and bulk packaging. Reliable supply chain ensures consistent availability for your business needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Product Range
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Under the brand name Butterfly, Vinayaka Agro Foods produces tutti frutti for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🧁</div>
                <CardTitle>Bakery Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Perfect for cakes, muffins, bread, and pastries. Maintains color and texture during baking.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/tutti-frutti-cake">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🍦</div>
                <CardTitle>Ice Cream Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Special grade for ice cream manufacturing. Maintains firmness in frozen conditions.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/tutti-frutti-ice-cream">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🍬</div>
                <CardTitle>Confectionery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Ideal for chocolates, candies, and sweet preparations. Available in various cuts and sizes.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/tutti-frutti">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Butterfly tutti frutti is our go-to choice for all cake orders. The quality is consistent and customers love the taste.&rdquo;
                </p>
                <div className="font-semibold">— Ravi Kumar, Sweet Dreams Bakery</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Excellent quality for export. Our international clients are very satisfied with Butterfly brand tutti frutti.&rdquo;
                </p>
                <div className="font-semibold">— Priya Exports, Mumbai</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Best pricing for bulk orders and never had any quality issues. Highly recommend Vinayaka Agro Foods.&rdquo;
                </p>
                <div className="font-semibold">— Ice Cream Junction, Delhi</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Premium Tutti Frutti?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get wholesale pricing for bulk orders or explore export opportunities for international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/wholesale">Get Wholesale Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
