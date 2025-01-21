'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)

  return (
    <section id="video" className="py-20 bg-[#f9f5f3]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#78350f]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          See MonkeyMind in Action
        </motion.h2>
        <motion.div
          className="relative max-w-4xl mx-auto"
          style={{ paddingBottom: '56.25%' }} // This maintains 16:9 aspect ratio
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qPSXmX-yBFU"
            title="MonkeyMind Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
} 