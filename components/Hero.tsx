'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Welcome to MonkeyMind</h1>
        <div className="relative w-full h-[400px] mx-auto">
          <Image
            src="/assets/images/hero/monkees.png"
            alt="Monkey Characters"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}

