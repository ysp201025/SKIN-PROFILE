#!/usr/bin/env python3
"""
Minecraft Skin 3D Viewer - Local Server Launcher
Browser မှာ PWA အနေနဲ့ install လုပ်ရန်

Usage:
  python3 start_pwa_server.py
  
Then open: http://localhost:8080
And click Install button in browser address bar
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import threading

PORT = 8080
HOST = "localhost"

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Headers for PWA
        self.send_header('Service-Worker-Allowed', '/')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Suppress noisy logs
        pass
    
    def do_GET(self):
        # Serve manifest.json with correct content-type
        if self.path == '/manifest.json':
            self.send_response(200)
            self.send_header('Content-Type', 'application/manifest+json')
            self.end_headers()
            with open('manifest.json', 'rb') as f:
                self.wfile.write(f.read())
        else:
            super().do_GET()

def open_browser():
    import time
    time.sleep(1.5)
    webbrowser.open(f'http://{HOST}:{PORT}')

if __name__ == '__main__':
    # Change to script directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print("")
    print("╔══════════════════════════════════════════════════╗")
    print("║      MINECRAFT SKIN VIEWER - PWA Server          ║")
    print("╚══════════════════════════════════════════════════╝")
    print(f"\n  Server started: http://{HOST}:{PORT}")
    print("\n  Chrome/Edge မှာ install လုပ်နည်း:")
    print("  1. Browser ဖွင့်ပြီး address bar မှာ ⊕ icon ကိုနှိပ်ပါ")
    print("  2. 'Install Minecraft Skin Viewer' ကိုနှိပ်ပါ")
    print("  3. Desktop/Home Screen မှာ app icon ပေါ်လာမည်")
    print("\n  Ctrl+C နှိပ်ပါ → server ပိတ်မည်")
    print("")
    
    # Open browser automatically
    threading.Thread(target=open_browser, daemon=True).start()
    
    with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Server ပိတ်ပြီ")
