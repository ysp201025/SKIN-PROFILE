@echo off
title Minecraft Skin 3D Viewer - Installer
color 2F
echo.
echo  ╔══════════════════════════════════════════════════╗
echo  ║     MINECRAFT SKIN 3D VIEWER - INSTALLER         ║
echo  ║               By YSP2025                         ║
echo  ╚══════════════════════════════════════════════════╝
echo.

:: Check for Node.js
echo [1/3] Node.js စစ်ဆေးနေသည်...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo     ERROR: Node.js မတွေ့ပါ!
    echo     https://nodejs.org မှ Node.js 18+ ဒေါင်းလုတ်ဆွဲပါ
    echo.
    start https://nodejs.org/en/download
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
echo     OK: Node.js %NODE_VER% တွေ့ပြီ

echo.
echo [2/3] Electron install လုပ်နေသည်...
echo     (ပထမဆုံးအကြိမ် မိနစ်အချို့ကြာနိုင်သည်)
call npm install --save-dev electron electron-builder
if %errorlevel% neq 0 (
    echo     ERROR: Install မအောင်မြင်ပါ
    pause
    exit /b 1
)
echo     OK: Install ပြီးပြီ

echo.
echo [3/3] App စတင်နေသည်...
call npm start

pause
