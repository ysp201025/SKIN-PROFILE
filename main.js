const { app, BrowserWindow, Menu, shell, dialog, ipcMain } = require('electron');
const path = require('path');

// Keep a global reference to prevent garbage collection
let mainWindow;

function createWindow() {
  // Create the browser window with Minecraft-themed settings
  mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    minWidth: 400,
    minHeight: 600,
    title: 'Minecraft Skin 3D Viewer',
    icon: path.join(__dirname, 'icons', 'app-icon.ico'),
    backgroundColor: '#1a1a2e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false, // Allow local file access
    },
    show: false, // Don't show until ready
    frame: true,
    autoHideMenuBar: true,
  });

  // Load the app
  mainWindow.loadFile('index.html');

  // Show window when ready (prevents white flash)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Handle external links - open in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Simple menu
  const menu = Menu.buildFromTemplate([
    {
      label: 'App',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: () => mainWindow.reload()
        },
        {
          label: 'Fullscreen',
          accelerator: 'F11',
          click: () => mainWindow.setFullScreen(!mainWindow.isFullScreen())
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click: () => app.quit()
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { label: 'Zoom In', accelerator: 'CmdOrCtrl+=', click: () => mainWindow.webContents.setZoomFactor(mainWindow.webContents.getZoomFactor() + 0.1) },
        { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', click: () => mainWindow.webContents.setZoomFactor(mainWindow.webContents.getZoomFactor() - 0.1) },
        { label: 'Reset Zoom', accelerator: 'CmdOrCtrl+0', click: () => mainWindow.webContents.setZoomFactor(1.0) },
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}

// App ready
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed (except macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
