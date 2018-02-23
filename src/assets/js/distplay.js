const remote = require("electron").remote;

window.onload = function WindowLoad() {
	let win = remote.getCurrentWindow();
	win.setSize(370, 210);
	loop();
};

function loop() {
	let rt = document.getElementById("rt");
	let lt = document.getElementById("lt");
	let rb = document.getElementById("rb");
	let lb = document.getElementById("lb");
	let a = document.getElementById("a");
	let b = document.getElementById("b");
	let x = document.getElementById("x");
	let y = document.getElementById("y");
	let dup = document.getElementById("dup");
	let ddown = document.getElementById("ddown");
	let dleft = document.getElementById("dleft");
	let dright = document.getElementById("dright");
	let ls = document.getElementById("ls");
	let rs = document.getElementById("rs");
	let start = document.getElementById("start");
	let select = document.getElementById("select");

	let gamepads = navigator.getGamepads();
	if (gamepads[0] != undefined) {
		let gp = gamepads[0];

		if (gp.buttons[0].pressed) {
			a.className = "pressed facebutton";
		} else {
			a.className = "unpressed facebutton";
		}

		if (gp.buttons[1].pressed) {
			b.className = "pressed facebutton";
		} else {
			b.className = "unpressed facebutton";
		}

		if (gp.buttons[2].pressed) {
			x.className = "pressed facebutton";
		} else {
			x.className = "unpressed facebutton";
		}

		if (gp.buttons[3].pressed) {
			y.className = "pressed facebutton";
		} else {
			y.className = "unpressed facebutton";
		}

		if (gp.buttons[4].pressed) {
			lb.className = "pressed bumper";
		} else {
			lb.className = "unpressed bumper";
		}

		if (gp.buttons[5].pressed) {
			rb.className = "pressed bumper";
		} else {
			rb.className = "unpressed bumper";
		}

		if (gp.buttons[8].pressed) {
			select.className = "pressed bumper";
		} else {
			select.className = "unpressed bumper";
		}

		if (gp.buttons[9].pressed) {
			start.className = "pressed bumper";
		} else {
			start.className = "unpressed bumper";
		}

		if (gp.buttons[10].pressed) {
			ls.className = "stick pressedstick";
		} else {
			ls.className = "stick";
		}

		if (gp.buttons[11].pressed) {
			rs.className = "stick pressedstick";
		} else {
			rs.className = "stick";
		}

		if (gp.buttons[7].pressed) {
			rt.className = "pressed button";
		} else {
			rt.className = "unpressed button";
		}

		if (gp.buttons[6].pressed) {
			lt.className = "pressed button";
		} else {
			lt.className = "unpressed button";
		}

		if (gp.axes[0] > 0) {
			ls.style.left = 23 + (gp.axes[0] * 18) + "px";
		} else if (gp.axes[0] < 0) {
			ls.style.left = 23 + (gp.axes[0] * 18) + "px";
		}
		if (gp.axes[1] > 0) {
			ls.style.top = 52 + (gp.axes[1] * 18) + "px";
		} else if (gp.axes[1] < 0) {
			ls.style.top = 52 + (gp.axes[1] * 18) + "px";
		}

		if (gp.axes[2] > 0) {
			rs.style.left = 278 + (gp.axes[2] * 18) + "px";
		} else if (gp.axes[2] < 0) {
			rs.style.left = 278 + (gp.axes[2] * 18) + "px";
		}
		if (gp.axes[3] > 0) {
			rs.style.top = 52 + (gp.axes[3] * 18) + "px";
		} else if (gp.axes[3] < 0) {
			rs.style.top = 52 + (gp.axes[3] * 18) + "px";
		}

		if (gp.buttons[12].pressed) {
			dup.className = "pressed dpadbutton";
			ddown.className = "unpressed dpadbutton";
		} else if (gp.buttons[13].pressed) {
			dup.className = "unpressed dpadbutton";
			ddown.className = "pressed dpadbutton";
		} else {
			dup.className = "unpressed dpadbutton";
			ddown.className = "unpressed dpadbutton";
		}

		if (gp.buttons[14].pressed) {
			dleft.className = "pressed dpadbutton";
			dright.className = "unpressed dpadbutton";
		} else if (gp.buttons[15].pressed) {
			dleft.className = "unpressed dpadbutton";
			dright.className = "pressed dpadbutton";
		} else {
			dleft.className = "unpressed dpadbutton";
			dright.className = "unpressed dpadbutton";
		}
	}

	window.requestAnimationFrame(loop);
}
