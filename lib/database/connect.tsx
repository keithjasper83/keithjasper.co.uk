import { Client as PgClient } from "pg";

interface LocalClient extends PgClient {
  _connected?: boolean;
}

const client: LocalClient = new PgClient({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
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
