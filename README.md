# 🎮 Minecraft Skin 3D Viewer
### By YSP2025 | Complete Installable App

---

## 📦 ဒီ Folder ထဲမှာပါသမျှ

```
├── index.html              ← Main App (ဒါတစ်ခုတည်းနဲ့ Browser မှာ run ရ)
├── manifest.json           ← PWA Manifest
├── sw.js                   ← Service Worker (Offline support)
├── main.js                 ← Electron Main Process
├── package.json            ← Electron Project Config
├── icons/                  ← App Icons
│   ├── icon-*.png          ← PWA/Android icons
│   └── app-icon.ico        ← Windows icon
├── install_and_run_WINDOWS.bat    ← Windows Installer
├── install_and_run_MAC_LINUX.sh   ← Mac/Linux Installer
├── start_pwa_server.py     ← Browser PWA Server
└── README.md               ← ဒီဖိုင်
```

---

## 🚀 Install နည်း ၃ မျိုး

### နည်း ၁ - Browser တွင်တိုက်ရိုက်ဖွင့် (အလွယ်ဆုံး)
```
index.html ကို double-click နှိပ်ပါ → Browser မှာဖွင့်မည်
```
> Network မလို၊ Server မလို — အလွယ်ဆုံးနည်း

---

### နည်း ၂ - Desktop App (Electron) 🖥️
> Node.js 18+ လိုအပ်သည်

**Windows:**
```
install_and_run_WINDOWS.bat ကို double-click နှိပ်ပါ
```

**Mac / Linux:**
```bash
chmod +x install_and_run_MAC_LINUX.sh
./install_and_run_MAC_LINUX.sh
```

**Manual:**
```bash
npm install
npm start
```

**Standalone Installer ဆောက်ချင်ရင်:**
```bash
npm run build-win    # Windows .exe installer
npm run build-mac    # Mac .dmg
npm run build-linux  # Linux AppImage
# Output → dist/ folder ထဲမှာ
```

---

### နည်း ၃ - PWA (Android/iOS/Desktop Install) 📱
> Python 3 လိုအပ်သည်

```bash
python3 start_pwa_server.py
```
Browser မှာ `http://localhost:8080` ဖွင့်ပြီး:
- **Chrome/Edge (Desktop):** Address bar မှာ `⊕` install icon နှိပ်
- **Chrome (Android):** Menu → "Add to Home Screen" 
- **Safari (iOS):** Share → "Add to Home Screen"

App icon desktop/home screen မှာ ပေါ်လာမည် ✅

---

## 🎮 Features

| Feature | Description |
|---------|-------------|
| 🧊 3D Head Viewer | Three.js ဖြင့် Minecraft Head 3D ကြည့် |
| 👤 Full Body | Body Part Rotation Sliders |
| 🎨 Filters | 8 Preset + Special Effects (Rain, Bloom, Neon...) |
| 🌈 Color Picker | HEX / RGB / HSB + iro.js Advanced |
| 📸 Screenshot | PNG Save |
| 🏪 Shop | Marketplace + Coin System |
| 💬 Chat | Text + Voice Messages |
| 🔊 Voice Chat | Real-time Voice |
| 👤 Profile | Avatar + Name |
| 📦 Storage | File Vault |
| 🔧 Player Head Gen | .mcaddon Generator |
| 🌏 Multi-Language | မြန်မာ / English / ไทย |

---

## 🔧 System Requirements

| | Minimum |
|--|---------|
| **Browser** | Chrome 90+ / Edge 90+ / Firefox 85+ |
| **Node.js** | 18+ (Electron mode only) |
| **RAM** | 512MB |
| **OS** | Windows 10+ / macOS 10.14+ / Ubuntu 18.04+ |

---

## 📞 Contact
- TikTok: [@ysp2025](https://www.tiktok.com/@ysp2025)
- Telegram: [@Ysp2022](https://t.me/Ysp2022)
