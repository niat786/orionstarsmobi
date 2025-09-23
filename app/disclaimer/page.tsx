import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Disclaimer & Legal Information | Orion Stars Casino",
  description: "Important legal information, terms of use, privacy policy, and disclaimer for Orion Stars Casino mobile gaming platform.",
  keywords: "Orion Stars disclaimer, legal information, terms of use, privacy policy, gambling disclaimer",
  alternates: {
    canonical: "https://orionstarsmobi.com/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <section className="relative py-20 text-white bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0"
            
          ></div>
          <div className="container relative px-4 mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Legal Disclaimer
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-200 md:text-2xl">
              Important legal information and terms regarding the use of Orion Stars Casino services.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="p-6 mb-8 border-l-4 border-yellow-400 bg-yellow-50">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="text-2xl text-yellow-400 ri-alert-line"></i>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-yellow-800">Important Notice</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Please read this disclaimer carefully before using Orion Stars Casino services. 
                        By accessing or using our platform, you acknowledge that you have read, understood, 
                        and agree to be bound by these terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-purple-600 ri-scales-line"></i>
                    General Disclaimer
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    Orion Stars Casino operates as an entertainment platform providing casino-style games through a sweepstakes model. 
                    The information provided on this website and through our mobile application is for general informational purposes only.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, 
                    express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, 
                    products, services, or related graphics contained on the website or app.
                  </p>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-blue-600 ri-user-line"></i>
                    Age Restrictions and Eligibility
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="flex-shrink-0 mt-1 mr-2 text-green-500 ri-check-line"></i>
                      <span>Users must be 18 years of age or older to participate in our services</span>
                    </li>
                    <li className="flex items-start">
                      <i className="flex-shrink-0 mt-1 mr-2 text-green-500 ri-check-line"></i>
                      <span>Users must comply with all local, state, and federal laws regarding online gaming</span>
                    </li>
                    <li className="flex items-start">
                      <i className="flex-shrink-0 mt-1 mr-2 text-green-500 ri-check-line"></i>
                      <span>It is the user's responsibility to determine if participation is legal in their jurisdiction</span>
                    </li>
                    <li className="flex items-start">
                      <i className="flex-shrink-0 mt-1 mr-2 text-green-500 ri-check-line"></i>
                      <span>We reserve the right to verify age and identity at any time</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-red-600 ri-alert-line"></i>
                    Responsible Gaming Notice
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    Gaming should be fun and entertaining. We encourage all users to play responsibly and within their means. 
                    If you feel that gaming is becoming a problem, we provide tools and resources to help maintain control.
                  </p>
                  <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                    <h3 className="mb-2 font-semibold text-red-800">Warning Signs of Problem Gaming:</h3>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Spending more time or money than intended</li>
                      <li>• Chasing losses with bigger bets</li>
                      <li>• Gaming to escape problems or negative emotions</li>
                      <li>• Neglecting responsibilities or relationships</li>
                      <li>• Lying about gaming activities</li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-green-600 ri-shield-line"></i>
                    Privacy and Data Protection
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    We are committed to protecting your privacy and personal information. Our privacy policy outlines how we collect, 
                    use, and protect your data. By using our services, you consent to the collection and use of information in 
                    accordance with our privacy policy.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• We use industry-standard encryption to protect your data</li>
                    <li>• Personal information is never sold to third parties</li>
                    <li>• You have the right to request deletion of your data</li>
                    <li>• We comply with applicable data protection regulations</li>
                  </ul>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-orange-600 ri-money-dollar-circle-line"></i>
                    Financial Disclaimers
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>No Guarantee of Winnings:</strong> Gaming outcomes are based on chance and random number generation. 
                      Past results do not guarantee future outcomes. There is no assurance that any user will win prizes or recover 
                      their participation costs.
                    </p>
                    <p>
                      <strong>Transaction Security:</strong> While we implement secure payment processing, users are responsible for 
                      maintaining the confidentiality of their account information and payment methods.
                    </p>
                    <p>
                      <strong>Refund Policy:</strong> All purchases are final. Refunds may only be considered in exceptional 
                      circumstances at our sole discretion and in accordance with applicable consumer protection laws.
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-indigo-600 ri-computer-line"></i>
                    Technical Disclaimers
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700">
                    While we strive to provide uninterrupted service, we cannot guarantee that our platform will be available 
                    at all times or free from technical issues.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Service interruptions may occur due to maintenance or technical issues</li>
                    <li>• Game results may be voided in case of technical malfunctions</li>
                    <li>• Users are responsible for ensuring their devices meet system requirements</li>
                    <li>• Internet connectivity issues are the user's responsibility</li>
                  </ul>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 ri-information-line text-cyan-600"></i>
                    Third-Party Content and Links
                  </h2>
                  <p className="leading-relaxed text-gray-700">
                    Our platform may contain links to third-party websites or services that are not owned or controlled by 
                    Orion Stars Casino. We have no control over and assume no responsibility for the content, privacy policies, 
                    or practices of any third-party websites or services. Users access third-party content at their own risk.
                  </p>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                    <i className="mr-3 text-purple-600 ri-file-text-line"></i>
                    Limitation of Liability
                  </h2>
                  <p className="leading-relaxed text-gray-700">
                    To the fullest extent permitted by applicable law, Orion Stars Casino shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                    directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your 
                    use of our services.
                  </p>
                </div>

                <div className="p-8 border border-blue-200 bg-blue-50 rounded-xl">
                  <h2 className="flex items-center mb-4 text-2xl font-bold text-blue-800">
                    <i className="mr-3 ri-phone-line"></i>
                    Contact Information
                  </h2>
                  <p className="mb-4 leading-relaxed text-blue-700">
                    If you have any questions about this disclaimer or our services, please contact us:
                  </p>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Email:</strong> legal@orionstars.com</p>
                    <p><strong>Phone:</strong> +1 (800) ORION-STARS</p>
                    <p><strong>Support:</strong> Available 24/7 through our app or website</p>
                  </div>
                </div>

                <div className="py-8 text-center">
                  <p className="text-sm text-gray-600">
                    Last updated: January 1, 2024
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    This disclaimer is subject to change without notice. Please review regularly for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
