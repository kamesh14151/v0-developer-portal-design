'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Briefcase, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We\'re looking for an experienced full-stack developer to join our team and build cutting-edge web applications.',
      requirements: ['5+ years experience', 'React/Next.js', 'Node.js', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Join our AI team to develop and deploy advanced machine learning models and integrate AI solutions.',
      requirements: ['3+ years experience', 'Python', 'TensorFlow/PyTorch', 'LLM experience'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive interfaces that delight users and drive engagement across our products.',
      requirements: ['4+ years experience', 'Figma', 'Design Systems', 'User Research'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain robust infrastructure to support our growing platform and ensure 99.9% uptime.',
      requirements: ['3+ years experience', 'AWS/GCP', 'Docker/Kubernetes', 'CI/CD'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Lead product strategy and roadmap to deliver exceptional value to our customers and drive business growth.',
      requirements: ['5+ years experience', 'Product Strategy', 'Agile', 'Data-driven'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Content Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create compelling technical content, blog posts, and documentation that educates and engages our audience.',
      requirements: ['2+ years experience', 'Technical Writing', 'SEO', 'Tech Industry'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive medical, dental, and vision'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere in the world'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    },
    {
      icon: '🌴',
      title: 'Unlimited PTO',
      description: 'Take time off when you need it'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear paths for advancement'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 relative rounded-full bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-red-500/30 backdrop-blur-xl p-3 shadow-2xl border-2 border-amber-500/40 magnetic-hover">
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
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build the future of web development and AI with a team of passionate innovators
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AJ STUDIOZ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building something special, and we want you to be part of it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8 group hover-elevate transition-all duration-500"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity and make an impact
            </p>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500"
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${position.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${position.color} text-white text-xs font-bold uppercase tracking-wider`}>
                          {position.department}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {position.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {position.requirements.map((req, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {req}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 hover:from-primary hover:via-accent hover:to-primary text-primary hover:text-primary-foreground transition-all duration-500 font-semibold rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 overflow-hidden group/btn whitespace-nowrap"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Apply Now
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-xl p-8 md:p-16 text-center"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl opacity-0 blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't see a perfect fit?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            <Link href="/contact" className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-xl font-bold text-lg overflow-hidden group shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
