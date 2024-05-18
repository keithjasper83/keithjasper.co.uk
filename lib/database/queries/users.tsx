import { connectToDatabase } from "../connect";
import { TypeDatabaseLimit } from "../typeDatabaseLimit";

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
