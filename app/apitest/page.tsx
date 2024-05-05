import { use } from "react";
import Head from "next/head";

async function getNames() {
  return await await fetch("http://localhost:5129/Users", {
    cache: "no-store",
  });
}

const ApiTest = () => {
  // State to store the fetched users
  const users = use(getNames());
  console.log(users);
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
