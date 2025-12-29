
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-xl bg-white/95 backdrop-blur-lg border-b border-gray-100' 
        : 'shadow-md bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-transform hover:scale-105"
            onClick={closeMenu}
          >
            <img
              src="/orionstars-logo-transparent-bg.webp"
              title="Orion Stars Logo"
              alt="Orion Stars Logo"
              className="h-10 md:h-12"
              width={265}
              height={41}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all rounded-lg cursor-pointer hover:text-purple-600 hover:bg-purple-50"
            >
              <i className="mr-2 ri-home-line"></i>
              Home
            </Link>
            <Link 
              href="/download" 
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all rounded-lg cursor-pointer hover:text-blue-600 hover:bg-blue-50"
            >
              <i className="mr-2 ri-download-line"></i>
              Download
            </Link>
            <Link 
              href="/play-orion-stars-online" 
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all rounded-lg cursor-pointer hover:text-green-600 hover:bg-green-50"
            >
              <i className="mr-2 ri-gamepad-line"></i>
              Play Online
            </Link>
            <Link 
              href="/orionstars-vip" 
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all rounded-lg cursor-pointer hover:text-yellow-600 hover:bg-yellow-50"
            >
              <i className="mr-2 ri-vip-crown-line"></i>
              VIP
            </Link>
            <Link 
              href="/about" 
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all rounded-lg cursor-pointer hover:text-purple-600 hover:bg-purple-50"
            >
              <i className="mr-2 ri-information-line"></i>
              About
            </Link>
            <div className="mx-2 h-6 w-px bg-gray-300"></div>
            <Link 
              href="/download" 
              className="flex items-center px-5 py-2 text-sm font-semibold text-white transition-all bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg cursor-pointer hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:scale-105"
            >
              <i className="mr-2 ri-download-cloud-line"></i>
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all rounded-lg cursor-pointer lg:hidden hover:bg-gray-100 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="text-2xl ri-close-line"></i>
            ) : (
              <i className="text-2xl ri-menu-line"></i>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pb-4 border-t border-gray-200">
            <div className="flex flex-col pt-4 space-y-1">
              <Link 
                href="/" 
                className="flex items-center px-4 py-3 text-gray-700 transition-all rounded-lg cursor-pointer hover:text-purple-600 hover:bg-purple-50"
                onClick={closeMenu}
              >
                <i className="mr-3 ri-home-line"></i>
                <span className="font-medium">Home</span>
              </Link>
              <Link 
                href="/download" 
                className="flex items-center px-4 py-3 text-gray-700 transition-all rounded-lg cursor-pointer hover:text-blue-600 hover:bg-blue-50"
                onClick={closeMenu}
              >
                <i className="mr-3 ri-download-line"></i>
                <span className="font-medium">Download</span>
              </Link>
              <Link 
                href="/play-orion-stars-online" 
                className="flex items-center px-4 py-3 text-gray-700 transition-all rounded-lg cursor-pointer hover:text-green-600 hover:bg-green-50"
                onClick={closeMenu}
              >
                <i className="mr-3 ri-gamepad-line"></i>
                <span className="font-medium">Play Online</span>
              </Link>
              <Link 
                href="/orionstars-vip" 
                className="flex items-center px-4 py-3 text-gray-700 transition-all rounded-lg cursor-pointer hover:text-yellow-600 hover:bg-yellow-50"
                onClick={closeMenu}
              >
                <i className="mr-3 ri-vip-crown-line"></i>
                <span className="font-medium">VIP Access</span>
              </Link>
              <Link 
                href="/about" 
                className="flex items-center px-4 py-3 text-gray-700 transition-all rounded-lg cursor-pointer hover:text-purple-600 hover:bg-purple-50"
                onClick={closeMenu}
              >
                <i className="mr-3 ri-information-line"></i>
                <span className="font-medium">About</span>
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center px-4 py-3 text-gray-700 transition-all rounded-lg cursor-pointer hover:text-blue-600 hover:bg-blue-50"
                onClick={closeMenu}
              >
                <i className="mr-3 ri-customer-service-2-line"></i>
                <span className="font-medium">Contact</span>
              </Link>
              <div className="pt-2 mt-2 border-t border-gray-200">
                <Link 
                  href="/download" 
                  className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition-all bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg cursor-pointer hover:from-purple-700 hover:to-blue-700 hover:shadow-lg"
                  onClick={closeMenu}
                >
                  <i className="mr-2 ri-download-cloud-line"></i>
                  Get Started Now
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
