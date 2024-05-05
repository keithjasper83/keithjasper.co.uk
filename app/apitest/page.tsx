async function getData() {
  //const res = await fetch("http://localhost:5129/Users");
  //jsonplaceholder.typicode.com/users
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
          {/* Accessing name and id properties of each item */}
          <div>{item.name}</div>
          <div>{item.id}</div>
        </div>
      ))}
      HELLO
      {/* Iterating over the array directly */}
      {data.forEach((item: any) => {
        console.log(item.name); // This logs the name to console but doesn't return anything in JSX
      })}
      HAND WRITTEN
      {/* Accessing name property of the first two items */}
      {data[0].name}
      {data[1].name}
    </main>
  );
}
