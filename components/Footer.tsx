
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-4 text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Orion Stars
            </h3>
            <p className="text-sm text-gray-300">
              A well-known mobile gaming app called Orion Stars delivers an exciting and dynamic casino-style experience right to your device.  It uses a legal sweepstakes model and gives players access to a large selection of entertaining games, such as fish games and slots, in a safe and responsible setting.  The Orion Stars app provides players worldwide with an exciting and genuine entertainment platform thanks to its state-of-the-art graphics, fluid gameplay, and dedication to fair play.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <div className="flex gap-10">
              <Link href="/" className="block text-sm text-gray-300 transition-colors cursor-pointer hover:text-white">Home</Link>
              <Link href="/about" className="block text-sm text-gray-300 transition-colors cursor-pointer hover:text-white">About</Link>
              <Link href="/contact" className="block text-sm text-gray-300 transition-colors cursor-pointer hover:text-white">Contact</Link>
              <Link href="/disclaimer" className="block text-sm text-gray-300 transition-colors cursor-pointer hover:text-white">Disclaimer</Link>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © { new Date().getFullYear() } Orion Stars. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-gray-400 cursor-pointer hover:text-white">Privacy Policy</Link>
              <Link href="/disclaimer" className="text-sm text-gray-400 cursor-pointer hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
