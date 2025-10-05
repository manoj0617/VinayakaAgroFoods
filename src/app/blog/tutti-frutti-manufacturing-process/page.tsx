import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Tutti Frutti Manufacturing Process - How Butterfly is Made',
  description: 'Behind the scenes look at how Butterfly tutti frutti is manufactured at Vinayaka Agro Foods. Learn about our quality production process.',
  keywords: 'tutti frutti manufacturing, candied papaya production, food processing, Butterfly manufacturing',
}

export default function TuttiFruttiManufacturingProcessPage() {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          {' > '}
          <span className="text-gray-900">Manufacturing Process</span>
        </nav>

        <header className="mb-8">
          <div className="text-sm text-green-600 font-semibold mb-2">Manufacturing</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutti Frutti Manufacturing Process
          </h1>
          <p className="text-xl text-gray-700">
            Behind the scenes look at how Butterfly tutti frutti is manufactured at scale
          </p>
          <div className="mt-4 text-sm text-gray-600">
            Published: August 2024 | By Vinayaka Agro Foods
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Manufacturing Process</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Raw Material Selection</h3>
            <p className="text-gray-700 mb-4">
              We carefully select quality raw papaya from trusted suppliers. The papaya must meet specific size and ripeness criteria for optimal processing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Preparation & Treatment</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Thorough washing and cleaning</li>
              <li>Peeling and cutting to uniform sizes</li>
              <li>Chemical treatment for texture stabilization</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Candying Process</h3>
            <p className="text-gray-700 mb-4">
              The prepared papaya pieces are candied in sugar syrup over multiple stages to achieve the right sweetness and texture. This is a carefully controlled process that takes several days.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Coloring</h3>
            <p className="text-gray-700 mb-4">
              Food-grade colors are applied to create the vibrant red, green, yellow, and orange tutti frutti pieces that customers expect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Drying & Cooling</h3>
            <p className="text-gray-700 mb-4">
              After coloring, the tutti frutti is dried to the right moisture content and cooled before packaging.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Quality Check & Packaging</h3>
            <p className="text-gray-700 mb-4">
              Every batch undergoes quality inspection before being packed in food-grade packaging for distribution.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Quality</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>FSSAI licensed facility with food safety standards</li>
              <li>Regular quality checks at every stage</li>
              <li>Hygienic manufacturing environment</li>
              <li>Experienced team with 10+ years in the industry</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience Quality Manufacturing
          </h2>
          <p className="text-green-100 mb-6">
            Schedule a factory visit or contact us for bulk orders
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
