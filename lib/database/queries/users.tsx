import { connectToDatabase } from "../connect";
import { TypeDatabaseLimit } from "../typeDatabaseLimit";
import { User } from "@/db/typesUser";

// Query to get all users from the database.
export const queryGetAllUsers = async ({
  limit = 999,
  offset = 0,
}: TypeDatabaseLimit) => {
  try {
    const client = await connectToDatabase();
    const { rows } = await client.query(
      `SELECT * FROM users LIMIT $1 OFFSET $2;`,
      [limit, offset]
    );
    return rows;
  } catch (error) {
    console.error("Database query failed", error);
    throw new Error("Database query failed");
  }
};

// Query to get a user by their ID.
export const queryGetUserById = async (id: string) => {
  try {
    const client = await connectToDatabase();
    const { rows } = await client.query(`SELECT * FROM users WHERE id = $1;`, [
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Database query failed", error);
    throw new Error("Database query failed");
  }
};

// Query to get a user by their username.
export const queryGetUserByUsername = async (username: string) => {
  try {
    const client = await connectToDatabase();
    const { rows } = await client.query(
      `SELECT * FROM users WHERE username = $1;`,
      [username]
    );
    return rows[0];
  } catch (error) {
    console.error("Database query failed", error);
    throw new Error("Database query failed");
  }
};

// Query to create a new user in the database.
export const queryCreateUser = async (user: User) => {
  try {
    const client = await connectToDatabase();
    const { rows } = await client.query(
      `INSERT INTO users (username, firstname, surname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [user.username, user.firstname, user.surname, user.email, user.password]
    );
    return rows[0];
  } catch (error) {
    console.error("Database query failed", error);
    throw new Error("Database query failed");
  }
};

// Query to update a user in the database.
export const queryUpdateUser = async (user: User) => {
  try {
    const client = await connectToDatabase();
    const { rows } = await client.query(
      `UPDATE users SET username = $1, firstname = $2, surname = $3, email = $4, password = $5 WHERE id = $6 RETURNING *;`,
      [
        user.username,
        user.firstname,
        user.surname,
        user.email,
        user.password,
        user.id,
      ]
    );
    return rows;
  } catch (error) {
    console.error("Database query failed", error);
    throw new Error("Database query failed");
  }
};

// Query to delete a user from the database.
export const queryDeleteUser = async (id: string) => {
  try {
    const client = await connectToDatabase();
    const { rows } = await client.query(`DELETE FROM users WHERE id = $1;`, [
      id,
    ]);
    return rows[0];
  } catch (error) {
    console.error("Database query failed", error);
    throw new Error("Database query failed");
  }
};

// Path: lib/database/typesUser.tsx
