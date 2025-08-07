#!/usr/bin/env python3
"""
简单的本地服务器启动脚本
"""

import http.server
import socketserver
import webbrowser

PORT = 8000

print(f"🚀 启动本地服务器，端口: {PORT}")
print(f"📍 访问地址: http://localhost:{PORT}")
print("按 Ctrl+C 停止服务器")

try:
    with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        # 自动打开浏览器
        webbrowser.open(f"http://localhost:{PORT}")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n服务器已停止")
except Exception as e:
    print(f"错误: {e}")
