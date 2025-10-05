import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tutti Frutti Exporters from India | Butterfly by Vinayaka Agro Foods',
  description: 'Butterfly tutti frutti exporter from India. FSSAI certified, international standards. Trusted supplier to USA, Europe, Middle East, and Asia.',
  keywords: 'tutti frutti exporters India, export tutti frutti to USA, Indian tutti frutti suppliers, international food export',
  openGraph: {
    title: 'Tutti Frutti Exporters from India | Butterfly',
    description: 'Premium tutti frutti export from India. FSSAI certified, international quality standards.',
    type: 'website',
  },
}

export default function ExportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Tutti Frutti Exporters from India
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Vinayaka Agro Foods exports Butterfly brand tutti frutti worldwide, meeting FSSAI and international food safety standards. Trusted partner for global food distributors and manufacturers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#export-markets">View Export Markets</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Export Enquiry</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="text-2xl mr-2">🌍</span>
                  Exporting to 15+ Countries
                </span>
                <span className="flex items-center">
                  <span className="text-2xl mr-2">📋</span>
                  All Export Licenses
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌏</div>
                    <div className="text-xl font-semibold text-gray-700">Global Export</div>
                    <div className="text-sm text-gray-500 mt-2">Butterfly Tutti Frutti Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              International Quality Standards
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Meeting global food safety requirements for export markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🇮🇳</div>
                <CardTitle>FSSAI Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Licensed by Food Safety and Standards Authority of India with full compliance to Indian food regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📋</div>
                <CardTitle>Export License</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Valid export license from DGFT (Directorate General of Foreign Trade) for international food trade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🔬</div>
                <CardTitle>Lab Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular third-party laboratory testing for microbiological safety, pesticide residues, and heavy metals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📦</div>
                <CardTitle>Export Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Food-grade packaging suitable for long-distance shipping and various climate conditions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section id="export-markets" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Export Markets
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Butterfly tutti frutti reaches customers across continents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <span className="text-2xl mr-2">🇺🇸</span>
                  North America
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>• United States</p>
                  <p>• Canada</p>
                  <p>• Mexico</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  FDA compliant exports to major food distributors and bakery chains.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <span className="text-2xl mr-2">🇪🇺</span>
                  Europe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>• United Kingdom</p>
                  <p>• Germany</p>
                  <p>• Netherlands</p>
                  <p>• France</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  EU food safety standards compliance for European markets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <span className="text-2xl mr-2">🕌</span>
                  Middle East & Asia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>• UAE</p>
                  <p>• Saudi Arabia</p>
                  <p>• Singapore</p>
                  <p>• Malaysia</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Halal certification available for Middle Eastern markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Export Process
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Streamlined process from enquiry to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enquiry & Quote</h3>
              <p className="text-gray-600 text-sm">Submit your requirements and receive detailed quote with specifications within 24 hours.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sample & Approval</h3>
              <p className="text-gray-600 text-sm">Free samples sent for quality approval. Custom specifications can be developed.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Order & Documentation</h3>
              <p className="text-gray-600 text-sm">Order confirmation with advance payment. All export documents prepared.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Production & Shipping</h3>
              <p className="text-gray-600 text-sm">Manufacturing and quality checks followed by secure packaging and shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Export Documentation
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Complete documentation support for smooth customs clearance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Standard Export Documents</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📋</span>
                  <span>Commercial Invoice</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📋</span>
                  <span>Packing List</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📋</span>
                  <span>Bill of Lading / Airway Bill</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📋</span>
                  <span>Certificate of Origin</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📋</span>
                  <span>FSSAI License Copy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📋</span>
                  <span>Export License Copy</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Quality Certificates</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">🔬</span>
                  <span>Laboratory Analysis Report</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">🔬</span>
                  <span>Microbiological Test Certificate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">🔬</span>
                  <span>Pesticide Residue Test Report</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">🔬</span>
                  <span>Heavy Metals Test Certificate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">🔬</span>
                  <span>Nutritional Analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">🕌</span>
                  <span>Halal Certificate (if required)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">📦</div>
                <CardTitle>View Our Products</CardTitle>
                <CardDescription>
                  Explore our complete range of Butterfly tutti frutti products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  See detailed specifications, packaging options, and applications for each product variant we export.
                </p>
                <Button asChild className="w-full">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">📝</div>
                <CardTitle>Read Our Blog</CardTitle>
                <CardDescription>
                  Recipes, industry insights, and manufacturing processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn about tutti frutti applications, quality standards, and the latest food industry trends.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog">Visit Blog</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Export Enquiry
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Get started with exporting Butterfly tutti frutti to your country
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
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Import Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="port" className="block text-sm font-medium text-gray-700 mb-2">
                    Destination Port
                  </label>
                  <input
                    type="text"
                    id="port"
                    name="port"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Required Quantity (MT/month)
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select quantity</option>
                    <option value="1-5">1-5 MT</option>
                    <option value="5-10">5-10 MT</option>
                    <option value="10-20">10-20 MT</option>
                    <option value="20+">20+ MT</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Shipping
                  </label>
                  <select
                    id="shipping"
                    name="shipping"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select shipping method</option>
                    <option value="sea">Sea Freight</option>
                    <option value="air">Air Freight</option>
                    <option value="both">Both options</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Special packaging, certifications, color preferences, etc..."
                  />
                </div>

                <div className="md:col-span-2">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Export Enquiry
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
              <div className="font-semibold">Export Email</div>
              <div className="text-gray-600">export@vinayaka-agro.com</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🌍</div>
              <div className="font-semibold">Export Office</div>
              <div className="text-gray-600">Mumbai, India</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
