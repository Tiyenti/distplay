const remote = require("electron").remote;

window.onload = function WindowLoad() {
	let win = remote.getCurrentWindow();
	win.setSize(365, 155);
	loop();
};

function loop() {
	let jump = document.getElementById("jump");
	let reset = document.getElementById("reset");
	let grip = document.getElementById("grip");
	let boost = document.getElementById("boost");
	let brake = document.getElementById("brake");
	let accel = document.getElementById("accel");
	let ls = document.getElementById("ls");
	let rs = document.getElementById("rs");

	let gamepads = navigator.getGamepads();
	if (gamepads[0] != undefined) {
		let gp = gamepads[0];

		if (gp.buttons[2].pressed) {
			jump.className = "pressed button";
		} else {
			jump.className = "unpressed button";
		}

		if (gp.buttons[4].pressed) {
			grip.className = "pressed button";
		} else {
			grip.className = "unpressed button";
		}

		if (gp.buttons[6].pressed) {
			reset.className = "pressed button";
		} else {
			reset.className = "unpressed button";
		}

		if (gp.buttons[5].pressed) {
			boost.className = "pressed button";
		} else {
			boost.className = "unpressed button";
		}

		if (gp.axes[5] > -1) {
			accel.className = "pressed button";
		} else {
			accel.className = "unpressed button";
		}

		if (gp.axes[2] > -1) {
			brake.className = "pressed button";
		} else {
			brake.className = "unpressed button";
		}

		if (gp.axes[0] > 0) {
			ls.style.left = 23 + (gp.axes[0] * 18) + "px";
		} else if (gp.axes[0] < 0) {
			ls.style.left = 23 + (gp.axes[0] * 18) + "px";
		}
		if (gp.axes[1] > 0) {
			ls.style.top = 20 + (gp.axes[1] * 18) + "px";
		} else if (gp.axes[1] < 0) {
			ls.style.top = 20 + (gp.axes[1] * 18) + "px";
		}

		if (gp.axes[3] > 0) {
			rs.style.left = 268 + (gp.axes[3] * 18) + "px";
		} else if (gp.axes[3] < 0) {
			rs.style.left = 268 + (gp.axes[3] * 18) + "px";
		}
		if (gp.axes[4] > 0) {
			rs.style.top = 20 + (gp.axes[4] * 18) + "px";
		} else if (gp.axes[4] < 0) {
			rs.style.top = 20 + (gp.axes[4] * 18) + "px";
		}
	}

	window.requestAnimationFrame(loop);
}
