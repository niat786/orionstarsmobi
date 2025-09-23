
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-white/90 backdrop-blur-md">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
            <img
              src="/orionstars-logo-transparent-bg.webp" title='Orion Stars Logo'
              alt="Orion Stars Logo" width={265} height={41} />
          </Link>
          
          <nav className="hidden space-x-8 md:flex">
            <Link href="/" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Home</Link>
            <Link href="/download" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Download</Link>
            <Link href="/about" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">About</Link>
            <Link href="/contact" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Contact</Link>
            <Link href="/privacy" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Privacy</Link>
            <Link href="/disclaimer" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Disclaimer</Link>
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 cursor-pointer md:hidden hover:text-purple-600"
          >
            <i className="text-2xl ri-menu-line"></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="pb-4 mt-4 border-t border-gray-200 md:hidden">
            <div className="flex flex-col pt-4 space-y-2">
              <Link href="/" className="py-2 text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Home</Link>
              <Link href="/download" className="py-2 text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Download</Link>
              <Link href="/about" className="py-2 text-gray-700 transition-colors cursor-pointer hover:text-purple-600">About</Link>
              <Link href="/contact" className="py-2 text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Contact</Link>
            <Link href="/privacy" className="text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Privacy</Link>
              <Link href="/disclaimer" className="py-2 text-gray-700 transition-colors cursor-pointer hover:text-purple-600">Disclaimer</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
