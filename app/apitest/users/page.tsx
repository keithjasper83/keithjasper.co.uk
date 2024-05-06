"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FormText } from "@/components/forms/text";

export default function UsersPage({ initialData }: any) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://www.keithjasper.co.uk/realapi/Users/`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const age = formData.get("Age") as string;
    const id = formData.get("id") as string;

    try {
      const res = await fetch(`https://www.keithjasper.co.uk/realapi/Users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ id, name, age }), // Convert data to JSON format
      });
      if (res.ok) {
        console.log("Data adding successful");
        fetchData(); // Refresh data after adding a new user
      } else {
        throw new Error("Failed to add data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      const res = await fetch(
        `https://www.keithjasper.co.uk/realapi/Users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        console.log("User deleted successfully");
        fetchData(); // Refresh data after deleting user
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <main>
      {data &&
        data.map((item: any, index: number) => (
          <div key={index}>
            <div className="bg-blue-700 flex">
              <Link href={`/apitest/users/${item.id}`} className="flex">
                <div>{item.name}</div>
                <div>{item.id}</div>
              </Link>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      <div>
        <form
          method="post"
          action="/apitest/users/"
          className="flex"
          onSubmit={handleSubmit}
        >
          <FormText
            name="name"
            className="text-black"
            placeholder="Username"
            label="Username: "
          />
          <FormText name="age" type="hidden" value="30" />
          <FormText name="id" type="hidden" value="30" />
          <input type="submit" />
        </form>
        NEW USER FORM!
      </div>
    </main>
  );
}
