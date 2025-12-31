
import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy | Orion Stars Casino | Data Protection & Privacy",
  description: "Orion Stars Casino Privacy Policy. Learn how we collect, use, and protect your personal information. Your privacy and data security are our top priorities.",
  keywords: "Orion Stars privacy policy, data protection, privacy, personal information, data security, GDPR",
  alternates: {
    canonical: "https://www.orionstarsmobi.com/privacy",
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

      <main>
      <section className="relative py-20 text-white bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0"
        ></div>
        <div className="container relative px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Privacy Policy
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 md:text-2xl">
            Protecting your privacy is our top priority.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Last updated: Sep 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">

            <div className="p-6 mb-8 border-l-4 border-yellow-400 bg-yellow-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="text-2xl text-yellow-400 ri-lock-line"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Your Privacy Matters</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      This Privacy Policy outlines how Orion Stars Mobi collects, uses, and safeguards your personal information. By using our platform, you agree to the practices described in this policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-purple-600 ri-information-line"></i>
                  Introduction
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Orion Stars Mobi is committed to protecting your privacy and ensuring the security of your personal data. This policy explains our data handling practices and your rights regarding your information when you use our mobile app and website at <a href="https://orionstarsmobi.com" className="text-blue-600 hover:text-blue-700">https://orionstarsmobi.com</a>. Our goal is to be transparent about the data we collect and how we use it to provide a safe and engaging gaming experience.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-blue-600 ri-database-2-line"></i>
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xl font-medium text-gray-900">Personal Information</h3>
                    <p className="mb-3 text-gray-700">We collect information you voluntarily provide when you create an account, make a purchase, or contact us. This includes:</p>
                    <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                      <li><strong>Contact Details:</strong> Your name and email address.</li>
                      <li><strong>Account Information:</strong> Username and password.</li>
                      <li><strong>Payment Information:</strong> Transaction details, which are processed securely by a third-party payment provider. We do not store your full payment card details.</li>
                      <li><strong>Communications:</strong> Records of your correspondence with our customer support team.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium text-gray-900">Technical and Usage Data</h3>
                    <p className="mb-3 text-gray-700">When you use our services, we automatically collect data to improve performance and user experience, such as:</p>
                    <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                      <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
                      <li><strong>IP Address and Geolocation:</strong> Used for security and to ensure compliance with legal restrictions.</li>
                      <li><strong>Usage Data:</strong> Pages visited, time spent on the app, games played, and in-game activities.</li>
                      <li><strong>Performance Data:</strong> Crash reports and bug data to help us fix issues.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-green-600 ri-tools-line"></i>
                  How We Use Your Information
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We use the information we collect to provide and enhance our services, as well as for the following purposes:
                </p>
                <ul className="pl-6 space-y-3 text-gray-700 list-disc">
                  <li><strong>Service Provision:</strong> To operate the platform, manage your account, and process transactions.</li>
                  <li><strong>Personalization:</strong> To tailor your gaming experience and provide relevant content.</li>
                  <li><strong>Communication:</strong> To send you important service updates, security alerts, and promotional offers (if you've opted in).</li>
                  <li><strong>Analytics and Improvement:</strong> To understand user behavior, analyze trends, and improve our app's functionality and content.</li>
                  <li><strong>Security:</strong> To protect our platform from fraud, abuse, and illegal activities.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations.</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-orange-600 ri-share-line"></i>
                  Information Sharing and Disclosure
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We will never sell or rent your personal information to third parties. We may share your data in limited circumstances, such as:
                </p>
                <ul className="pl-6 space-y-3 text-gray-700 list-disc">
                  <li><strong>With Service Providers:</strong> We use trusted third-party services for functions like payment processing, cloud hosting, and analytics. These providers are obligated to protect your data and only use it for the purposes we specify.</li>
                  <li><strong>For Legal Reasons:</strong> We may disclose information if required by law or in good faith to protect our rights, your safety, or the safety of others.</li>
                  <li><strong>In Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction. We will notify you of any such change.</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-red-600 ri-shield-check-line"></i>
                  Data Security
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We employ a variety of security measures to protect your information, including:
                </p>
                <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                  <li><strong>Encryption:</strong> We use SSL/TLS encryption to secure data in transit and encryption at rest for stored data.</li>
                  <li><strong>Access Controls:</strong> Access to your personal data is restricted to authorized personnel on a need-to-know basis.</li>
                  <li><strong>Regular Audits:</strong> We conduct regular security assessments to identify and patch vulnerabilities.</li>
                  <li><strong>Third-Party Compliance:</strong> We partner with certified third-party services that adhere to strict security standards.</li>
                </ul>
                <p className="mt-4 leading-relaxed text-gray-700">
                  While we take every precaution, no system is 100% secure. You are responsible for keeping your account password confidential.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-cyan-600 ri-user-line"></i>
                  Your Privacy Rights
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  You have rights regarding your personal data. You can:
                </p>
                <ul className="pl-6 space-y-3 text-gray-700 list-disc">
                  <li><strong>Access and Update:</strong> You can view and update your information directly within your account settings.</li>
                  <li><strong>Request Deletion:</strong> You may request the deletion of your account and personal data, subject to our legal and regulatory obligations.</li>
                  <li><strong>Opt-Out of Communications:</strong> You can unsubscribe from our marketing emails at any time by clicking the unsubscribe link in the email.</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-yellow-600 ri-file-text-line"></i>
                  Cookies and Tracking Technologies
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We use cookies and similar technologies to enhance your experience, analyze site usage, and support our marketing efforts. You can manage your cookie preferences through your browser settings.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-indigo-600 ri-group-line"></i>
                  Children's Privacy
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Our service is intended for individuals **18 years of age or older**. We do not knowingly collect personal information from children under this age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take appropriate action.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-green-600 ri-global-line"></i>
                  International Data Transfers
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Your information may be processed and stored in countries outside your own. We implement international transfer mechanisms, such as Standard Contractual Clauses, to ensure that your data is protected with the same level of security as required by your local laws.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                  <i className="mr-3 text-gray-600 ri-history-line"></i>
                  Changes to this Policy
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of the service after such changes constitutes your acceptance of the new policy.
                </p>
              </div>

              <div className="p-8 border border-blue-200 bg-blue-50 rounded-xl">
                <h2 className="flex items-center mb-4 text-2xl font-bold text-blue-800">
                  <i className="mr-3 ri-mail-line"></i>
                  Contact Us
                </h2>
                <p className="mb-4 leading-relaxed text-blue-700">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="space-y-2 text-blue-700">
                  <p><strong>Email:</strong> privacy@orionstarsmobi.com</p>
                  <p><strong>Support:</strong> <a href="mailto:support@orionstarsmobi.com" className="hover:underline">support@orionstarsmobi.com</a></p>
                </div>
              </div>

              <div className="py-8 text-center">
                <p className="text-sm text-gray-600">
                  This policy is effective as of the last updated date and supersedes all prior versions.
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
