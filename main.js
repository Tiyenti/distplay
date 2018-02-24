const {
	app,
	BrowserWindow,
	Menu
} = require("electron");
const shell = require("electron").shell;
const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		// width: 370,
		// height: 210
		width: 800,
		height: 600
	});

	// and load the index.html of the app.
	win.loadURL(url.format({
		pathname: path.join(__dirname, "src/distplay.html"),
		protocol: "file:",
		slashes: true
	}));

	// Open the DevTools.
	// win.webContents.openDevTools();

	// Emitted when the window is closed.
	win.on("closed", () => win = null);

	let menu = Menu.buildFromTemplate([{
		label: "Menu",
		submenu: [{
			label: "Switch Layout",
			click() {
				let currentURL = win.webContents.getURL();
				let newPage = `distplay${(currentURL.includes("distance")) ? "" : "-distance"}`;
				win.loadURL(url.format({
					pathname: path.join(__dirname, `src/${newPage}.html`),
					protocol: "file:",
					slashes: true
				}));
			}
		}, {
			label: "Settings",
			click() {
				const modalPath = url.format({
					pathname: path.join(__dirname, "src/settings.html"),
					protocol: "file:",
					slashes: true
				});
				let settingsWindow = new BrowserWindow({
					alwaysOnTop: true,
					width: 400,
					height: 200
				});
				settingsWindow.on("closed", () => settingsWindow = null);
				settingsWindow.loadURL(modalPath);
				settingsWindow.setMenu(null);
				settingsWindow.show();
			}
		}, {
			type: "separator"
		}, {
			label: "Exit",
			click() {
				app.quit();
			}
		}]
	}, {
		label: "Help",
		submenu: [{
			label: "About",
			click() {
				shell.openExternal("https://github.com/TntMatthew/distplay#readme");
			}
		}, {
			label: "Report Bug",
			click() {
				shell.openExternal("https://github.com/TntMatthew/distplay/issues");
			}
		}]
	}]);

	Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
