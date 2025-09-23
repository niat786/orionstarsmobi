import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "About Orion Stars Casino | Mobile Gaming Innovation",
  description: "Learn about Orion Stars Casino's mission, values, and team. Discover how we're revolutionizing mobile casino gaming with cutting-edge technology and security.",
  keywords: "Orion Stars about, casino company, mobile gaming, team, mission, values",
  alternates: {
    canonical: "https://orionstarsmobi.com/about",
  },
};

export default function About() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <section className="py-20 text-white bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              About Orion Stars Casino
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-purple-100 md:text-2xl">
              Pioneering the future of mobile casino gaming with innovation, security, and exceptional user experience.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-gray-800">Our Story</h2>
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Founded with a vision to revolutionize mobile casino gaming, Orion Stars Casino emerged from the passion of gaming enthusiasts and technology experts who believed that casino entertainment should be accessible, secure, and enjoyable for everyone.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Since our inception, we have been dedicated to creating a platform that combines the thrill of traditional casino games with the convenience of modern mobile technology. Our team works tirelessly to ensure that every player enjoys a premium gaming experience.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Today, Orion Stars Casino serves millions of players worldwide, offering a diverse portfolio of games, cutting-edge security features, and unparalleled customer support.
                  </p>
                </div>
                <div>
                  <img 
                    src="/about.webp"
                    alt="Our Team"
                    className="object-cover object-top w-full shadow-lg rounded-xl h-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Our Mission & Values</h2>
            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
              <div className="p-8 bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <i className="text-2xl text-white ri-rocket-line"></i>
                </div>
                <h3 className="mb-4 text-xl font-bold text-center text-gray-800">Innovation</h3>
                <p className="text-center text-gray-600">
                  We continuously push the boundaries of mobile gaming technology to deliver cutting-edge experiences that exceed player expectations.
                </p>
              </div>
              
              <div className="p-8 bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                  <i className="text-2xl text-white ri-shield-check-line"></i>
                </div>
                <h3 className="mb-4 text-xl font-bold text-center text-gray-800">Security</h3>
                <p className="text-center text-gray-600">
                  Player safety and data protection are our top priorities. We implement the highest security standards to ensure a safe gaming environment.
                </p>
              </div>
              
              <div className="p-8 bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                  <i className="text-2xl text-white ri-heart-line"></i>
                </div>
                <h3 className="mb-4 text-xl font-bold text-center text-gray-800">Player First</h3>
                <p className="text-center text-gray-600">
                  Every decision we make is centered around enhancing the player experience and providing exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Our Achievements</h2>
            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">5M+</div>
                <p className="font-semibold text-gray-700">Active Players</p>
                <p className="text-sm text-gray-500">Worldwide community</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">200+</div>
                <p className="font-semibold text-gray-700">Casino Games</p>
                <p className="text-sm text-gray-500">Diverse portfolio</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-600">99.9%</div>
                <p className="font-semibold text-gray-700">Uptime</p>
                <p className="text-sm text-gray-500">Reliable service</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-orange-600">24/7</div>
                <p className="font-semibold text-gray-700">Support</p>
                <p className="text-sm text-gray-500">Always available</p>
              </div>
            </div>
          </div>
        </section>

      

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">Join Our Journey</h2>
            <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700">
              We're always looking for talented individuals who share our passion for gaming and innovation. 
              Join our team and help shape the future of mobile casino entertainment.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <a href="/" className="px-8 py-4 font-semibold text-white transition-all transform rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 whitespace-nowrap">
             
                Download App
              </a>
              <button className="px-8 py-4 font-semibold text-purple-600 transition-all border-2 border-purple-600 rounded-full cursor-pointer hover:bg-purple-600 hover:text-white whitespace-nowrap">
               
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
