import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Tutti Frutti vs Candied Fruits - Understanding the Difference',
  description: 'Learn the key differences between tutti frutti and other candied fruit products. Expert insights from Butterfly brand manufacturers.',
  keywords: 'tutti frutti vs candied fruits, candied papaya, fruit preservation, food manufacturing',
}

export default function TuttiFruttiVsCandiedFruitsPage() {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          {' > '}
          <span className="text-gray-900">Tutti Frutti vs Candied Fruits</span>
        </nav>

        <header className="mb-8">
          <div className="text-sm text-green-600 font-semibold mb-2">Education</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutti Frutti vs Candied Fruits
          </h1>
          <p className="text-xl text-gray-700">
            Understanding the differences between tutti frutti and other candied fruit products
          </p>
          <div className="mt-4 text-sm text-gray-600">
            Published: August 2024 | By Vinayaka Agro Foods
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Tutti Frutti?</h2>
            <p className="text-gray-700 mb-4">
              Tutti frutti is specifically made from raw papaya that's candied and colored. It's widely used in Indian bakery and confectionery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Differences</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Raw Material</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Tutti Frutti:</strong> Made from raw papaya</li>
              <li><strong>Other Candied Fruits:</strong> Can be made from various fruits like pineapple, cherry, orange peel</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Processing</h3>
            <p className="text-gray-700 mb-4">
              Tutti frutti undergoes special processing to achieve uniform texture and color. The papaya is treated, candied in sugar syrup, and colored with food-grade colors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Usage</h3>
            <p className="text-gray-700 mb-4">
              Tutti frutti is primarily used in baking (cakes, cookies) and ice cream, while other candied fruits have varied applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Texture & Taste</h3>
            <p className="text-gray-700 mb-4">
              Tutti frutti has a chewy texture and mild sweetness, making it ideal for bakery products without overpowering other flavors.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Choose Quality Butterfly Tutti Frutti
          </h2>
          <p className="text-green-100 mb-6">
            Manufactured with premium raw papaya for consistent quality
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="tel:+919441587748">Call +91 9441587748</a>
          </Button>
        </div>
      </div>
    </article>
  )
}
