import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tutti Frutti for Ice Cream | Butterfly India',
  description: 'Ice cream grade tutti frutti that maintains texture when frozen. Perfect for tutti frutti ice cream, frozen yogurt, and desserts. Butterfly quality.',
  keywords: 'tutti frutti ice cream, tutti frutti ice cream recipe, ice cream ingredients, frozen dessert ingredients',
}

export default function TuttiFruttiIceCreamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Tutti Frutti for Ice Cream Manufacturers
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Specially processed Butterfly tutti frutti designed for ice cream and frozen dessert applications. Maintains perfect texture and flavor in frozen conditions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/wholesale">Get Ice Cream Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#applications">View Applications</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍦</div>
                    <div className="text-xl font-semibold text-gray-700">Ice Cream Grade</div>
                    <div className="text-sm text-gray-500 mt-2">Frozen Stable Tutti Frutti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ice Cream Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Engineered for Frozen Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">❄️</div>
                <CardTitle className="text-gray-900">Freeze Stable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Maintains texture and flavor integrity at -18°C to -25°C. No crystallization or texture breakdown.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="text-gray-900">Perfect Bite</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Optimal texture that provides the perfect chew in frozen ice cream without becoming too hard or soft.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🌈</div>
                <CardTitle className="text-gray-900">Vibrant Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Colors remain bright and appealing in frozen state. Creates attractive visual appeal in ice cream.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ice Cream Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🍨</div>
                <CardTitle className="text-gray-900">Tutti Frutti Ice Cream</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-700">
                  The classic tutti frutti flavor that&apos;s been a favorite for generations. Perfect blend of colors and taste.
                </CardDescription>
                <div className="text-sm space-y-1">
                  <div><strong>Usage:</strong> 8-12% of ice cream base</div>
                  <div><strong>Colors:</strong> Mixed or single colors</div>
                  <div><strong>Size:</strong> 4-6mm pieces</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🥶</div>
                <CardTitle className="text-gray-900">Frozen Yogurt</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-700">
                  Add colorful tutti frutti to frozen yogurt for enhanced taste and visual appeal. Popular topping choice.
                </CardDescription>
                <div className="text-sm space-y-1">
                  <div><strong>Usage:</strong> 6-10% mix-in or topping</div>
                  <div><strong>Best with:</strong> Vanilla, strawberry bases</div>
                  <div><strong>Texture:</strong> Maintains chewiness</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🍧</div>
                <CardTitle className="text-gray-900">Sundae Toppings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-700">
                  Perfect as a colorful topping for ice cream sundaes, providing both visual appeal and taste variety.
                </CardDescription>
                <div className="text-sm space-y-1">
                  <div><strong>Usage:</strong> 2-3g per serving</div>
                  <div><strong>Presentation:</strong> Garnish or mix-in</div>
                  <div><strong>Storage:</strong> Ambient temperature OK</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🧊</div>
                <CardTitle>Popsicles & Bars</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Add tutti frutti pieces to popsicles and ice cream bars for extra texture and flavor bursts.
                </CardDescription>
                <div className="text-sm space-y-1">
                  <div><strong>Usage:</strong> 5-8 pieces per bar</div>
                  <div><strong>Distribution:</strong> Even throughout</div>
                  <div><strong>Effect:</strong> Texture contrast</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🍰</div>
                <CardTitle>Ice Cream Cakes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Incorporate into ice cream cake layers or use as decoration for frozen celebration cakes.
                </CardDescription>
                <div className="text-sm space-y-1">
                  <div><strong>Usage:</strong> Layer or decoration</div>
                  <div><strong>Colors:</strong> Match theme colors</div>
                  <div><strong>Stability:</strong> Excellent in layers</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🥤</div>
                <CardTitle>Milkshakes & Smoothies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Blend into thick milkshakes or use as topping for smoothie bowls and thick smoothies.
                </CardDescription>
                <div className="text-sm space-y-1">
                  <div><strong>Usage:</strong> Blend or topping</div>
                  <div><strong>Texture:</strong> Adds chew to drinks</div>
                  <div><strong>Visual:</strong> Colorful appeal</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Manufacturing Guidelines
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Mixing Instructions</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Stage:</strong> Add during final churning</div>
                      <div><strong>Temperature:</strong> Add at -5°C to -8°C</div>
                      <div><strong>Mixing Time:</strong> 30-60 seconds gentle fold</div>
                      <div><strong>Distribution:</strong> Even throughout base</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Storage Conditions</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Temperature:</strong> Below 25°C before use</div>
                      <div><strong>Humidity:</strong> Low humidity environment</div>
                      <div><strong>Container:</strong> Airtight sealed packaging</div>
                      <div><strong>Shelf Life:</strong> 12 months from manufacture</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ice Cream Industry Packaging
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Parlor Packs</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>5kg Food Service</span>
                        <span className="font-semibold">₹270-310/kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10kg Industrial</span>
                        <span className="font-semibold">₹250-290/kg</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3">
                        Perfect for ice cream parlors and small manufacturers
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Industrial Packs</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>25kg Bulk Bags</span>
                        <span className="font-semibold">₹230-270/kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Custom Packing</span>
                        <span className="font-semibold">Contact for pricing</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3">
                        For large ice cream manufacturers
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ice Cream Quality Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🧪</div>
                <CardTitle className="text-gray-900">Lab Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Every batch tested for freeze-thaw stability and texture retention at various temperatures.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏭</div>
                <CardTitle className="text-gray-900">Food Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Manufactured in FSSAI certified facility with strict hygiene and quality control protocols.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">❄️</div>
                <CardTitle className="text-gray-900">Cold Chain Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Stable throughout cold chain storage and distribution. No quality degradation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">✅</div>
                <CardTitle className="text-gray-900">Consistent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Batch-to-batch consistency ensures uniform product quality in your ice cream production.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Perfect for Your Ice Cream Business
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get ice cream grade tutti frutti that meets industry standards. Special rates for ice cream manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/wholesale">Get Industry Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Request Sample</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
