import Head from "next/head";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "./components/layout/nav";
import { Footer } from "./components/layout/footer";
import { ContentWrapper } from "./components/layout/content";
import "./globals.css";

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
      <Head>
        <title>Keith Jasper</title>
        <meta name="description" content="Keith Jasper" />
      </Head>
      <body
        className={`${inter.className} w-full h-screen flex flex-col items-center`}
      >
        <Nav />
        <ContentWrapper>{children}</ContentWrapper>

        <Footer />
      </body>
    </html>
  );
}
