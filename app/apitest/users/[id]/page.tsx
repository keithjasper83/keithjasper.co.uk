// /app/apitest/users/[id]/page.tsx
import { PrismaClient } from "@prisma/client";
import React from "react";
import { FormText } from "@/components/forms/text";

const prisma = new PrismaClient();

async function getUserById(id: number) {
  "use server";

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

async function updateUser(id: number, data: any) {
  "use server";
  try {
    await prisma.user.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
}

export default async function Page({ params: { id } }: any) {
  const userId = Number(id);
  const user = await getUserById(userId);

  return (
    <div className="row">
      <form action={updateUser} method="post">
        <FormText name="username" value={user.username} label="Username" />
        <FormText name="firstname" value={user.firstname} label="First Name" />
        <FormText name="surname" value={user.surname} label="Surname" />
        <FormText name="email" value={user.email} label="e-Mail" />
        <input
          type="submit"
          className="ly yz aac adu ajp arf arv avz awf bag bbm bir box boy bpa bphfocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        />{" "}
      </form>
    </div>
  );
}
