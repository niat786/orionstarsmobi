
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <section className="relative text-white bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            
          ></div>
          <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <div className="mb-8">
              <i className="block mb-4 text-purple-400 ri-earth-line text-8xl"></i>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-transparent md:text-8xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              404
            </h1>
            <h2 className="mb-6 text-2xl font-semibold md:text-4xl">
              Lost in the Orion Nebula
            </h2>
            <p className="max-w-2xl mb-8 text-lg text-gray-300 md:text-xl">
              It seems you've drifted too far from our gaming galaxy. The page you're looking for has vanished into the cosmic void.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <Link href="/" className="px-8 py-4 font-semibold text-white transition-all transform rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 whitespace-nowrap">
                <i className="mr-2 ri-home-line"></i>
                Return to Home
              </Link>
              <Link href="/contact" className="px-8 py-4 font-semibold text-purple-400 transition-all border-2 border-purple-400 rounded-full cursor-pointer hover:bg-purple-400 hover:text-white whitespace-nowrap">
                <i className="mr-2 ri-customer-service-line"></i>
                Contact Support
              </Link>
            </div>
            
            <div className="grid w-full max-w-3xl grid-cols-1 gap-6 mt-12 md:grid-cols-3">
              <Link href="/" className="p-6 transition-all cursor-pointer bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20">
                <i className="block mb-3 text-3xl text-purple-400 ri-gamepad-line"></i>
                <h3 className="mb-2 font-semibold">Play Games</h3>
                <p className="text-sm text-gray-300">Explore our casino games</p>
              </Link>
              
              <Link href="/about" className="p-6 transition-all cursor-pointer bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20">
                <i className="block mb-3 text-3xl text-blue-400 ri-information-line"></i>
                <h3 className="mb-2 font-semibold">About Us</h3>
                <p className="text-sm text-gray-300">Learn about our platform</p>
              </Link>
              
              <Link href="/contact" className="p-6 transition-all cursor-pointer bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20">
                <i className="block mb-3 text-3xl text-green-400 ri-customer-service-2-line"></i>
                <h3 className="mb-2 font-semibold">Get Help</h3>
                <p className="text-sm text-gray-300">24/7 customer support</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );  
}
