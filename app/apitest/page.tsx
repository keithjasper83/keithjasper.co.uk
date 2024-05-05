"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

async function getNames() {
  const response = await fetch("http://localhost:5129/Users", {
    cache: "no-store",
  });
  const data = await response.json(); // Convert response to JSON
  return data;
}

const ApiTest = () => {
  // State to store the fetched users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const userData = await getNames();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();

    // Cleanup function not needed here because the effect does not have any cleanup
  }, []); // Empty dependency array means it runs only once when the component mounts

  return (
    <>
      <Head>
        <title>ApiTest</title>
      </Head>
      <h1>ApiTest</h1>
      <div>
        {/* Display fetched users */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApiTest;
