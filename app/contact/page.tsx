//import { Head } from "next/document";
import { Metadata } from "next";

import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact",
};
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
    </>
  );
};

export default Contact;
