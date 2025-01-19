import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#e6d8d1] text-[#78350f] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-[#92400e]">MonkeyMind</Link>
            <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} MonkeyMind. All rights reserved.</p>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><Link href="#" className="hover:text-[#92400e] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#92400e] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#92400e] transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

