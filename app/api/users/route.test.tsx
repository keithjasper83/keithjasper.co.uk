import { GET, POST, DELETE } from "./route";
import { describe, it, expect } from "@jest/globals";
import { User } from "@/lib/database/typesUser";
import { disconnectFromDatabase } from "@/lib/database/connect";
import { PasswordManager } from "@/lib/passwords";

let userId1: number;
let userId2: number;

const mockUser: User = {
  username: "johndoe",
  firstname: "John",
  surname: "Doe",
  email: "john@doe.com",
  password: "Loading0",
};

const mockUser2: User = {
  username: "johndoe2",
  firstname: "John2",
  surname: "Doe2",
  email: "john2@doe2.com",
  password: "Loading0",
};

describe("POST /api/users", () => {
  it("should create a new user", async () => {
    mockUser.password = await PasswordManager.hashPassword(mockUser.password);

    const request = new Request(`${process.env.TEST_URL}/api/users`, {
      method: "POST",
      body: JSON.stringify(mockUser),
    });
    const response = await POST(request);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.id).toBeDefined();
    userId1 = data.id;
  });

  it("should create another user", async () => {
    mockUser2.password = await PasswordManager.hashPassword(mockUser2.password);

    const request = new Request(`${process.env.TEST_URL}/api/users`, {
      method: "POST",
      body: JSON.stringify(mockUser2),
    });
    const response = await POST(request);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.id).toBeDefined();
    userId2 = data.id;
  });
});

describe("GET /api/users", () => {
  it("should fetch all users when no query params are provided", async () => {
    const request = new Request(`${process.env.TEST_URL}/api/users`);
    const response = await GET(request);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toContainEqual(expect.objectContaining(mockUser));
    expect(data).toContainEqual(expect.objectContaining(mockUser2));
  });

  it("should fetch a user by their ID", async () => {
    const request = new Request(
      `${process.env.TEST_URL}/api/users?id=${userId1}`
    );
    const response = await GET(request);
    const data = await response.json();
    expect(response.status).toBe(200);
    // Remove 'id' field from the expected user object
    const { id, ...expectedUserWithoutId } = mockUser;
    expect(data).toEqual(expect.objectContaining(expectedUserWithoutId));
  });

  it("should fetch a user by their username", async () => {
    const request = new Request(
      `${process.env.TEST_URL}/api/users?username=johndoe2`
    );
    const response = await GET(request);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual(expect.objectContaining(mockUser2));
  });
});

describe("DELETE /api/users", () => {
  it("should delete a user by their ID", async () => {
    const request = new Request(
      `${process.env.TEST_URL}/api/users?id=${userId1}`,
      {
        method: "DELETE",
      }
    );
    const response = await DELETE(request);
    expect(response.status).toBe(200);
  });

  it("should delete another user by their ID", async () => {
    const request = new Request(
      `${process.env.TEST_URL}/api/users?id=${userId2}`,
      {
        method: "DELETE",
      }
    );
    const response = await DELETE(request);
    expect(response.status).toBe(200);
  });
});

afterAll(async () => {
  await disconnectFromDatabase();
});
