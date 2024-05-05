//import { Head } from "next/document";
import { Metadata } from "next";

import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact",
};

async function getUsersList() {
  const res = await fetch(`http://localhost:5129/Users`);
  console.log(res.json());
  return res.json();
}

const ApiTest = async () => {
  return (
    <>
      <Head>
        <title>ApiTest</title>
      </Head>
      <h1>ApiTest</h1>
      <div>{getUsersList()}</div>
    </>
  );
};

export default ApiTest;
