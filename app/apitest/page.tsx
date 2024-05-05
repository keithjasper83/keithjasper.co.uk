import Head from "next/head";

interface User {
  id: number;
  name: string;
  // Add more properties as needed
}

const API_URL = "http://localhost:5129/Users";

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

export const getServerSideProps = async () => {
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
