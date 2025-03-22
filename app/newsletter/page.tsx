import { Metadata } from 'next';
import NewsletterForm from '../../components/newsletter/NewsletterForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter | Keith Jasper',
  description: 'Subscribe to receive updates from Keith Jasper',
  openGraph: {
    title: 'Newsletter | Keith Jasper',
    description: 'Subscribe to receive updates from Keith Jasper',
    url: 'https://keithjasper.co.uk/newsletter',
    siteName: 'Keith Jasper',
    type: 'website',
  },
};

export default function NewsletterPage() {
  return (
    <main className="flex flex-col py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Stay Updated</h1>
          <p className="text-gray-300">
            Subscribe to my newsletter to receive the latest updates, articles, and news.
          </p>
        </div>
        
        <NewsletterForm />
        
        <div className="max-w-2xl mx-auto mt-12 text-sm text-gray-400 text-center">
          <p>
            By subscribing, you agree to receive periodic emails. You can unsubscribe at any time.
            Your information will be processed in accordance with our privacy policy.
          </p>
        </div>
      </div>
    </main>
  );
}

