import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Products | Butterfly Tutti Frutti',
  description: 'Butterfly brand tutti frutti products. Premium candied papaya for bakeries, ice creams, and confectionery.',
  keywords: 'tutti frutti products, butterfly brand, candied papaya, bakery ingredients, ice cream ingredients',
}

export default function ProductsPage() {
  const products = [
    {
      title: 'Premium Tutti Frutti',
      description: 'Our flagship product made from carefully selected raw papaya. Available in vibrant colors for all food applications.',
      href: '/products/tutti-frutti',
      icon: '🍬',
      features: ['4 colors available', '1kg, 5kg, bulk packs', '12 months shelf life']
    },
    {
      title: 'Tutti Frutti for Cakes',
      description: 'Special grade tutti frutti perfect for baking applications. Heat stable and maintains color during baking.',
      href: '/products/tutti-frutti-cake',
      icon: '🧁',
      features: ['Heat stable', 'Color retention', 'Perfect for cakes & muffins']
    },
    {
      title: 'Ice Cream Grade',
      description: 'Premium quality tutti frutti designed specifically for ice cream manufacturing and frozen desserts.',
      href: '/products/tutti-frutti-ice-cream',
      icon: '🍦',
      features: ['Frozen grade', 'Maintains texture', 'Food service packs']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Butterfly Products
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our complete range of premium tutti frutti products. Each product under the Butterfly brand is manufactured by Vinayaka Agro Foods with the highest quality standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.href} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={product.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Butterfly */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Butterfly Brand?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Quality you can trust, backed by Vinayaka Agro Foods&apos; manufacturing excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏆</div>
                <CardTitle className="text-gray-900">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Made from carefully selected raw papaya using traditional methods for consistent quality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🔬</div>
                <CardTitle className="text-gray-900">Lab Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Every batch is tested for quality, safety, and compliance with food standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📦</div>
                <CardTitle className="text-gray-900">Multiple Pack Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Available in consumer packs (1kg) to industrial bulk packaging for all business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🌍</div>
                <CardTitle className="text-gray-900">Export Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Meets international food safety standards for global markets and export requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Butterfly Products?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us for wholesale pricing, samples, or custom requirements for your business.
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
