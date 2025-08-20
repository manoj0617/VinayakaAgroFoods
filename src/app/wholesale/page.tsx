import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wholesale Tutti Frutti Suppliers in India | Butterfly by Vinayaka Agro Foods',
  description: 'Get wholesale tutti frutti pricing from India\'s leading manufacturer. Competitive rates for bulk orders, MOQ starting from 100kg. FSSAI certified quality guaranteed.',
  keywords: 'tutti frutti wholesale, tutti frutti wholesale price per kg, bulk tutti frutti suppliers India, tutti frutti manufacturer',
  openGraph: {
    title: 'Wholesale Tutti Frutti Suppliers | Butterfly Brand',
    description: 'Competitive wholesale pricing for tutti frutti. Bulk orders from 100kg+. FSSAI certified manufacturer.',
    type: 'website',
  },
}

export default function WholesalePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Wholesale Tutti Frutti Suppliers in India
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Get competitive wholesale pricing directly from the manufacturer. Vinayaka Agro Foods offers bulk tutti frutti supply for distributors, retailers, and food manufacturers across India and globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Link href="#pricing">View Pricing Tiers</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact-form">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Wholesale Pricing Tiers
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Competitive pricing based on order quantity. Prices may vary based on colors and market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for new businesses</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">₹280-320</div>
                <div className="text-sm text-gray-500">per kg</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>MOQ: 100kg minimum</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mixed colors available</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>1kg & 5kg packaging</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>15 days payment terms</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Standard delivery</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-6">
                  <Link href="#contact-form">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 hover:border-green-600 transition-colors relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Business</CardTitle>
                <CardDescription>For established businesses</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">₹250-280</div>
                <div className="text-sm text-gray-500">per kg</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>MOQ: 500kg minimum</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom color ratios</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bulk packaging options</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>30 days payment terms</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority delivery</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dedicated account manager</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-6">
                  <Link href="#contact-form">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large-scale operations</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">₹220-250</div>
                <div className="text-sm text-gray-500">per kg</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>MOQ: 2000kg minimum</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Private labeling available</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom specifications</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>45 days payment terms</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Direct factory pickup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Volume discounts</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-6">
                  <Link href="#contact-form">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need a custom quote for larger quantities or special requirements?
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact-form">Contact Our Sales Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us for Wholesale?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏭</div>
                <CardTitle>Direct Manufacturer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No middleman costs. Get the best prices directly from Vinayaka Agro Foods manufacturing facility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📦</div>
                <CardTitle>Consistent Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monthly production capacity of 100+ tons ensures uninterrupted supply for your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">✅</div>
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  FSSAI certified manufacturing with consistent quality control and testing at every stage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🚚</div>
                <CardTitle>Pan-India Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Established logistics network ensures timely delivery across all major cities in India.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Your Wholesale Quote
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Fill out the form below and our sales team will get back to you within 24 hours
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact-name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Required Quantity (kg/month)
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select quantity</option>
                    <option value="100-500">100-500 kg</option>
                    <option value="500-1000">500-1000 kg</option>
                    <option value="1000-5000">1000-5000 kg</option>
                    <option value="5000+">5000+ kg</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City, State"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="colors" className="block text-sm font-medium text-gray-700 mb-2">
                    Color Preferences
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center">
                      <input type="checkbox" name="colors" value="red" className="mr-2" />
                      Red
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="colors" value="green" className="mr-2" />
                      Green
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="colors" value="yellow" className="mr-2" />
                      Yellow
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="colors" value="orange" className="mr-2" />
                      Orange
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any specific requirements, packaging preferences, or questions..."
                  />
                </div>

                <div className="md:col-span-2">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold">Call Us</div>
              <div className="text-gray-600">+91 98765 43210</div>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold">Email Us</div>
              <div className="text-gray-600">wholesale@vinayaka-agro.com</div>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <div className="font-semibold">Business Hours</div>
              <div className="text-gray-600">Mon-Sat: 9AM-6PM IST</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
