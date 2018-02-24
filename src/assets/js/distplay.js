const remote = require("electron").remote;
const rq = require("electron-require");
const mappings = rq("./assets/js/util/mappings.json");

// const loadJsonFile = require("load-json-file");
// let mappings = loadJsonFile.sync("src/assets/js/util/mappings.json");
const Collection = rq("./assets/js/util/Collection.js");

let map = new Collection();

function checkPressed(buttons) {
	for (let i = 0; i < 16; i++) {
		let ele = map.get(i);
		if (buttons[i].pressed) {
			if (ele.name.match(/^ls|rs$/i)) {
				ele.element.classList.add("stickpressed");
			} else {
				ele.element.classList.add("pressed");
			}
			// --- Check dpad opposites ---
			if (i === 12) {
				map.find("name", "ddown").element.classList.remove("pressed");
			} else if (i === 13) {
				map.find("name", "dup").element.classList.remove("pressed");
			} else if (i === 14) {
				map.find("name", "dright").element.classList.remove("pressed");
			} else if (i === 15) {
				map.find("name", "dleft").element.classList.remove("pressed");
			}
			// ------
		} else {
			ele.element.classList.remove("pressed");
			ele.element.classList.remove("stickpressed");
		}
	}
}

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
		checkPressed(gp.buttons);
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

	console.log(map);
	window.requestAnimationFrame(loop);
};
