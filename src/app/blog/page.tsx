import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog | Tutti Frutti Recipes & Food Industry Insights',
  description: 'Tutti frutti recipes, industry insights, manufacturing tips for bakeries and ice cream makers. Expert guidance from Butterfly brand.',
  keywords: 'tutti frutti blog, tutti frutti recipes, food industry blog, bakery tips, ice cream recipes',
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'How to Make Tutti Frutti at Home — Step by Step Process',
      excerpt: 'Learn the traditional method of making tutti frutti from raw papaya. Complete guide with ingredients, process, and storage tips.',
      date: 'August 15, 2025',
      category: 'Recipe',
      slug: 'how-to-make-tutti-frutti-at-home',
      readTime: '8 min read'
    },
    {
      title: 'How Is Tutti Frutti Made? Inside the Manufacturing Process',
      excerpt: 'Take a behind-the-scenes look at how Butterfly tutti frutti is manufactured at Vinayaka Agro Foods facilities.',
      date: 'August 10, 2025',
      category: 'Manufacturing',
      slug: 'tutti-frutti-manufacturing-process',
      readTime: '6 min read'
    },
    {
      title: 'Best Tutti Frutti Recipes — Cakes, Ice Cream & More',
      excerpt: 'Discover delicious recipes using tutti frutti including classic fruit cake, ice cream, cookies, and traditional Indian sweets.',
      date: 'August 5, 2025',
      category: 'Recipes',
      slug: 'best-tutti-frutti-recipes',
      readTime: '10 min read'
    },
    {
      title: 'Organic Tutti Frutti: The Next Big Trend in Baking',
      excerpt: 'Explore the growing demand for organic tutti frutti in the baking industry and what it means for manufacturers and bakers.',
      date: 'July 30, 2025',
      category: 'Industry Trends',
      slug: 'organic-tutti-frutti-trend',
      readTime: '7 min read'
    },
    {
      title: 'Tutti Frutti vs Candied Fruits: What\'s the Difference?',
      excerpt: 'Understanding the difference between tutti frutti, candied fruits, and glazed fruits. A comprehensive comparison guide.',
      date: 'July 25, 2025',
      category: 'Education',
      slug: 'tutti-frutti-vs-candied-fruits',
      readTime: '5 min read'
    },
    {
      title: 'Storage and Shelf Life Tips for Tutti Frutti',
      excerpt: 'Professional tips on storing tutti frutti to maintain quality, extend shelf life, and prevent common storage issues.',
      date: 'July 20, 2025',
      category: 'Tips',
      slug: 'tutti-frutti-storage-tips',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', 'Recipe', 'Manufacturing', 'Recipes', 'Industry Trends', 'Education', 'Tips']

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Tutti Frutti Blog
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover recipes, manufacturing insights, industry trends, and expert tips from the team at Vinayaka Agro Foods.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-3 text-gray-900">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest tutti frutti recipes, industry insights, and updates from Vinayaka Agro Foods.
          </p>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📖</div>
                <CardTitle className="text-gray-900">Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Delicious tutti frutti recipes for cakes, ice creams, and desserts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏭</div>
                <CardTitle className="text-gray-900">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Insights into tutti frutti production processes and quality control.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📈</div>
                <CardTitle className="text-gray-900">Industry Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Latest trends in the food industry and tutti frutti market.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🌍</div>
                <CardTitle className="text-gray-900">Export Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-700">
                  Learn about our international export capabilities and global reach.
                </CardDescription>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="/export">View Export Info</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
