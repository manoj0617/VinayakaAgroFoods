import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Best Tutti Frutti Recipes - Cakes, Cookies & Desserts | Vinayaka Agro Foods',
  description: 'Discover delicious tutti frutti recipes for cakes, cookies, and desserts. Professional tips from Butterfly brand manufacturers.',
  keywords: 'tutti frutti recipes, tutti frutti cake, tutti frutti cookies, candied papaya recipes, dessert recipes',
}

export default function BestTuttiFruttiRecipesPage() {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          {' > '}
          <span className="text-gray-900">Best Tutti Frutti Recipes</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="text-sm text-green-600 font-semibold mb-2">Recipes</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Best Tutti Frutti Recipes
          </h1>
          <p className="text-xl text-gray-700">
            Discover delicious ways to use Butterfly tutti frutti in your baking and desserts
          </p>
          <div className="mt-4 text-sm text-gray-600">
            Published: October 2024 | By Vinayaka Agro Foods
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Tutti Frutti Recipes</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Classic Tutti Frutti Cake</h3>
            <p className="text-gray-700 mb-4">
              Perfect for celebrations and special occasions. Our Butterfly tutti frutti adds vibrant colors and delicious sweetness to traditional cake recipes.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Use 100-150g tutti frutti per kg of cake batter</li>
              <li>Mix tutti frutti with flour before adding to prevent sinking</li>
              <li>Bake at 180°C for best results</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Tutti Frutti Cookies</h3>
            <p className="text-gray-700 mb-4">
              Colorful and delightful cookies that kids and adults love. Perfect for bakeries and home bakers.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Add 50-75g tutti frutti per batch</li>
              <li>Chop tutti frutti into smaller pieces for even distribution</li>
              <li>Store in airtight containers for freshness</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Tutti Frutti Ice Cream</h3>
            <p className="text-gray-700 mb-4">
              Our special freeze-resistant tutti frutti maintains perfect texture in ice cream. Ideal for commercial ice cream production.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Tutti Frutti Bread & Buns</h3>
            <p className="text-gray-700 mb-4">
              Add color and sweetness to bread products. Popular in bakeries across India.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Tips from Butterfly</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Always use food-grade, quality tutti frutti for best taste</li>
              <li>Store tutti frutti in cool, dry place away from direct sunlight</li>
              <li>For bulk orders, contact us for special bakery-grade products</li>
              <li>Our tutti frutti works perfectly in both hot and cold preparations</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Quality Tutti Frutti for Your Recipes?
          </h2>
          <p className="text-green-100 mb-6">
            Get bulk orders of Butterfly tutti frutti for your bakery or business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600">
              <a href="tel:+919441587748">Call +91 9441587748</a>
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/tutti-frutti-storage-tips" className="block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Tutti Frutti Storage Tips</h4>
              <p className="text-gray-600 text-sm">Learn how to store tutti frutti properly</p>
            </Link>
            <Link href="/blog/tutti-frutti-manufacturing-process" className="block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Manufacturing Process</h4>
              <p className="text-gray-600 text-sm">How Butterfly tutti frutti is made</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
