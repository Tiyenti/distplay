const remote = require("electron").remote;
const rq = require("electron-require");
const isDev = require("electron-is-dev");
const createPanel = require("settings-panel");
const mappings = rq("./assets/js/util/mappings.json");
const buttons2 = [
	"A",
	"B",
	"X",
	"Y",
	"Left Bumper",
	"Right Bumper",
	"Left Trigger",
	"Right Trigger",
	"Select",
	"Start",
	"Left Stick (click)",
	"Right Stick (click)",
	"D-Pad Up",
	"D-Pad Down",
	"D-Pad Left",
	"D-Pad Right"
];
const buttons = {
	"A": "a",
	"B": "b",
	"X": "x",
	"Y": "y",
	"Left Bumper": "lb",
	"Right Bumper": "rb",
	"Left Trigger": "lt",
	"Right Trigger": "rt",
	"Select": "select",
	"Start": "start",
	"Left Stick (click)": "ls",
	"Right Stick (click)": "rs",
	"D-Pad Up": "dup",
	"D-Pad Down": "ddown",
	"D-Pad Left": "dleft",
	"D-Pad Right": "dright"
};
let config = rq("./assets/js/util/loadConfig.js");
let store = config.getStore();
let panel;

let applySettings = () => {
	let map = {};
	let settings = panel.get();
	for (let key in settings) {
		if (!key.match(/^background-color|submit|restore-defaults$/i)) {
			if (key !== "backgroundColor") {
				map[key] = buttons[settings[key]];
			} else {
				map[key] = settings[key];
			}
		}
	}
	map.backgroundColor = panel.get("backgroundColor");
	for (let key in map) {
		console.log(key, map[key]);
		if (key !== "backgroundColor") {
			store.set(`Bindings.${key}`, map[key]);
		} else {
			store.set(`Settings.${key}`, map[key]);
		}
	}
	remote.getCurrentWindow().close();
};

window.onload = function WindowLoad() {
	let settingsWindow = remote.getCurrentWindow();
	if (!isDev) {
		settingsWindow.setContentSize(400, 380);
	}

	panel = createPanel([{
		type: "raw",
		content: "<h2 style=\"text-align:center;margin:0;padding:5px\">Bindings</h2>"
	}, {
		type: "select",
		label: "Jump",
		id: "jump",
		options: buttons2,
		value: buttons2[mappings[store.get("Bindings.jump")]]
	}, {
		type: "select",
		label: "Reset",
		id: "reset",
		options: buttons2,
		value: buttons2[mappings[store.get("Bindings.reset")]]
	}, {
		type: "select",
		label: "Grip",
		id: "grip",
		options: buttons2,
		value: buttons2[mappings[store.get("Bindings.grip")]]
	}, {
		type: "select",
		label: "Boost",
		id: "boost",
		options: buttons2,
		value: buttons2[mappings[store.get("Bindings.boost")]]
	}, {
		type: "select",
		label: "Brake",
		id: "brake",
		options: buttons2,
		value: buttons2[mappings[store.get("Bindings.brake")]]
	}, {
		type: "select",
		label: "Accelerate",
		id: "accel",
		options: buttons2,
		value: buttons2[mappings[store.get("Bindings.accel")]]
	}, {
		type: "raw",
		content: "<hr /><h2 style=\"text-align:center;margin:0;padding:5px\">Other</h2>"
	}, {
		type: "color",
		label: "Background Color",
		id: "backgroundColor",
		format: "hex",
		value: `${store.get("Settings.backgroundColor")}`,
		default: "#000000"
	}, {
		type: "button",
		label: "Restore Defaults",
		input: () => {
			config.setAllDefaults();
			remote.getCurrentWebContents().reload();
		}
	}, {
		type: "button",
		label: "Submit",
		input: () => {
			applySettings();
		}
	}], {
		theme: require("settings-panel/theme/control"),
		palette: ["#222", "white"],
		title: "Settings",
		labelWidth: "10em",
		fontFamily: "Consolas",
		container: document.getElementById("panel")
	});
};
