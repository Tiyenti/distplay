const rq = require("electron-require");
const configLink = document.getElementById("configLink");
let config = rq("./assets/js/util/loadConfig.js").getStore();

configLink.addEventListener("click", () => {
	config.openInEditor();
	// config.onDidChange("Bindings.jump", (newValue, oldValue) => {
	// 	console.log("config Bindings.jump changed to: " + newValue + ", from: " + oldValue);
	// });
});
