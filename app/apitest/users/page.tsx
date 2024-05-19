// /app/apitest/users/page.tsx
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import UserAddForm from "@/components/userAddForm/userAddForm";
import { revalidatePath } from "next/cache";
import React from "react";

const prisma = new PrismaClient();

async function deleteUser(formData: FormData) {
  "use server";

  const userId = formData.get("userId");

  if (typeof userId === "string") {
    await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    revalidatePath("/apitest/users");
  }
}

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div className="row">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-[50px]">Id</th>
            <th className="w-auto">Username</th>
            <th className="w-auto">Firstname</th>
            <th className="w-auto">Surname</th>
            <th className="w-auto">Email</th>
            <th className="w-auto">Password</th>
            <th className="w-auto"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link href={`/apitest/users/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.username}</td>
              <td>{user.firstname}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.password && user.password.substring(0, 2)}...</td>
              <td>
                {!user.isAdmin ? (
                  <form action={deleteUser} method="post">
                    <input type="hidden" name="userId" value={user.id} />
                    <button type="submit">Delete</button>
                  </form>
                ) : (
                  "SpecialUser"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserAddForm />
    </div>
  );
}
