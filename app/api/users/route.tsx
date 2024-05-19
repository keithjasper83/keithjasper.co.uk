import {
  queryCreateUser,
  queryDeleteUser,
  queryGetAllUsers,
  queryGetUserById,
  queryGetUserByUsername,
  queryUpdateUser,
} from "@/lib/database/queries/users";
import { User } from "@/db/typesUser";

// app/api/users/route.tsx

//accepts query params too
// /api/users?limit=10&offset=0 will fetch the first 10 users.
// /api/users?limit=10&offset=10 will fetch the next 10 users, and so on.
// /api/users?id=1 will fetch the user with id 1.
/**
 * Handles the GET request for retrieving user data.
 * @param request - The request object.
 * @returns A response object containing the user data.
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "999", 10);
    const offset = parseInt(url.searchParams.get("offset") || "0", 10);
    const id = parseInt(url.searchParams.get("id") || "0", 10); // Convert id to number
    const username = url.searchParams.get("username") || "";

    let data = null; // Initialize data as null

    if (id > 0) {
      data = await queryGetUserById(id.toString()); // Pass id as a string
    } else if (username) {
      data = await queryGetUserByUsername(username);
    } else {
      data = await queryGetAllUsers({ limit, offset });
    }

    // Check if data is an array, if yes and its length is 1, return the single user object
    if (Array.isArray(data) && data.length === 1 && id > 0) {
      return new Response(JSON.stringify(data[0]), {
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

/**
 * Handles the POST request for creating or updating a user.
 * @param request - The request object containing the user data.
 * @returns A response object with the updated or created user data.
 */
export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    // take the posted data and ensure it is type User
    const body = (await request.json()) as User;

    const requestUpdate = parseInt(url.searchParams.get("update") || "0", 10); // Convert id to string
    let user = null; // Declare the user variable with a default value of null
    if (requestUpdate > 0) {
      user = await queryUpdateUser(body); // Assign the value of user inside the if statement
    } else {
      user = await queryCreateUser(body); // Assign the value of user inside the else statement
    }

    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

/**
 * Handles the DELETE request for the user route.
 * @param request - The request object.
 * @returns A Response object.
 */
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = parseInt(url.searchParams.get("id") || "0", 10); // Convert id to string
    const data = await queryDeleteUser(id.toString()); // Pass id as a string
    return new Response(null, {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

// UNUSED METHODS - Kept for reference and future use
export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: { "content-type": "application/json" },
  });
}

export async function HEAD(request: Request) {
  return new Response(null, {
    headers: { "content-type": "application/json" },
  });
}
