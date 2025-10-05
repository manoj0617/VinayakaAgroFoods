import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tutti Frutti for Bakeries & Ice Cream | Butterfly India',
  description: 'Premium tutti frutti from Butterfly by Vinayaka Agro Foods. Perfect for bakeries, ice cream, and confectionery.',
  keywords: 'tutti frutti, tutti frutti price per kg, tutti frutti suppliers in India, candied papaya, bakery ingredients',
  openGraph: {
    title: 'Tutti Frutti | Butterfly Brand',
    description: 'High-quality candied papaya for bakeries and ice creams.',
    type: 'website',
  },
}

export default function TuttiFruttiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Tutti Frutti for Bakeries, Ice Creams & Confectionery
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Premium Butterfly brand tutti frutti manufactured by Vinayaka Agro Foods. Made from carefully selected raw papaya, our candied papaya adds vibrant colors and delicious taste to your food products.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/wholesale">Get Bulk Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Request Sample</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-red-200 via-orange-200 to-green-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍬</div>
                    <div className="text-xl font-semibold text-gray-700">Butterfly Tutti Frutti</div>
                    <div className="text-sm text-gray-500 mt-2">Premium Quality Candied Papaya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Description</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Butterfly Tutti Frutti is made from premium quality raw papaya, carefully processed using traditional methods to ensure consistent taste, texture, and color. Our manufacturing process maintains the natural sweetness while adding vibrant colors that make your baked goods, ice creams, and confectionery products visually appealing.
                </p>
                <p>
                  Each piece of tutti frutti is individually crafted to maintain uniform size and texture, ensuring even distribution in your recipes. The product has excellent shelf life and maintains its quality during storage and transportation.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li>✅ Made from premium quality raw papaya</li>
                  <li>✅ Vibrant natural colors (Red, Green, Yellow, Orange)</li>
                  <li>✅ Consistent size and texture</li>
                  <li>✅ Long shelf life (12 months)</li>
                  <li>✅ FSSAI certified manufacturing</li>
                  <li>✅ No artificial preservatives</li>
                  <li>✅ Heat stable for baking applications</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Moisture Content:</strong> 18-22%</div>
                    <div><strong>Sugar Content:</strong> 65-70%</div>
                    <div><strong>pH Level:</strong> 3.5-4.5</div>
                    <div><strong>Particle Size:</strong> 4-6mm</div>
                    <div><strong>Colors Available:</strong> Red, Green, Yellow, Orange</div>
                    <div><strong>Shelf Life:</strong> 12 months from manufacturing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Quick Order</CardTitle>
                  <CardDescription>Get instant pricing for bulk orders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>1kg Pack</span>
                      <span className="font-semibold">₹280-320/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5kg Pack</span>
                      <span className="font-semibold">₹260-300/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bulk (100kg+)</span>
                      <span className="font-semibold">₹220-250/kg</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-4">
                      * Prices vary based on quantity, colors, and current market conditions. Contact for latest pricing.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/wholesale">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>📞 <strong>Phone:</strong> +91 98765 43210</div>
                    <div>✉️ <strong>Email:</strong> info@vinayaka-agro.com</div>
                    <div>⏰ <strong>Hours:</strong> Mon-Sat 9AM-6PM</div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Applications & Uses
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Butterfly tutti frutti is perfect for various food applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🧁</div>
                <CardTitle>Bakery Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Perfect for cakes, muffins, cookies, bread, pastries, and donuts. Maintains color and texture during baking.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fruit cakes and plum cakes</li>
                  <li>• Muffins and cupcakes</li>
                  <li>• Sweet bread and buns</li>
                  <li>• Pastries and tarts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🍦</div>
                <CardTitle>Ice Cream & Frozen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Special grade that maintains firmness in frozen conditions. Popular in tutti frutti ice cream flavors.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tutti frutti ice cream</li>
                  <li>• Frozen yogurt</li>
                  <li>• Ice cream sundaes</li>
                  <li>• Frozen desserts</li>
                </ul>
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
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chocolate bars and truffles</li>
                  <li>• Candy and toffees</li>
                  <li>• Traditional sweets</li>
                  <li>• Dessert toppings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packaging Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Packaging Options
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the right packaging size for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">📦</div>
                <CardTitle>1kg Consumer Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Perfect for small bakeries, home bakers, and retail customers. Easy-to-store consumer-friendly packaging.
                </CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Pack Size:</strong> 1kg</div>
                  <div><strong>Carton:</strong> 20 packs per carton</div>
                  <div><strong>MOQ:</strong> 1 carton (20kg)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">📦📦</div>
                <CardTitle>5kg Industrial Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Ideal for medium-scale bakeries, ice cream parlors, and food manufacturers. Cost-effective packaging.
                </CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Pack Size:</strong> 5kg</div>
                  <div><strong>Carton:</strong> 4 packs per carton</div>
                  <div><strong>MOQ:</strong> 5 cartons (100kg)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">🏭</div>
                <CardTitle>Bulk Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  For large-scale manufacturers, exporters, and distributors. Custom packaging available on request.
                </CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Pack Size:</strong> 25kg/50kg bags</div>
                  <div><strong>MOQ:</strong> 1000kg minimum</div>
                  <div><strong>Custom:</strong> Private labeling available</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Butterfly Tutti Frutti?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get competitive wholesale pricing and ensure consistent supply for your business. Contact us today for bulk orders and export opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/wholesale">Get Wholesale Quote</Link>
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
