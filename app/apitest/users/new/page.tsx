//import { Head } from "next/document";
import { Metadata } from "next";
import Head from "next/head";

async function addData(id: number, name: string, age: number) {
  const res: Response = await fetch(`http://keithjasper.co.uk:8081/Users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      name: name,
      age: age,
    }),
  });
  console.log(res.body);

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
      <h1>Add User</h1>
      {(async () => {
        try {
          await addData(1, "test", 123);
        } catch (error) {
          console.error("Error adding data:", error);
        }
      })()}
      <div>I have just Added user</div>
    </>
  );
};

export default AddUser;
