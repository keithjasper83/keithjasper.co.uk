export async function GET(request: Request) {
  const requestData = {
    method: request.method,
    url: request.url,
    headers: Array.from(request.headers.entries()),
    body: await request.text(),
  };

  return new Response(JSON.stringify({ "MY DEFAULT RESPONSE": "0" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function HEAD(request: Request) {
  const requestData = {
    method: request.method,
    url: request.url,
    headers: Array.from(request.headers.entries()),
    body: await request.text(),
  };

  return new Response(JSON.stringify(requestData), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const requestData = {
    method: request.method,
    url: request.url,
    headers: Array.from(request.headers.entries()),
    body: await request.text(),
  };

  return new Response(JSON.stringify(requestData), {
    headers: {
      "content-type": "application/json",
    },
  });
}

// Similarly, implement other HTTP methods...

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {
  const requestData = {
    method: request.method,
    url: request.url,
    headers: Array.from(request.headers.entries()),
    body: await request.text(),
  };

  return new Response(JSON.stringify(requestData), {
    headers: {
      "content-type": "application/json",
    },
  });
}
