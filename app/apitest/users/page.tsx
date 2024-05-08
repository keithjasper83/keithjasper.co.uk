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
    const id = formData.get("id") as string;

    try {
      const jsonPostData = JSON.stringify({
        Name: name,
        Id: parseInt(id),
      });
      const res = await fetch(`https://www.keithjasper.co.uk/realapi/Users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonPostData,
      });
      if (res.ok) {
        console.log("Data adding successful");
        fetchData();
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
        fetchData();
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="row">
      {data &&
        data.map((item: any) => (
          <div key={item.id}>
            <div className="bg-blue-700 flex">
              <Link href={`/apitest/users/${item.id}`} className="flex">
                <div>
                  <p>ID: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                  <p>Address: {item.address}</p>
                </div>
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
          <div>
            <FormText
              name="name"
              className="text-black"
              placeholder="Username"
              label="Username: "
            />
            <FormText name="id" type="hidden" value="30" />
            <input type="submit" />
          </div>
        </form>
        NEW USER FORM!
      </div>
    </div>
  );
}
