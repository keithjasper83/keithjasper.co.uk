import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/layout/nav"; // Changed from Navigation to Nav
import { ContentWrapper } from "../components/layout/content";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "./icons.css";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keith Jasper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full h-screen flex flex-col items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#182027] via-[#080e14] to-[#1a130e]`}
      >
        <Nav />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
        <GoogleAnalytics gaId="G-G3QW29QDS4" />
      </body>
    </html>
  );
}
