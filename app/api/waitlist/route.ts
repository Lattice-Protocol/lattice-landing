export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const response = await fetch(
      `${process.env.NEXUS_BASE_URL}/api/v1/user/waitlist/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          message: `API returned status ${response.status}`,
        },
        {
          status: response.status,
        }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error: Error | any) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      {
        status: error.status || 500,
      }
    );
  }
}
