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
			"backgroundColor": "#000000",
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
}

function loadConfig() {
	setMissingDefaults();
	document.body.style.backgroundColor = store.get("Settings.backgroundColor", "#000000");
	return store;
}

function getStore() {
	return store;
}

module.exports = {
	loadConfig,
	getStore,
	setAllDefaults
};
