import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact Vinayaka Agro Foods | Butterfly Tutti Frutti Manufacturer',
  description: 'Get in touch with Vinayaka Agro Foods for tutti frutti requirements, wholesale orders, export enquiries, and product information. Call +91 98765 43210 or email us.',
  keywords: 'contact vinayaka agro foods, tutti frutti manufacturer contact, butterfly brand contact',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Get in touch with Vinayaka Agro Foods for all your tutti frutti requirements. We&apos;re here to help with product information, wholesale orders, and export enquiries.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Enquiry Type
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select enquiry type</option>
                        <option value="product-info">Product Information</option>
                        <option value="wholesale">Wholesale Enquiry</option>
                        <option value="export">Export Enquiry</option>
                        <option value="sample">Sample Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">🏢</span>
                    Head Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Vinayaka Agro Foods Pvt. Ltd.</p>
                    <p className="text-gray-600">
                      123 Industrial Area, Food Park<br/>
                      Sector 15, MIDC<br/>
                      Mumbai, Maharashtra 400001<br/>
                      India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Phone & Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Sales & General Enquiries</p>
                    <p className="text-gray-600">📞 +91 98765 43210</p>
                    <p className="text-gray-600">✉️ info@vinayaka-agro.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Wholesale Orders</p>
                    <p className="text-gray-600">📞 +91 98765 43211</p>
                    <p className="text-gray-600">✉️ wholesale@vinayaka-agro.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Export Department</p>
                    <p className="text-gray-600">📞 +91 98765 43212</p>
                    <p className="text-gray-600">✉️ export@vinayaka-agro.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">⏰</span>
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      All times are Indian Standard Time (IST)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">📋</span>
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">FSSAI License:</span>
                      <span className="font-medium">12345678901234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST Number:</span>
                      <span className="font-medium">29ABCDE1234F1Z5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Export License:</span>
                      <span className="font-medium">0123456789</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CIN:</span>
                      <span className="font-medium">U15139MH2010PTC123456</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the minimum order quantity?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For wholesale orders, our MOQ is 100kg. For export orders, MOQ starts from 1000kg depending on the destination country.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide samples?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide free samples up to 500g for quality evaluation. Shipping charges may apply for international samples.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your payment terms?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer flexible payment terms: 15-45 days based on order value and customer relationship. Advance payment may be required for new customers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer private labeling?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer private labeling services for bulk orders above 2000kg. Custom packaging and branding options are available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the shelf life?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Butterfly tutti frutti has a shelf life of 12 months from the date of manufacturing when stored in cool, dry conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you export to my country?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We currently export to 15+ countries. Contact our export department with your country details for specific requirements and feasibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Us
            </h2>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <div className="text-xl font-semibold text-gray-700">Interactive Map</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Vinayaka Agro Foods, Mumbai, India
                  </div>
                  <p className="text-sm text-gray-400 mt-4 max-w-sm">
                    Map integration can be added using Google Maps API or similar mapping service
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
