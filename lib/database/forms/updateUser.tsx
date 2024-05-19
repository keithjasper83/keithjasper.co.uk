// lib/database/forms/updateUser.ts
"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateUser(id: number, data: any) {

  try {
    await prisma.user.update({
      where: { id },
      data,
    });
    console.log("User updated successfully:", data); // Debugging line
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
}
