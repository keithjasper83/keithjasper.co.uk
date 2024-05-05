// /app/apitest/page.tsx

import { GetServerSideProps } from "next";
import Head from "next/head";
import getConfig from "next/config";

interface User {
  id: number;
  name: string;
  // Add more properties as needed
}

const { serverRuntimeConfig } = getConfig();
const API_URL = serverRuntimeConfig.API_URL;

const ApiTest = ({ users }: { users: User[] }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default ApiTest;
