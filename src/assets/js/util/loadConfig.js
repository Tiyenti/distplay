const rq = require("electron-require");
const Store = rq("electron-store");
let store = new Store();
let Bindings = {
	"jump": "x",
	"reset": "select",
	"grip": "lb",
	"boost": "rb",
	"brake": "lt",
	"accel": "rt"
};

function setAllBindings() {
	store.set({
		Bindings
	});
}

function setAllDefaults() {
	setAllBindings();
	store.set({
		"Settings": {
			"backgroundColor": "#000",
			"selectedLayout": "distplay"
		}
	});
}

function setMissingDefaults() {
	if (!store.has("Bindings")) {
		if (!store.has("Settings")) {
			setAllDefaults();
			return;
		}
		setAllBindings();
		return;
	}
	for (let elt of Object.keys(Bindings)) {
		if (!store.has(`Bindings.${elt}`)) {
			store.set(`Bindings.${elt}`, Bindings[elt]);
		}
	}
	// if (!store.has("Bindings.jump")) {
	// 	store.set("Bindings.jump", "x");
	// }
	// if (!store.has("Bindings.reset")) {
	// 	store.set("Bindings.reset", "select");
	// }
	// if (!store.has("Bindings.grip")) {
	// 	store.set("Bindings.grip", "lb");
	// }
	// if (!store.has("Bindings.boost")) {
	// 	store.set("Bindings.boost", "rb");
	// }
	// if (!store.has("Bindings.brake")) {
	// 	store.set("Bindings.brake", "lt");
	// }
	// if (!store.has("Bindings.accel")) {
	// 	store.set("Bindings.accel", "rt");
	// }
}

function loadConfig() {
	setMissingDefaults();
	document.body.style.backgroundColor = store.get("Settings.backgroundColor", "#000");
	return store;
}

function getStore() {
	return store;
}

module.exports = {
	loadConfig,
	getStore
};
