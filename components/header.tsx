'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import GlowingText from './glowing-text'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/AJ.svg"
              alt="AJ STUDIOZ Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-base md:text-lg font-bold rgb-flashing">
              AJ STUDIOZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/ai-models" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              AI Models
            </Link>
            <Link href="/nexariq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Nexariq
            </Link>
            <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors btn-luxury">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-2">
            <Link href="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              Services
            </Link>
            <Link href="/ai-models" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              AI Models
            </Link>
            <Link href="/nexariq" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              Nexariq
            </Link>
            <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2">
              Projects
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors inline-block btn-luxury">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
