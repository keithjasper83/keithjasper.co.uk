import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../icons';

interface ContactHeaderProps {
  bannerImageSrc: string;
  profileImageSrc: string;
  name: string;
}

export default function ContactHeader({
  bannerImageSrc,
  profileImageSrc,
  name,
}: ContactHeaderProps) {
  return (
    <div className="relative">
      <div className="h-32 w-full lg:h-48 relative">
        <Image
          className="object-cover"
          src={bannerImageSrc}
          alt="Banner image"
          fill
          priority
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex relative h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32">
            <Image
              className="rounded-full"
              src={profileImageSrc}
              alt={`${name}'s profile picture`}
              fill
              priority
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{name}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="mailto:keith@keithjasper.co.uk" className="inline-flex justify-center items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
                <Icons name="envelope-o" aria-hidden="true" />
                <span>Email</span>
              </Link>
              <Link href="tel:+4482128679" className="inline-flex justify-center items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
                <Icons name="phone" aria-hidden="true" />
                <span>Call me</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
}