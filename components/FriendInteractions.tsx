'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'

export default function FriendInteractions() {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)

  return (
    <section id="friend-interactions" className="py-20 bg-[#e6d8d1]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#78350f]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Friend Interactions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#78350f]">Monkey See, Monkey Do!</h3>
            <p className="text-lg mb-6 text-[#78350f]">
              When you and your friends are on the same webpage, you can see each other&apos;s monkeys! Interact with their pets by clicking on them to initiate a playful roast or a friendly compliment.
            </p>
            <ul className="list-disc list-inside text-[#78350f] space-y-2">
              <li>See friends&apos; monkeys on shared webpages</li>
              <li>Click to roast or compliment their monkey</li>
              <li>Watch hilarious interactions unfold</li>
              <li>Create memorable browsing experiences together</li>
            </ul>
          </motion.div>
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/assets/images/interface/board.png"
              alt="MonkeyMind Interface Board"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

