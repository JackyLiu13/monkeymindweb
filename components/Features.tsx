'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HardHatIcon as Hat, MessageSquare, PlayCircle, Users } from 'lucide-react'
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'

const features = [
  { icon: Hat, title: 'Stylish Hats', description: 'Choose from 9 different hats, each giving your monkey a unique personality!' },
  { icon: MessageSquare, title: 'Witty Comments', description: 'Your monkey shares opinions and judges your browsing habits with humor.' },
  { icon: PlayCircle, title: 'Cute Animations', description: 'Watch your monkey walk, flail, and blink as you browse the web.' },
  { icon: Users, title: 'Friend Interactions', description: 'See friends\' monkeys and engage in playful roasts or compliments.' },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)

  return (
    <section id="features" className="py-20 bg-[#f9f5f3]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#78350f]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#e6d8d1] p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon
                className="mx-auto mb-4 text-[#92400e]"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2 text-[#78350f]">{feature.title}</h3>
              <p className="text-[#78350f]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

