import Link from "next/link";
import { FormText } from "@/components/forms/text";

async function getData() {
  //const res = await fetch("http://localhost:5129/Users");
  //jsonplaceholder.typicode.com/users
  const res = await fetch("http://keithjasper.co.uk:8081/Users/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  https: if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  } else {
    console.log("Datafetch complete");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  //console.log(data);
  return (
    <main>
      {/* Using map to iterate over each item in the data array */}
      {data.map((item: any, index: number) => (
        <div key={index}>
          <div className="bg-blue-700 flex">
            <Link href={`/apitest/users/${item.id}`} className="flex">
              <div>{item.name}</div>
              <div>{item.id}</div>
            </Link>
            <Link href={`/apitest/users/delete/${item.id}/`}>Delete User</Link>
          </div>
        </div>
      ))}
      <div>
        <form method="post" action="/apitest/users/new/" className="flex">
          <FormText
            name="name"
            className="text-black"
            placeholder="Username"
            label="Username: "
          />
          <FormText name="Age" type="hidden" value="30" />
          <FormText name="id" type="hidden" value="30" />

          <button type="submit">UPLOAD</button>
        </form>
        NEW USER FORM!
      </div>
    </main>
  );
}
