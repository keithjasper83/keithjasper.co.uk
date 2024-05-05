//import { Head } from "next/document";
import { Metadata } from "next";

import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact",
};

const ApiTest = async () => {
  const dynamicData = await fetch(`http://localhost:5129/Users`, {
    cache: "no-store",
  });
  console.log(dynamicData);
  return (
    <>
      <Head>
        <title>ApiTest</title>
      </Head>
      <h1>ApiTest</h1>
      <div></div>
    </>
  );
};

export default ApiTest;
