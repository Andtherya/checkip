// api/ip.js
export async function onRequest(context) {
  // Cloudflare 在请求头中提供客户端 IP
  const clientIP = context.request.headers.get('CF-Connecting-IP') || 
                   context.request.headers.get('X-Forwarded-For')?.split(',')[0] ||
                   '127.0.0.1';

  return new Response(
    JSON.stringify({ ip: clientIP }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}
