import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface User {
  id: number;
  name: string;
}

interface Props {
  users: User[];
}

const ApiTest: NextPage<Props> = ({ users }) => {
  return (
    <>
      <Head>
        <title>ApiTest</title>
      </Head>
      <h1>ApiTest</h1>
      <div>
        {/* Render fetched users */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch(`http://localhost:5129/Users`);
    const users: User[] = await res.json();
    return {
      props: { users },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: { users: [] },
    };
  }
};

export default ApiTest;
