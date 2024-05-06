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
      <p>Use social links below to contact me.</p>
    </>
  );
};

export default Contact;
