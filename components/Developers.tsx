'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const developers = [
  { 
    name: 'Jacky', 
    school: 'Western University',
    role: 'Frontend Developer',
    image: '/assets/images/avatars/jacky.png',
    github: 'https://github.com/JackyLiu13',
    linkedin: 'https://www.linkedin.com/in/jacky-liu13/'
  },
  { 
    name: 'Ethan', 
    school: 'Western University',
    role: 'Full Stack Developer',
    image: '/assets/images/avatars/ethan.png',
    github: 'https://github.com/ethan-rng',
    linkedin: 'https://www.linkedin.com/in/ethanrong2004/'
  },
  { 
    name: 'Owen', 
    school: 'McMaster University',
    role: 'Backend Developer',
    image: '/assets/images/avatars/owen.png',
    github: 'https://github.com/owengretzinger',
    linkedin: 'https://www.linkedin.com/in/owengretzinger/'
  },
  { 
    name: 'Amanda', 
    school: "Queen's University",
    role: 'UI/UX Designer',
    image: '/assets/images/avatars/amanda.png',
    github: 'https://github.com/jamsnhoney',
    linkedin: 'https://www.linkedin.com/in/amanda-zhu-b01422242/'
  },
]

export default function Developers() {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)

  return (
    <section id="team" className="py-20 bg-[#f9f5f3]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#78350f]">Meet the Team</h2>
          <p className="text-lg text-[#92400e] max-w-2xl mx-auto">
            We&apos;re a group of passionate developers who came together to create something fun and unique.
            Meet the minds behind MonkeyMind!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              className="bg-[#e6d8d1] p-6 rounded-lg shadow-lg text-center group hover:bg-[#dccdc4] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={dev.image || "/placeholder.svg"}
                  alt={`${dev.name}&apos;s profile`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#78350f]">{dev.name}</h3>
              <p className="text-[#92400e] mb-1">{dev.role}</p>
              <p className="text-[#78350f] mb-4">{dev.school}</p>
              
              <div className="flex justify-center space-x-4">
                {dev.github && (
                  <Link 
                    href={dev.github}
                    target="_blank"
                    className="text-[#78350f] hover:text-[#92400e] transition-colors"
                    aria-label={`${dev.name}'s GitHub`}
                  >
                    <Github size={20} />
                  </Link>
                )}
                {dev.linkedin && (
                  <Link 
                    href={dev.linkedin}
                    target="_blank"
                    className="text-[#78350f] hover:text-[#92400e] transition-colors"
                    aria-label={`${dev.name}'s LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

