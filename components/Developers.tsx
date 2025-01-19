'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'

const developers = [
  { name: 'Jacky', school: 'Western', image: '/assets/images/avatars/jacky.png' },
  { name: 'Ethan', school: 'Western', image: '/assets/images/avatars/ethan.png' },
  { name: 'Owen', school: 'McMaster', image: '/assets/images/avatars/owen.png' },
  { name: 'Amanda', school: 'Queens', image: '/assets/images/avatars/amanda.png' },
]

export default function Developers() {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)

  return (
    <section id="developers" className="py-20 bg-[#f9f5f3]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#78350f]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              className="bg-[#e6d8d1] p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={dev.image || "/placeholder.svg"}
                  alt={`${dev.name}'s profile`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#78350f]">{dev.name}</h3>
              <p className="text-[#92400e]">Developer</p>
              <p className="text-[#78350f]">{dev.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

