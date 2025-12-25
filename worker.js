export default {
  async fetch(request) {
    const ip = request.headers.get("CF-Connecting-IP") || "Unknown";
    return new Response(ip, {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  },
};
