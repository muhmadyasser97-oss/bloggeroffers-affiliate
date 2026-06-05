export async function onRequest(context) {
  return new Response(
    JSON.stringify({
      status: "ok",
      message: "Blogger Offers API Ready"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
