'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 relative rounded-full bg-gradient-to-br from-green-500/30 via-emerald-500/30 to-teal-500/30 backdrop-blur-xl p-3 shadow-2xl border-2 border-green-500/40 bounce-shadow">
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
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-xl font-bold text-lg overflow-hidden group shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send size={20} />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Reach out to us through any of these channels, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'hello@ajstudioz.com',
                    link: 'mailto:hello@ajstudioz.com',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+1 (234) 567-890',
                    link: 'tel:+1234567890',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    content: 'Tech Hub, Silicon Valley, CA',
                    link: '#',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Live Chat',
                    content: 'Available Mon-Fri, 9AM-6PM PST',
                    link: '#',
                    color: 'from-orange-500 to-yellow-500'
                  }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-6 flex items-center gap-4 hover-elevate transition-all duration-500"
                      style={{
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="relative">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Map Placeholder */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl h-64"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary/40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/20 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. Typically, small projects take 2-4 weeks, medium projects 1-2 months, and large enterprise solutions 3-6 months.'
              },
              {
                question: 'Do you offer support after project completion?',
                answer: 'Yes! We provide ongoing maintenance and support packages to ensure your application runs smoothly. We also offer dedicated support contracts for enterprise clients.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in Next.js, React, TypeScript, Node.js, AI/ML integration, and modern cloud platforms. We stay current with the latest technologies to deliver cutting-edge solutions.'
              },
              {
                question: 'How do you handle project pricing?',
                answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a detailed quote based on your specific requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-6"
                style={{
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}>
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
