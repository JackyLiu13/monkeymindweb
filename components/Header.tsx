'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f9f5f3]/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#78350f]">MonkeyMind</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#features" className="hover:text-[#a16207] transition-colors">Features</Link></li>
            <li><Link href="#team" className="hover:text-[#a16207] transition-colors">Team</Link></li>
            <li><Link href="#friend-interactions" className="hover:text-[#a16207] transition-colors">Friends</Link></li>
            <li><Link href="#download" className="hover:text-[#a16207] transition-colors">Download</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

