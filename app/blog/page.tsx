'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build web applications and user experiences.',
      category: 'AI & Technology',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/placeholder.jpg',
      slug: 'future-of-ai-web-development'
    },
    {
      title: 'Building Scalable Applications with Next.js',
      excerpt: 'Best practices and patterns for creating high-performance, scalable web applications using Next.js framework.',
      category: 'Web Development',
      date: '2025-01-10',
      readTime: '8 min read',
      image: '/placeholder.jpg',
      slug: 'building-scalable-nextjs-apps'
    },
    {
      title: 'Introduction to Nexariq AI Models',
      excerpt: 'Discover our suite of AI models designed for enterprise applications, from Lynxa-mini to Hanuman S1.',
      category: 'AI Models',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/placeholder.jpg',
      slug: 'intro-nexariq-ai-models'
    },
    {
      title: 'Optimizing Performance for Modern Web Apps',
      excerpt: 'Comprehensive guide to improving load times, reducing bundle sizes, and enhancing user experience.',
      category: 'Performance',
      date: '2024-12-28',
      readTime: '7 min read',
      image: '/placeholder.jpg',
      slug: 'optimizing-web-performance'
    },
    {
      title: 'UI/UX Design Trends for 2025',
      excerpt: 'Latest design trends and principles shaping the digital landscape in 2025 and beyond.',
      category: 'Design',
      date: '2024-12-20',
      readTime: '4 min read',
      image: '/placeholder.jpg',
      slug: 'ui-ux-trends-2025'
    },
    {
      title: 'Getting Started with TypeScript',
      excerpt: 'A beginner-friendly guide to adding type safety to your JavaScript projects with TypeScript.',
      category: 'Web Development',
      date: '2024-12-15',
      readTime: '10 min read',
      image: '/placeholder.jpg',
      slug: 'getting-started-typescript'
    }
  ]

  const categories = ['All Posts', 'AI & Technology', 'Web Development', 'AI Models', 'Performance', 'Design']

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 relative rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-rose-500/30 backdrop-blur-xl p-3 shadow-2xl border-2 border-purple-500/40 animate-float">
                <Image 
                  src="/AJ.svg" 
                  alt="AJ STUDIOZ Logo" 
                  width={70} 
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold glowing-brand">
              Blog & Insights
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, AI, and technology
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:bg-card border border-border/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover-elevate flex flex-col"
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-transparent">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-xs font-bold text-primary-foreground uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 pb-6 border-b border-border/30">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 hover:from-primary hover:via-accent hover:to-primary text-primary hover:text-primary-foreground transition-all duration-500 font-semibold text-sm border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Read More</span>
                    <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-xl p-8 md:p-16 text-center"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glowing-brand">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Subscribe to our newsletter for the latest insights and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-xl font-bold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
