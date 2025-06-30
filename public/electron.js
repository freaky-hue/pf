const electron = require("electron");
const path = require('path');
const server = require('../ts/a')
const BrowserWindow = electron.BrowserWindow;
const http = require('http');
const isDev = require("electron-is-dev");


const app = electron.app;

let mainWindow;

const serverInstance = http.createServer(server);


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    title: "Teste",
    titleBarStyle: "hiddenInset",
    resizable: false
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => (mainWindow = null));
}

app.whenReady().then(()=>{
  createWindow();
  

  serverInstance.listen(3001, ()=>{});
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});