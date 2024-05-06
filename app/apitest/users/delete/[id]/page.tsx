//import { Head } from "next/document";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { useRouter } from "next/router";

import Head from "next/head";
import { Router } from "next/router";

async function deleteData(id: number) {
  const res = await fetch(`http://keithjasper.co.uk:8081/Users/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  } else {
    console.log("Data deletion successful");
  }
}

export const metadata: Metadata = {
  title: "Delete User",
};
const DeleteUser = ({ params: { id } }: any) => {
  return (
    <>
      <Head>
        <title>Delete User</title>
      </Head>
      <h1>Delete User</h1>
      {deleteData(id)
        .then(redirect("/apitest/users"))
        .catch((error) => console.error("Error deleting data:", error))}
      <div>I have just deleted user {id}</div>
    </>
  );
};

export default DeleteUser;
