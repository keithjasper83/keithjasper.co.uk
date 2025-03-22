import Link from 'next/link';
import { Icons } from '../icons';
import Image from 'next/image'; // Add this import

export default function ContactInfo() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>

      <ul className="space-y-4">
        <li className="flex items-start gap-x-4">
          <div className="flex-none text-white">
            <span className="sr-only">Email</span>
            <Icons name="envelope-o" aria-hidden="true" />
          </div>
          <div>
            <Link
              className="text-white hover:text-orange-500 transition-colors"
              href="mailto:keith@keithjasper.co.uk"
            >
              keith@keithjasper.co.uk
            </Link>
          </div>
        </li>
        <li className="flex items-start gap-x-4">
          <div className="flex-none text-white">
            <span className="sr-only">LinkedIn</span>
            <Icons name="linkedin" aria-hidden="true" />
          </div>
          <div>
            <Link
              className="text-white hover:text-orange-500 transition-colors"
              href="https://www.linkedin.com/in/keith-jasper-uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </li>
        <li className="flex items-start gap-x-4">
          <div className="flex-none text-white">
            <span className="sr-only">Phone</span>
            <Icons name="phone" aria-hidden="true" />
          </div>
          <div>
            <Link
              className="text-white hover:text-orange-500 transition-colors"
              href="tel:+4482128679"
            >
              +44 82128679
            </Link>
          </div>
        </li>
      </ul>
      <Image 
        src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Banner image"
        width={1950}
        height={500}  // Set appropriate height
        quality={80}  // Reduce quality slightly for better performance
        priority      // For above-the-fold images
      />
    </div>
  );
}