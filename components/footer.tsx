'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 bg-gradient-to-b from-card/20 to-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/AJ.svg"
                alt="AJ STUDIOZ Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-lg">AJ STUDIOZ</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium AI solutions and web development for enterprise excellence.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="#" className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Github size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/ai-models" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Integration</Link></li>
              <li><Link href="/nexariq" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nexariq AI</Link></li>
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4">Get In Touch</h3>
            <ul className="space-y-2.5">
              <li><Link href="mailto:hello@ajstudioz.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={16} /> hello@ajstudioz.com
              </Link></li>
              <li><Link href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={16} /> +1 (234) 567-890
              </Link></li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" /> Tech Hub, Silicon Valley
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AJ STUDIOZ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
