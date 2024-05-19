// pages/404.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page404 = () => {
  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch("/api/random404Image");
        if (!response.ok) {
          throw new Error("Failed to fetch random image");
        }
        const data = await response.json();
        console.log("data:", data); // Debugging
        setRandomImage(data);
      } catch (error) {
        console.error("Error fetching random image:", error);
      }
    };

    fetchRandomImage();
  }, []);

  console.log("randomImage:", randomImage); // Debugging
  return (
    <div className="relative isolate min-h-full">
      {randomImage && (
        <Image
          src={`/404/${randomImage}`}
          alt="Page not found"
          className="absolute inset-0 -z-10 h-full w-full brightness-50 object-cover object-top"
          width="1920"
          height="1080"
        />
      )}

      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 relative z-10">
        <p className="text-base font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
