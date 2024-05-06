//import { Head } from "next/document";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { useRouter } from "next/router";

import Head from "next/head";
import { Router } from "next/router";

async function addData() {
  const res = await fetch(`http://keithjasper.co.uk:8081/Users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  console.log(res.status);
  console.log(res.statusText);

  if (!res.ok) {
    throw new Error("Failed to add data");
  } else {
    console.log("Data adding successful");
  }
}

export const metadata: Metadata = {
  title: "Add User",
};
const AddUser = () => {
  return (
    <>
      <Head>
        <title>Add User</title>
      </Head>
      <h1>Add User</h1>
      {addData()
        //.then(redirect("/apitest/users"))
        .catch((error) => console.error("Error adding data:", error))}
      <div>I have just Added user</div>
    </>
  );
};

export default AddUser;
