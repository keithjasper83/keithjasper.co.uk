import Link from "next/link";

async function getData(id: number) {
  //const res = await fetch("http://localhost:5129/Users");
  //jsonplaceholder.typicode.com/users
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}Users/${id}`);
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

export default async function Page({ params: { id } }: any) {
  const data = await getData(id);
  //console.log(data);
  return (
    <main>
      {/* Using map to iterate over each item in the data array */}
      <div className="flex">
        {/* Accessing name and id properties of each item */}
        <div className="bg-blue-700">{data.name}</div>
        <div>{data.id}</div>
      </div>
    </main>
  );
}
