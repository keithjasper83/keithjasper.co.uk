// /components/userAddForm/userAddForm.tsx
import { PrismaClient } from "@prisma/client";
import { FormText } from "@/components/forms/text";
import React from "react";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function UserAddForm() {
  const addUser = async (formData: FormData) => {
    "use server";
    await prisma.user.create({
      data: {
        username: formData.get("username") as string,
        firstname: formData.get("firstname") as string,
        surname: formData.get("surname") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    });
    revalidatePath("/apitest/users");
  };

  return (
    <form action={addUser}>
      <table>
        <tr>
          <td>New User:</td>
          <td>
            <FormText
              name="username"
              placeholder="Username"
              label="Username: "
              labelDisplay={false}
            />
          </td>
          <td>
            <FormText
              name="firstname"
              placeholder="Firstname"
              label="Firstname: "
              labelDisplay={false}
            />
          </td>
          <td>
            <FormText
              name="surname"
              placeholder="Surname"
              label="Surname: "
              labelDisplay={false}
            />
          </td>
          <td>
            <FormText
              name="email"
              placeholder="Email"
              label="Email: "
              labelDisplay={false}
            />
          </td>
          <td>
            <FormText
              name="password"
              placeholder="Password"
              label="Password: "
              labelDisplay={false}
              type="password"
            />
          </td>
          <td>
            <input
              type="submit"
              className="ly yz aac adu ajp arf arv avz awf bag bbm bir box boy bpa bphfocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
