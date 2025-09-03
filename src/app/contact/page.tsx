import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact Vinayaka Agro Foods | Butterfly Tutti Frutti Manufacturer',
  description: 'Get in touch with Vinayaka Agro Foods for tutti frutti requirements, wholesale orders, export enquiries, and product information. Call +91 9441587748 or email us.',
  keywords: 'contact vinayaka agro foods, tutti frutti manufacturer contact, butterfly brand contact',
}

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
                  <form className="space-y-6" action="mailto:contact@vinayakaagrofoods.com" method="post" encType="text/plain">
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
                        suppressHydrationWarning={true}
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
                    <p className="font-medium text-gray-900">Vinayaka Agro Foods</p>
                    <p className="text-gray-600">
                      2-100-/3 Kandivanam Village<br/>
                      Shadnagar, Rangareddy District<br/>
                      Telangana 509410<br/>
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
                    <p className="text-gray-600">📞 +91 9441587748</p>
                    <p className="text-gray-600">✉️ contact@vinayakaagrofoods.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Wholesale Orders</p>
                    <p className="text-gray-600">📞 +91 9441587748</p>
                    <p className="text-gray-600">✉️ contact@vinayakaagrofoods.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Export Department</p>
                    <p className="text-gray-600">📞 +91 9441587748</p>
                    <p className="text-gray-600">✉️ contact@vinayakaagrofoods.com</p>
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
                      <span className="font-medium">13624010000436</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GSTIN/UIN:</span>
                      <span className="font-medium">36BNHPS4424F1ZX</span>
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
                <CardTitle className="text-lg">How do I get current pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Please call us at +91 9441587748 or send us a message with your requirements. Prices vary based on quantity and market conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide samples?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we can provide small samples for quality checking. Contact us with your address and requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What areas do you deliver to?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We primarily serve Telangana and nearby states. For other locations, please contact us to check delivery options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What types of tutti frutti do you make?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We make standard tutti frutti in various colors and sizes. Contact us to discuss your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the shelf life?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our tutti frutti has good shelf life when stored properly in cool, dry conditions. Contact us for specific storage instructions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you supply outside Telangana?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We can arrange delivery to other states. Call us to discuss transportation and delivery arrangements for your location.
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
                    Vinayaka Agro Foods, Shadnagar, Telangana, India
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

export default ContactPage
