
'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (formData.message.length > 500) {
      setSubmitStatus('Message cannot exceed 500 characters.');
      setIsSubmitting(false);
      return;
    }

    try {
      const submitData = new URLSearchParams();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      submitData.append('category', formData.category);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString()
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          category: 'general'
        });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <section className="relative py-20 text-white bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative px-4 mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-200 md:text-2xl">
              We're here to help! Get in touch with our support team for any questions or assistance.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-800">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                      <i className="text-xl text-white ri-customer-service-2-line"></i>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-800">24/7 Customer Support</h3>
                      <p className="text-gray-600">Our dedicated support team is available around the clock to assist you with any questions or concerns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                      <i className="text-xl text-white ri-mail-line"></i>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-800">Email Support</h3>
                      <p className="mb-2 text-gray-600">Send us an email and we'll respond within 24 hours.</p>
                      <a href="mailto:support@orionstars.com" className="text-purple-600 cursor-pointer hover:text-purple-700">
                        support@orionstars.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                      <i className="text-xl text-white ri-chat-3-line"></i>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-800">Live Chat</h3>
                      <p className="text-gray-600">Get instant help through our in-app live chat feature. Available 24/7 for immediate assistance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Office Hours</h3>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold text-gray-800">Customer Support</h4>
                        <p className="text-sm text-gray-600">Available 24/7</p>
                        <p className="text-sm text-gray-600">365 days a year</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-gray-800">Business Inquiries</h4>
                        <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-sm text-gray-600">Weekend: Emergency only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="p-8 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                  <h2 className="mb-6 text-2xl font-bold text-gray-800">Send us a Message</h2>
                  
                  <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 text-sm transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 text-sm transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block mb-2 text-sm font-semibold text-gray-700">
                        Category
                      </label>
                      <div className="relative">
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-8 text-sm transition-all bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="account">Account Issues</option>
                          <option value="payment">Payment Support</option>
                          <option value="partnership">Business Partnership</option>
                          <option value="feedback">Feedback & Suggestions</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="text-gray-400 ri-arrow-down-s-line"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-700">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-sm transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">
                        Message * (Max 500 characters)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        maxLength={500}
                        rows={6}
                        className="w-full px-4 py-3 text-sm transition-all border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                      <div className="mt-1 text-xs text-right text-gray-500">
                        {formData.message.length}/500 characters
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 font-semibold text-white transition-all transform rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 hover:scale-105 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="mr-2 ri-loader-4-line animate-spin"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="mr-2 ri-send-plane-line"></i>
                          Send Message
                        </>
                      )}
                    </button>
                    
                    {submitStatus && (
                      <div className={`p-4 rounded-lg text-center ${
                        submitStatus.includes('successfully') 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {submitStatus}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">How do I reset my password?</h3>
                <p className="text-sm text-gray-600">
                  You can reset your password by clicking "Forgot Password" on the login screen and following the instructions sent to your email.
                </p>
              </div>
              
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Is my personal information safe?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we use advanced encryption and security measures to protect all user data and personal information.
                </p>
              </div>
              
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">How do I report a technical issue?</h3>
                <p className="text-sm text-gray-600">
                  Use the contact form above, select "Technical Support" as the category, or use the in-app chat feature for immediate assistance.
                </p>
              </div>
              
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Can I change my account details?</h3>
                <p className="text-sm text-gray-600">
                  Yes, you can update your account information through the app settings or by contacting our customer support team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
