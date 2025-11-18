'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Advanced Transport Solutions - MVK Transports',
      category: 'business',
      description: 'Comprehensive logistics platform with real-time GPS tracking, live vehicle monitoring, fleet management, instant pricing calculator, and automated booking system. Features 24/7 support and insurance coverage for goods transportation and relocation services.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'GPS Tracking', 'Real-time Updates'],
      image: '/project-mvk.jpg',
      url: 'https://mvk-transports.vercel.app/'
    },
    {
      title: 'GPA & CGPA Calculator',
      category: 'education',
      description: 'Smart academic performance calculator supporting multiple engineering branches including Computer Science, AI & Machine Learning, Electronics, and more. Features grade distribution visualization, arrears tracking, and instant CGPA computation with credit management.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Data Visualization'],
      image: '/project-cgpa.jpg',
      url: 'https://cgpa-calc-aj.vercel.app/'
    },
    {
      title: 'Meow Chat - Real-time Messaging Platform',
      category: 'social',
      description: 'Modern real-time chat application with instant messaging, user authentication, online status tracking, message notifications, and seamless communication features for personal and group conversations.',
      tech: ['Next.js', 'Real-time Chat', 'WebSocket', 'Firebase', 'Tailwind CSS'],
      image: '/project-meow.jpg',
      url: 'https://www.meow.ajstudioz.co.in/'
    },
    {
      title: 'TOMO AI Buddy - Intelligent Chat Assistant',
      category: 'education',
      description: 'Advanced AI-powered chat platform with web search capabilities, real-time data access, and intelligent responses. Features context-aware conversations, model selection, and comprehensive development assistance for research and coding help.',
      tech: ['Next.js', 'AI/ML', 'Real-time Chat', 'Web Search API'],
      image: '/project-tomo-chat.jpg',
      url: 'https://chat.tm.tomoacademy.site'
    },
    {
      title: 'TOMO Academy - AI Development Platform',
      category: 'education',
      description: 'AI-powered development platform empowering creators to transform ideas into reality. Features intelligent code generation with React/TypeScript, shadcn/ui integration, multimodal AI for design-to-code conversion, and advanced Qwen2.5 Coder model support.',
      tech: ['Next.js', 'AI Code Gen', 'React', 'TypeScript', 'shadcn/ui'],
      image: '/project-tomo-academy.jpg',
      url: 'https://dev.tomoacademy.site/'
    },
    {
      title: 'Professional cURL Tester',
      category: 'developer-tools',
      description: 'Advanced API testing tool with request history management, cURL command builder, syntax highlighting, AI-enhanced suggestions, and comprehensive response formatting. Features one-click command copying and real-time request tracking.',
      tech: ['React', 'TypeScript', 'API Testing', 'AI Enhancement'],
      image: '/project-curl.jpg',
      url: 'https://v0-aj-studioz-curl-tester-edmp.vercel.app/'
    },
    {
      title: 'TOMO Forge Hub - Content Management System',
      category: 'developer-tools',
      description: 'Comprehensive internal platform managing 14+ team members and 234+ videos for 125K+ subscribers. Features digital employee profiles with QR codes, Kanban task board, YouTube content hub, analytics dashboard, role-based access control, and automated workflows.',
      tech: ['Next.js', 'Firebase Auth', 'YouTube API', 'Task Management', 'Analytics'],
      image: '/project-forge.jpg',
      url: 'https://tomo-forge-hub.vercel.app/'
    },
    {
      title: 'IB STUDIOZ - Enterprise Learning Platform',
      category: 'education',
      description: 'Enterprise-grade learning management system with Microsoft authentication, corporate account integration, secure access control, comprehensive resource hub, and dedicated support for International Baccalaureate programs.',
      tech: ['Next.js', 'Microsoft Auth', 'Firebase', 'Enterprise Security'],
      image: '/project-ib.jpg',
      url: 'https://ib-online-resource-hub.vercel.app/'
    },
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'business', label: 'Business' },
    { value: 'education', label: 'Education' },
    { value: 'social', label: 'Social & Chat' },
    { value: 'developer-tools', label: 'Developer Tools' },
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold glowing-brand">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of successful projects delivered to diverse clients across multiple industries
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:bg-card border border-border/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover-elevate flex flex-col"
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-transparent">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-xs font-bold text-primary-foreground uppercase tracking-wider shadow-lg">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-border/30">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 hover:from-primary hover:via-accent hover:to-primary text-primary hover:text-primary-foreground transition-all duration-500 font-semibold text-sm border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 overflow-hidden group/btn"
                  >
                    <span className="relative z-10">View Live Project</span>
                    <ExternalLink size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: '8+', label: 'Projects Delivered', color: 'from-blue-500 to-cyan-500' },
              { number: '125K+', label: 'Users Reached', color: 'from-purple-500 to-pink-500' },
              { number: '5+', label: 'Industries Served', color: 'from-orange-500 to-yellow-500' },
              { number: '99%', label: 'Platform Uptime', color: 'from-green-500 to-emerald-500' },
            ].map((stat, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8 group hover-elevate transition-all duration-500"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-xl p-8 md:p-16 text-center group"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 glowing-brand">
              Want to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Let's create something amazing together. Transform your vision into reality with our expertise.
            </p>
            <Link href="/" className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-xl font-bold text-lg overflow-hidden group/btn shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105">
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 ml-2 group-hover/btn:translate-x-2 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
