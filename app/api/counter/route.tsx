export async function GET(request: Request) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}counter`);
    console.log("using api url", process.env.NEXT_PUBLIC_API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch counter");
    }
    const counterData = await res.json();

    // Perform any additional logic here if needed

    return new Response(JSON.stringify(counterData), {
      headers: {
        "Content-Type": "application/json",
        // Add cache-control headers to prevent caching
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error fetching counter:", error);
    return new Response("Error fetching counter", { status: 500 });
  }
}
