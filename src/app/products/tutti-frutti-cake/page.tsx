import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tutti Frutti Cake & Baking Solutions | Butterfly by Vinayaka Agro Foods',
  description: 'Premium tutti frutti specifically designed for cakes and baking. Heat-stable, color-retaining candied papaya perfect for bakeries. Butterfly brand by Vinayaka Agro Foods.',
  keywords: 'tutti frutti cake, tutti frutti cake recipe, bakery ingredients, heat stable tutti frutti, baking solutions',
}

export default function TuttiFruttiCakePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Tutti Frutti Cake & Baking Solutions
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Specially formulated Butterfly tutti frutti for baking applications. Heat-stable formula ensures vibrant colors and perfect texture in all your baked goods.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/wholesale">Get Bakery Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#recipes">View Recipes</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-pink-200 via-yellow-200 to-orange-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧁</div>
                    <div className="text-xl font-semibold text-gray-700">Baking Grade</div>
                    <div className="text-sm text-gray-500 mt-2">Heat Stable Tutti Frutti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baking Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Perfect for Professional Baking
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🔥</div>
                <CardTitle>Heat Stable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maintains color and texture at high baking temperatures up to 180°C. Perfect for all baking applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🎨</div>
                <CardTitle>Color Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vibrant colors remain bright after baking. No bleeding or fading during the baking process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">⚖️</div>
                <CardTitle>Uniform Size</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consistent 4-6mm pieces ensure even distribution throughout your baked goods.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recipe Ideas */}
      <section id="recipes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Baking Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Fruit Cake</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Classic fruit cake with tutti frutti. Use 150g per kg of flour for perfect texture and taste.
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• Rich fruit cake</li>
                  <li>• Plum cake variations</li>
                  <li>• Wedding cakes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Muffins & Cupcakes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Add colorful tutti frutti to muffins and cupcakes. 50g per 12 muffins is the perfect ratio.
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• Vanilla muffins</li>
                  <li>• Birthday cupcakes</li>
                  <li>• Breakfast muffins</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies & Biscuits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Create colorful cookies with tutti frutti. Great for both soft and crispy varieties.
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• Sugar cookies</li>
                  <li>• Shortbread biscuits</li>
                  <li>• Tea-time cookies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Baking Specifications
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Heat Tolerance</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Max Temperature:</strong> 180°C</div>
                      <div><strong>Baking Time:</strong> Up to 60 minutes</div>
                      <div><strong>Color Stability:</strong> 95%+</div>
                      <div><strong>Texture Retention:</strong> Excellent</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Usage Guidelines</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Recommended Usage:</strong> 10-15% of flour weight</div>
                      <div><strong>Mixing:</strong> Add during final mixing stage</div>
                      <div><strong>Coating:</strong> Dust with flour before folding in</div>
                      <div><strong>Storage:</strong> Cool, dry place below 25°C</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Packaging for Bakeries
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Small Bakeries</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>1kg Packs</span>
                        <span className="font-semibold">₹300-340/kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5kg Packs</span>
                        <span className="font-semibold">₹280-320/kg</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3">
                        Perfect for boutique bakeries and cake shops
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Commercial Bakeries</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>25kg Bags</span>
                        <span className="font-semibold">₹260-300/kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bulk Orders</span>
                        <span className="font-semibold">₹240-280/kg</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3">
                        For large-scale bakery operations
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Baking?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get premium baking-grade tutti frutti for your bakery. Special pricing available for bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/wholesale">Get Bakery Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600">
              <Link href="/contact">Request Sample</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
