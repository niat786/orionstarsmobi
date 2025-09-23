
import type { Metadata } from "next";
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: "Contact Orion Stars Casino | Customer Support & Help",
  description: "Get in touch with Orion Stars Casino support team. Contact us for help with downloads, account issues, technical support, and general inquiries.",
  keywords: "Orion Stars contact, customer support, help, technical support, casino support",
  alternates: {
    canonical: "https://orionstarsmobi.com/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
