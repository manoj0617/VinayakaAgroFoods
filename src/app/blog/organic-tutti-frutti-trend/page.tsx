import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Organic Tutti Frutti Trend - Natural & Healthier Options',
  description: 'Understanding the growing demand for organic and natural tutti frutti products in India and globally. Industry insights from Butterfly brand.',
  keywords: 'organic tutti frutti, natural candied papaya, healthy tutti frutti, food trends',
}

export default function OrganicTuttiFruttiTrendPage() {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          {' > '}
          <span className="text-gray-900">Organic Tutti Frutti Trend</span>
        </nav>

        <header className="mb-8">
          <div className="text-sm text-green-600 font-semibold mb-2">Industry Trends</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organic Tutti Frutti Trend
          </h1>
          <p className="text-xl text-gray-700">
            Understanding the growing demand for organic and natural tutti frutti products
          </p>
          <div className="mt-4 text-sm text-gray-600">
            Published: September 2024 | By Vinayaka Agro Foods
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rising Organic Trend</h2>
            
            <p className="text-gray-700 mb-4">
              Consumer awareness about food ingredients and health has led to increased demand for organic and natural food products, including tutti frutti.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Makes Tutti Frutti Organic?</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Made from organically grown papaya</li>
              <li>Use of natural sweeteners instead of refined sugar</li>
              <li>Natural food colors derived from fruits and vegetables</li>
              <li>No artificial preservatives or additives</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Market Demand</h3>
            <p className="text-gray-700 mb-4">
              Premium bakeries, health-conscious consumers, and export markets are increasingly seeking organic alternatives. This trend is growing in urban areas across India.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Challenges in Organic Production</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Higher raw material costs</li>
              <li>Limited availability of organic papaya</li>
              <li>Certification requirements</li>
              <li>Shorter shelf life compared to conventional products</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Future Outlook</h3>
            <p className="text-gray-700 mb-4">
              As consumer demand grows and organic farming expands, we expect to see more organic tutti frutti options in the market. Vinayaka Agro Foods is exploring natural alternatives to meet this demand.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment</h3>
            <p className="text-gray-700">
              While we currently focus on quality conventional tutti frutti manufacturing, we are researching natural color alternatives and improved processing methods to meet evolving customer preferences.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in Premium Tutti Frutti?
          </h2>
          <p className="text-green-100 mb-6">
            Contact us to discuss your specific quality requirements
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
