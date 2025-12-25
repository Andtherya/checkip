// worker.js
export default {
  async fetch(request, env) {
    // 获取访客 IP（Cloudflare 自动注入）
    const clientIP = request.headers.get('CF-Connecting-IP') || '未知';

    // 构建 HTML 页面
    const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>您的 IP 地址</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #f5f5f5;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h1 { color: #333; }
    #ip { 
      font-size: 1.5rem; 
      margin-top: 1rem; 
      color: #0070f3; 
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>您的 IP 地址是：</h1>
    <div id="ip">${clientIP}</div>
  </div>
</body>
</html>
`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    });
  }
};
