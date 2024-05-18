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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}Users/`);
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
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;
    const id = formData.get("id") as string;

    try {
      const jsonPostData = JSON.stringify({
        Name: name,
        Email: email,
        Address: address,
        Id: parseInt(id),
      });
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}Users/`, {
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
        `${process.env.NEXT_PUBLIC_API_URL}Users/${userId}`,
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
      <form
        method="post"
        action="/apitest/users/"
        className="flex"
        onSubmit={handleSubmit}
      >
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-[100px]">Id</th>
              <th className="w-auto">Name</th>
              <th className="w-auto">Email</th>
              <th className="w-auto">Address</th>
              <th className="w-auto"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item: any) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/apitest/users/${item.id}`}>{item.id}</Link>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td>New User:</td>
              <td>
                <FormText
                  name="name"
                  className="text-black"
                  placeholder="Username"
                  label="Username: "
                  labelDisplay={false}
                />
              </td>
              <td>
                <FormText
                  name="email"
                  className="text-black"
                  placeholder="Email"
                  label="Email: "
                  labelDisplay={false}
                />
              </td>
              <td>
                <FormText
                  name="address"
                  className="text-black"
                  placeholder="Address"
                  label="Address: "
                  labelDisplay={false}
                />
              </td>
              <td>
                <FormText name="id" type="hidden" value="30" />
                <input
                  type="submit"
                  className="ly yz aac adu ajp arf arv avz awf bag bbm bir box boy bpa bphfocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
}
