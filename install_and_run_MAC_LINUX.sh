#!/bin/bash
echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║     MINECRAFT SKIN 3D VIEWER - INSTALLER         ║"
echo "║               By YSP2025                         ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# Check Node.js
echo "[1/3] Node.js စစ်ဆေးနေသည်..."
if ! command -v node &> /dev/null; then
    echo "  ERROR: Node.js မတွေ့ပါ!"
    echo "  https://nodejs.org မှ Node.js 18+ ဒေါင်းလုတ်ဆွဲပါ"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "https://nodejs.org/en/download"
    else
        xdg-open "https://nodejs.org/en/download"
    fi
    exit 1
fi
echo "  OK: Node.js $(node --version) တွေ့ပြီ"

echo ""
echo "[2/3] Electron install လုပ်နေသည်..."
echo "  (ပထမဆုံးအကြိမ် မိနစ်အချို့ကြာနိုင်သည်)"
npm install --save-dev electron electron-builder
if [ $? -ne 0 ]; then
    echo "  ERROR: Install မအောင်မြင်ပါ"
    exit 1
fi
echo "  OK: Install ပြီးပြီ"

echo ""
echo "[3/3] App စတင်နေသည်..."
npm start
