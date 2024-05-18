import { queryGetAllUsers } from "@/lib/database/queries/users";

// app/api/users/route.tsx

//accepts query params too
// /api/users?limit=10&offset=0 will fetch the first 10 users.
// /api/users?limit=10&offset=10 will fetch the next 10 users, and so on.

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "999", 10);
    const offset = parseInt(url.searchParams.get("offset") || "0", 10);

    const users = await queryGetAllUsers({ limit, offset });

    return new Response(JSON.stringify(users), {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

export async function HEAD(request: Request) {
  return new Response(null, {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
  const requestData = await request.json();
  return new Response(JSON.stringify(requestData), {
    headers: { "content-type": "application/json" },
  });
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: { "content-type": "application/json" },
  });
}
