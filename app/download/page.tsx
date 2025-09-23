
import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Download Orion Stars Casino App | Android & iOS Installation Guide",
  description: "Download Orion Stars Casino app for Android and iOS devices. Step-by-step installation guide, troubleshooting tips, and system requirements.",
  keywords: "Orion Stars download, casino app download, Android APK, iOS install, mobile casino app",
  alternates: {
    canonical: "https://orionstarsmobi.com/download",
  },
};

export default function Download() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Orion Stars Casino",
            "applicationCategory": "GameApplication",
            "operatingSystem": ["Android", "iOS"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "2847"
            }
          })
        }}
      />
      
      <Header />
      
      <main className="min-h-screen">
        <section className="py-20 text-white bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Download Orion Stars Casino
            </h1>
            <p className="mb-8 text-xl text-purple-100 md:text-2xl">
              Get the official app for Android and iOS devices
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <a href="http://tititi.xyz/orionstars/android/OrionStars.apk" className="px-8 py-4 font-semibold transition-colors bg-green-600 rounded-full shadow-xl cursor-pointer hover:bg-green-700 whitespace-nowrap">
                <i className="mr-2 ri-android-fill"></i>
                Download Android APK
              </a>
              <a href="http://download.dragon-plus.com/index.html?param=orionstars" target="_blank" rel="nofollow" className="px-8 py-4 font-semibold transition-colors bg-gray-800 rounded-full shadow-xl cursor-pointer hover:bg-black whitespace-nowrap">
                <i className="mr-2 ri-apple-fill"></i>
                Download for iOS
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
              <div className="p-8 shadow-lg bg-green-50 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full">
                  <i className="text-2xl text-white ri-android-fill"></i>
                </div>
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                  Android Download Guide
                </h2>
                
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">System Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Android 5.0 or higher</li>
                    <li>• 100MB free storage space</li>
                    <li>• Stable internet connection</li>
                    <li>• RAM: 2GB minimum</li>
                  </ul>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-800">Installation Steps</h3>
                <ol className="mb-8 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span>Enable "Unknown Sources" in your device security settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span>Visit orionstarsmobi.com on your mobile browser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span>Tap "Download Android APK" button</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span>Wait for download to complete</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span>Open downloaded APK file and install</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">6</span>
                    <span>Launch app and start playing</span>
                  </li>
                </ol>

                <div className="p-4 border-l-4 border-yellow-400 rounded bg-yellow-50">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    <i className="mr-2 text-yellow-600 ri-tools-fill"></i>
                    Troubleshooting Tips
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Clear browser cache if download fails</li>
                    <li>• Restart device after installation</li>
                    <li>• Disable antivirus temporarily</li>
                    <li>• Check available storage space</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 shadow-lg bg-blue-50 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full">
                  <i className="text-2xl text-white ri-apple-fill"></i>
                </div>
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                  iOS Download Guide
                </h2>
                
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">System Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• iOS 12.0 or later</li>
                    <li>• 150MB free storage space</li>
                    <li>• iPhone 6s or newer</li>
                    <li>• iPad Air 2 or newer</li>
                  </ul>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-800">Installation Steps</h3>
                <ol className="mb-8 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span>Open Safari browser on your iOS device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span>Visit orionstarsmobi.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span>Tap "Download for iOS" button</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span>Follow installation prompts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span>{'Go to Settings > General > Profiles'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">6</span>
                    <span>Trust the developer profile</span>
                  </li>
                </ol>

                <div className="p-4 border-l-4 border-yellow-400 rounded bg-yellow-50">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    <i className="mr-2 text-yellow-600 ri-tools-fill"></i>
                    Troubleshooting Tips
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Use Safari browser only</li>
                    <li>• Check iOS version compatibility</li>
                    <li>• Restart device if needed</li>
                    <li>• Contact support for profile issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
              Download Features
            </h2>
            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-purple-600 rounded-full">
                  <i className="text-xl text-white ri-download-line"></i>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Fast Download</h3>
                <p className="text-gray-600">Quick and secure download process optimized for mobile devices</p>
              </div>
              
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-600 rounded-full">
                  <i className="text-xl text-white ri-shield-check-line"></i>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Safe & Secure</h3>
                <p className="text-gray-600">Verified and secure installation with no malware or viruses</p>
              </div>
              
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full">
                  <i className="text-xl text-white ri-refresh-line"></i>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Auto Updates</h3>
                <p className="text-gray-600">Automatic updates ensure you always have the latest features</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">
              Ready to Download?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
              Join millions of players enjoying Orion Stars Casino on their mobile devices. Download now and start playing your favorite casino games.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <a href="http://tititi.xyz/orionstars/android/OrionStars.apk" className="px-8 py-4 font-semibold text-white transition-colors bg-green-600 rounded-full shadow-xl cursor-pointer hover:bg-green-700 whitespace-nowrap">
                <i className="mr-2 ri-android-fill"></i>
                Download for Android
              </a>
              <a href="http://download.dragon-plus.com/index.html?param=orionstars" target="_blank" rel="nofollow" className="px-8 py-4 font-semibold text-white transition-colors bg-gray-800 rounded-full shadow-xl cursor-pointer hover:bg-black whitespace-nowrap">
                <i className="mr-2 ri-apple-fill"></i>
                Download for iOS
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
