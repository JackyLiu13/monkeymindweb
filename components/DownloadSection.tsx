'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function DownloadSection() {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)

  return (
    <section id="download" className="py-20 bg-[#f9f5f3]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#78350f]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Get MonkeyMind
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-8 text-[#78350f]">
            Add a playful pet monkey to your browser! Choose from 9 unique hats, each giving your monkey a different personality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="https://github.com/owengretzinger/monkey-mind"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1f2937] text-white rounded-lg hover:bg-[#111827] transition-colors"
              target="_blank"
            >
              <Github size={24} />
              <span>View on GitHub</span>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-[#e6d8d1] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#78350f]">Features</h3>
            <ul className="text-left text-[#78350f] space-y-2">
              <li>• 9 unique hats with different personalities</li>
              <li>• Fun comments and opinions about your browsing</li>
              <li>• Cute animations and interactions</li>
              <li>• Connect with friends&apos; monkeys</li>
              <li>• Leave sticky notes for friends to find</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 