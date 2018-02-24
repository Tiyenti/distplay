const remote = require("electron").remote;
const rq = require("electron-require");
const mappings = rq("./assets/js/util/mappings.json");
const checkButtons = rq("./assets/js/util/checkButtons.js");
const Collection = rq("./assets/js/util/Collection.js");
rq("./assets/js/util/loadConfig.js")();

let map = new Collection();

function checkSticks(axes) {
	if (axes[0] > 0) {
		map.find("name", "ls").element.style.left = `${23 + (axes[0] * 18)}px`;
	} else if (axes[0] < 0) {
		map.find("name", "ls").element.style.left = `${23 + (axes[0] * 18)}px`;
	}
	if (axes[1] > 0) {
		map.find("name", "ls").element.style.top = `${52 + (axes[1] * 18)}px`;
	} else if (axes[1] < 0) {
		map.find("name", "ls").element.style.top = `${52 + (axes[1] * 18)}px`;
	}

	if (axes[2] > 0) {
		map.find("name", "rs").element.style.left = `${278 + (axes[2] * 18)}px`;
	} else if (axes[2] < 0) {
		map.find("name", "rs").element.style.left = `${278 + (axes[2] * 18)}px`;
	}
	if (axes[3] > 0) {
		map.find("name", "rs").element.style.top = `${52 + (axes[3] * 18)}px`;
	} else if (axes[3] < 0) {
		map.find("name", "rs").element.style.top = `${52 + (axes[3] * 18)}px`;
	}
}

function loop() {
	let gamepads = navigator.getGamepads();
	if (gamepads[0] != undefined) {
		let gp = gamepads[0];
		checkButtons(gp.buttons, map, true);
		checkSticks(gp.axes);
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

	//console.log(map);
	window.requestAnimationFrame(loop);
};
