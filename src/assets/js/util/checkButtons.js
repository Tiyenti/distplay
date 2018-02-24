const rq = require("electron-require");
const mappings = rq("./assets/js/util/mappings.json");

function checkButtons(buttons, map, dpad) {
	for (let i = 0; i < Object.keys(mappings).length; i++) {
		let ele = map.get(i);
		if (ele) {
			if (buttons[i].pressed) {
				if (ele.name.match(/^ls|rs$/i)) {
					ele.element.classList.add("stickpressed");
				} else {
					ele.element.classList.add("pressed");
				}
				// --- Check dpad opposites ---
				if (dpad && dpad === true) {
					if (i === 12) {
						map.find("name", "ddown").element.classList.remove("pressed");
					} else if (i === 13) {
						map.find("name", "dup").element.classList.remove("pressed");
					} else if (i === 14) {
						map.find("name", "dright").element.classList.remove("pressed");
					} else if (i === 15) {
						map.find("name", "dleft").element.classList.remove("pressed");
					}
				}
				// ------
			} else {
				ele.element.classList.remove("pressed");
				ele.element.classList.remove("stickpressed");
			}
		}
	}
}

module.exports = checkButtons;
