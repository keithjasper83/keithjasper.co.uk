import { Client as PgClient, Pool } from "pg";

interface LocalClient extends PgClient {
  _connected?: boolean;
}

// Construct connection URL
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const client: LocalClient = new PgClient({
  connectionString, // Use the constructed connection URL
}) as LocalClient;

export const connectToDatabase = async () => {
  if (!client._connected) {
    await client.connect();
    client._connected = true;
  }
  return client;
};

export const disconnectFromDatabase = async () => {
  if (client._connected) {
    await client.end();
    client._connected = false;
  }
};

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Add other configurations if needed
});
