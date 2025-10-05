import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'How to Make Tutti Frutti at Home - Simple DIY Guide',
  description: 'Learn how to make candied papaya tutti frutti at home with this simple step-by-step guide. Make your own colorful tutti frutti for baking.',
  keywords: 'make tutti frutti at home, DIY tutti frutti, homemade candied papaya, tutti frutti recipe',
}

export default function HowToMakeTuttiFruttiAtHomePage() {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          {' > '}
          <span className="text-gray-900">Make Tutti Frutti at Home</span>
        </nav>

        <header className="mb-8">
          <div className="text-sm text-green-600 font-semibold mb-2">DIY Guide</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Make Tutti Frutti at Home
          </h1>
          <p className="text-xl text-gray-700">
            A simple guide to making candied papaya tutti frutti in your home kitchen
          </p>
          <div className="mt-4 text-sm text-gray-600">
            Published: September 2024 | By Vinayaka Agro Foods
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients Needed</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>1 kg raw papaya</li>
              <li>500g sugar</li>
              <li>2 cups water</li>
              <li>Food-grade colors (red, green, yellow)</li>
              <li>1 tsp lime water (calcium hydroxide solution)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Process</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: Prepare the Papaya</h3>
            <p className="text-gray-700 mb-4">
              Peel raw papaya and cut into small cubes (about 1 cm size). Soak in lime water for 2-3 hours to firm up the texture.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: Rinse & Boil</h3>
            <p className="text-gray-700 mb-4">
              Rinse the papaya cubes thoroughly. Boil in water for 5-7 minutes until slightly soft. Drain and set aside.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 3: Sugar Syrup</h3>
            <p className="text-gray-700 mb-4">
              Prepare sugar syrup by dissolving sugar in water. Bring to a boil and add the papaya cubes. Simmer for 15-20 minutes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 4: Color the Tutti Frutti</h3>
            <p className="text-gray-700 mb-4">
              Divide the candied papaya into portions and add different food colors. Mix well and let it soak for a few hours.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 5: Dry</h3>
            <p className="text-gray-700 mb-4">
              Spread the colored tutti frutti on a tray and dry in sun or in a dehydrator until most moisture is removed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 6: Store</h3>
            <p className="text-gray-700 mb-4">
              Store in an airtight container. Homemade tutti frutti can last 2-3 months when stored properly.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Note for Commercial Use</h3>
            <p className="text-gray-700">
              While making tutti frutti at home is fun for personal use, commercial production requires specialized equipment, food safety licenses, and quality control. For business needs, contact Vinayaka Agro Foods for bulk supply of consistent quality Butterfly tutti frutti.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Tutti Frutti for Your Business?
          </h2>
          <p className="text-green-100 mb-6">
            Get professional-grade Butterfly tutti frutti for commercial use
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="tel:+919441587748">Call +91 9441587748</a>
          </Button>
        </div>
      </div>
    </article>
  )
}
