'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container px-4 py-16 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/orionstars-logo-transparent-bg.webp"
                alt="Orion Stars Logo" title="Orion Stars app Logo"
                className="h-10"
                width={200}
                height={40}
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-300 max-w-md">
              A well-known mobile gaming app called Orion Stars delivers an exciting and dynamic casino-style experience right to your device. It uses a legal sweepstakes model and gives players access to a large selection of entertaining games, such as fish games and slots, in a safe and responsible setting.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 transition-all bg-gray-700 rounded-full cursor-pointer hover:bg-purple-600 hover:scale-110">
                <i className="text-lg text-white ri-shield-check-line"></i>
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition-all bg-gray-700 rounded-full cursor-pointer hover:bg-blue-600 hover:scale-110">
                <i className="text-lg text-white ri-gamepad-line"></i>
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition-all bg-gray-700 rounded-full cursor-pointer hover:bg-green-600 hover:scale-110">
                <i className="text-lg text-white ri-trophy-line"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-purple-400 ri-home-line"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-blue-400 ri-download-line"></i>
                  Download
                </Link>
              </li>
              <li>
                <Link href="/play-orion-stars-online" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-green-400 ri-gamepad-line"></i>
                  Play Online
                </Link>
              </li>
              <li>
                <Link href="/orionstars-vip" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-yellow-400 ri-vip-crown-line"></i>
                  VIP Access
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-purple-400 ri-information-line"></i>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-blue-400 ri-customer-service-2-line"></i>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-green-400 ri-shield-user-line"></i>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-orange-400 ri-file-text-line"></i>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="flex items-center text-sm text-gray-300 transition-all cursor-pointer hover:text-white hover:translate-x-1">
                  <i className="mr-2 text-red-400 ri-scales-line"></i>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-2 gap-4 py-8 mb-8 border-t border-gray-700 md:grid-cols-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg">
              <i className="text-xl text-white ri-shield-check-line"></i>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400">Secure</p>
              <p className="text-sm font-bold text-white">Safe Gaming</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
              <i className="text-xl text-white ri-smartphone-line"></i>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400">Mobile</p>
              <p className="text-sm font-bold text-white">Optimized</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg">
              <i className="text-xl text-white ri-customer-service-2-line"></i>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400">Support</p>
              <p className="text-sm font-bold text-white">24/7 Help</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg">
              <i className="text-xl text-white ri-trophy-line"></i>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400">Rewards</p>
              <p className="text-sm font-bold text-white">VIP Program</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 text-center md:flex-row md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} <span className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Orion Stars</span>. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <i className="ri-shield-check-line"></i>
                <span>Responsible Gaming</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 transition-colors cursor-pointer hover:text-white">
                Privacy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/disclaimer" className="text-sm text-gray-400 transition-colors cursor-pointer hover:text-white">
                Terms
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/contact" className="text-sm text-gray-400 transition-colors cursor-pointer hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
