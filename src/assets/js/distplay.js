const remote = require("electron").remote;
const rq = require("electron-require");
const mappings = rq("./assets/js/util/mappings.json");
const check = rq("./assets/js/util/check.js");
const Collection = rq("./assets/js/util/Collection.js");
rq("./assets/js/util/loadConfig.js")();

let map = new Collection();

function loop() {
	let gamepads = navigator.getGamepads();
	if (gamepads[0] != undefined) {
		let gp = gamepads[0];
		check.buttons(gp.buttons, map, true);
		check.sticks(gp.axes, map, 23, 52, 278, 52);
	}
	window.requestAnimationFrame(loop);
}

window.onload = function WindowLoad() {
	let win = remote.getCurrentWindow();
	win.setContentSize(355, 155);
	let allIDs = document.querySelectorAll("*[id]");

	for (let elt of allIDs) {
		let index = mappings[elt.id];
		let obj = {
			"id": index,
			"name": elt.id,
			"element": elt
		};
		map.set(index, obj);
	}
	window.requestAnimationFrame(loop);
};
