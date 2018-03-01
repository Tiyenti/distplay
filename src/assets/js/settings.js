const rq = require("electron-require");
let config = rq("./assets/js/util/loadConfig.js");

const configLink = document.getElementById("configLink");
const restoreDefaults = document.getElementById("restoreDefaults");

configLink.addEventListener("click", () => {
	config.getStore().openInEditor();
	// config.onDidChange("Bindings.jump", (newValue, oldValue) => {
	// 	console.log("config Bindings.jump changed to: " + newValue + ", from: " + oldValue);
	// });
});

restoreDefaults.addEventListener("click", () => {
	config.setAllDefaults();
});
