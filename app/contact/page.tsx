import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Icons } from '../../components/icons';
import ContactForm from '../../components/contact/ContactForm';
import ContactHeader from '../../components/contact/ContactHeader';
import ContactInfo from '../../components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact | Keith Jasper',
  description: 'Get in touch with Keith Jasper',
  openGraph: {
    title: 'Contact | Keith Jasper',
    description: 'Get in touch with Keith Jasper',
    url: 'https://keithjasper.co.uk/contact',
    siteName: 'Keith Jasper',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactHeader 
        bannerImageSrc="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        profileImageSrc="/images/profile.jpg" // Use local image instead of LinkedIn
        name="Keith Jasper"
      />
      
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
