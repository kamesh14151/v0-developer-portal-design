'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Zap, Brain, Cpu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AIModelsPage() {
  const models = [
    {
      name: 'Lynxa-mini',
      tagline: 'Ultra-fast inference at scale',
      description: 'Lightweight yet powerful model optimized for mobile and edge devices. Perfect for real-time applications with minimal latency.',
      specs: ['~7B parameters', '<50ms inference', 'Mobile optimized', 'Low power consumption'],
      uses: ['Mobile Apps', 'Edge Computing', 'Real-time Chat', 'IoT Devices'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AJ',
      tagline: 'Balanced performance and intelligence',
      description: 'The flagship model offering exceptional performance across diverse tasks. Trained on comprehensive datasets for versatile applications.',
      specs: ['~13B parameters', '100ms inference', 'General purpose', 'Multi-modal support'],
      uses: ['Web Applications', 'Content Generation', 'API Services', 'Data Analysis'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Hanuman S1',
      tagline: 'Enterprise-grade intelligence',
      description: 'Advanced reasoning model designed for complex problem-solving. Delivers state-of-the-art performance for enterprise applications.',
      specs: ['~70B parameters', '500ms inference', 'Advanced reasoning', 'Specialized domains'],
      uses: ['Enterprise AI', 'Complex Analytics', 'Strategic Planning', 'Research'],
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 relative rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 backdrop-blur-xl p-3 shadow-2xl border-2 border-cyan-500/40">
              <Image 
                src="/AJ.svg" 
                alt="AJ STUDIOZ Logo" 
                width={70} 
                height={70}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center mb-6">
            <Brain className="text-primary neon-text" size={24} />
            <span className="text-sm font-bold text-primary uppercase tracking-wider neon-text">Nexariq AI Division</span>
            <Brain className="text-primary neon-text" size={24} />
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold glowing-brand">
              Advanced AI Models
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by <span className="text-primary font-semibold">Nexariq AI</span> - Cutting-edge language models built for performance, versatility, and enterprise reliability
            </p>
          </div>
        </div>
      </div>

      {/* Models Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {models.map((model, index) => (
            <div key={index} className="card-premium border border-primary/20 p-8 md:p-12 overflow-hidden relative group">
              {/* Animated Background Gradient */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${model.color} opacity-5 rounded-full -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${model.color} p-3 mb-4`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{model.name}</h2>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                      {model.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-8">
                  {model.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-60">Specifications</h3>
                    <div className="space-y-3">
                      {model.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${model.color}`} />
                          <span className="text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-60">Use Cases</h3>
                    <div className="space-y-3">
                      {model.uses.map((use, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Zap size={14} className="text-accent" />
                          <span className="text-sm">{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="px-6 py-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-lg font-medium flex items-center gap-2 text-sm">
                  Explore API <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Model Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Lynxa-mini</th>
                  <th className="text-center py-4 px-4 font-semibold">AJ</th>
                  <th className="text-center py-4 px-4 font-semibold">Hanuman S1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Speed', values: ['⚡⚡⚡', '⚡⚡', '⚡'] },
                  { feature: 'Intelligence', values: ['⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐'] },
                  { feature: 'Efficiency', values: ['⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐'] },
                  { feature: 'Cost', values: ['Low', 'Medium', 'High'] },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border/20 hover:bg-card/30 transition-colors">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="text-center py-4 px-4">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto card-premium p-8 md:p-12 text-center border border-primary/20">
          <Cpu className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Leverage Advanced AI?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Integrate our models into your application today
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all btn-luxury">
            Get API Access
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
