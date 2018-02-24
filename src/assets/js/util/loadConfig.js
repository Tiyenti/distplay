const fs = require("fs");
const ini = require("ini");
const path = require("path");
let config;
/* --- Config file handling --- */
function loadMissingConfig(s) {
	if (!s) {
		config = {
			Bindings: {
				jump: "x",
				reset: "select",
				grip: "lb",
				boost: "rb",
				brake: "lt",
				accel: "rt"
			},
			Settings: {
				backgroundColor: "#000"
			}
		};
	}
	if (config.Settings && config.Settings.backgroundColor) {
		document.body.style.backgroundColor = config.Settings.backgroundColor;
	} else {
		config.Settings.backgroundColor = "#000";
	}
	if (config.Bindings) {
		let b = config.Bindings;
		if (!b.jump) {
			config.Bindings.jump = "x";
		}
		if (!b.reset) {
			config.Bindings.reset = "select";
		}
		if (!b.grip) {
			config.Bindings.grip = "lb";
		}
		if (!b.boost) {
			config.Bindings.boost = "rb";
		}
		if (!b.brake) {
			config.Bindings.brake = "lt";
		}
		if (!b.accel) {
			config.Bindings.accel = "rt";
		}
	}
}

function loadConfig() {
	try {
		config = ini.parse(fs.readFileSync(path.join(__dirname, "../../../../config.ini"), "utf-8"));
	} catch (e) {
		loadMissingConfig(config);
	}
	loadMissingConfig(config);
	return config;
}
/* ---End config file handling --- */

module.exports = loadConfig;
