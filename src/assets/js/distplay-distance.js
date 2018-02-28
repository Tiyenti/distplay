const remote = require("electron").remote;
const rq = require("electron-require");
const isDev = rq("electron-is-dev");
const mappings = rq("./assets/js/util/mappings.json");
const check = rq("./assets/js/util/check.js");
const Collection = rq("./assets/js/util/Collection.js");
let config = rq("./assets/js/util/loadConfig.js")();

let map = new Collection();

function loop() {
	let gamepads = navigator.getGamepads();
	if (gamepads[0] != undefined) {
		let gp = gamepads[0];
		check.buttons(gp.buttons, map);
		check.sticks(gp.axes, map, 23, 20, 268, 20);
	}
	window.requestAnimationFrame(loop);
}

window.onload = function WindowLoad() {
	let win = remote.getCurrentWindow();
	if (!isDev) {
		win.setContentSize(345, 95);
	}
	let allIDs = document.querySelectorAll("*[id]");

	for (let elt of allIDs) {
		let index;
		if (elt.id.match(/^ls|rs$/i)) {
			index = mappings[elt.id];
		} else {
			index = mappings[config.Bindings[elt.id]];
		}
		let obj = {
			"id": index,
			"name": elt.id,
			"button": (config.Bindings[elt.id]) ? config.Bindings[elt.id] : elt.id,
			"element": elt
		};
		map.set(index, obj);
	}
	window.requestAnimationFrame(loop);
};
