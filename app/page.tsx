import Hero from '../components/Hero'
import Features from '../components/Features'
import FriendInteractions from '../components/FriendInteractions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ParallaxBackground from '../components/ParallaxBackground'
import BackToTop from '../components/BackToTop'
import Developers from '../components/Developers'; // Import Developers component

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5f3] text-[#78350f]">
      <ParallaxBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <Developers />
        <FriendInteractions />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

