import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Tutti Frutti Storage Tips - Keep Your Product Fresh | Vinayaka Agro Foods',
  description: 'Learn the best practices for storing tutti frutti to maintain freshness, color, and quality. Professional storage tips from Butterfly brand manufacturers.',
  keywords: 'tutti frutti storage, candied papaya storage, food storage tips, tutti frutti shelf life',
}

export default function TuttiFruttiStorageTipsPage() {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          {' > '}
          <span className="text-gray-900">Tutti Frutti Storage Tips</span>
        </nav>

        <header className="mb-8">
          <div className="text-sm text-green-600 font-semibold mb-2">Tips & Guides</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutti Frutti Storage Tips
          </h1>
          <p className="text-xl text-gray-700">
            Best practices for storing tutti frutti to maintain freshness and quality
          </p>
          <div className="mt-4 text-sm text-gray-600">
            Published: July 2024 | By Vinayaka Agro Foods
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Proper Storage Guidelines</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Storage Temperature</h3>
            <p className="text-gray-700 mb-4">
              Store Butterfly tutti frutti in a cool, dry place at room temperature (15-25°C). Avoid direct sunlight and heat sources.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Container Selection</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Use airtight containers to prevent moisture absorption</li>
              <li>Food-grade plastic or glass containers work best</li>
              <li>Keep original packaging sealed until use</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Shelf Life</h3>
            <p className="text-gray-700 mb-4">
              When stored properly, Butterfly tutti frutti maintains quality for 6-12 months. Check packaging for specific expiry dates.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">For Commercial Use</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Rotate stock following FIFO (First In, First Out) method</li>
              <li>Store in clean, pest-free areas</li>
              <li>Keep away from strong-smelling products</li>
              <li>Maintain hygiene in storage areas</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Signs of Quality Degradation</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Color fading or discoloration</li>
              <li>Excessive moisture or stickiness</li>
              <li>Unusual odor</li>
              <li>Hardening or texture changes</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Fresh Butterfly Tutti Frutti
          </h2>
          <p className="text-green-100 mb-6">
            Contact us for bulk orders with guaranteed freshness
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Order Now</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
