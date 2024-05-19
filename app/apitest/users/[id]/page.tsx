// /app/apitest/users/[id]/page.tsx
"use client";
import { PrismaClient } from "@prisma/client";
import React, { useState } from "react";
import { FormText } from "@/components/forms/text";
import { updateUser } from "@/lib/database/forms/updateUser"; // Import updateUser function


const prisma = new PrismaClient();

async function getUserById(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}

export default async function Page({ params: { id } }: any) {
  const userId = Number(id);
  const user = await getUserById(userId);

  return <UserUpdateForm user={user} userId={userId} />;
}

function UserUpdateForm({ user, userId }: { user: any; userId: number }) {
  const [formData, setFormData] = useState({
    username: user.username,
    firstname: user.firstname,
    surname: user.surname,
    email: user.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    try {
      await updateUser(userId, formData); // Call updateUser function with userId and formData
      alert("User updated successfully!");
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Failed to update user.");
    }
  }

  return (
    <div className="row">
      <form onSubmit={handleSubmit} method="post">
        <FormText
          name="username"
          value={formData.username}
          label="Username"
          onChange={handleChange}
        />
        <FormText
          name="firstname"
          value={formData.firstname}
          label="First Name"
          onChange={handleChange}
        />
        <FormText
          name="surname"
          value={formData.surname}
          label="Surname"
          onChange={handleChange}
        />
        <FormText
          name="email"
          value={formData.email}
          label="e-Mail"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="ly yz aac adu ajp arf arv avz awf bag bbm bir box boy bpa bphfocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        />
      </form>
    </div>
  );
}
