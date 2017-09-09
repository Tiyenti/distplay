# distplay
![distplay](/img/distplay.png?raw=true)

A basic controller input display. Made this because I couldn't find any
Linux controller input displays. I pretty much made this only for myself,
so I made no attempt to make this universally compatible with every system
ever. It works for me, but it may not work for you - the HTML5 Gamepad API
is kind of inconsistent. It should technically "work" on any system,
but it might not work *properly*.

This input was previously exlusively designed to work with Distance, but
I decided to make it work for anything with an Xbox controller layout.

The Distance version is still available though.

![distplay-distance](/img/distplay-distance.png?raw=true)

## Using the Display
Because I have no idea how to package an Electron app and I'm
too lazy to learn, run the display with Electron manually:

`electron ./distplay.html`

(or `electron ./distplay-distance.html` for the Distance version)

Add a window capture source in OBS to capture the display's window, and
set the colour transparency key to black.

You can run this in a web browser instead of using Electron, though
you'll have to modify the script to remove the stuff that sets the
window size, and also the require statement required to do that,
otherwise you'll get errors.
  
## Display mapping
The display for the display mapped by default as:

| Button           | JS              |
| ---------------- | --------------- |
| A                | buttons[0]      |
| B                | buttons[1]      |
| X                | buttons[2]      |
| Y                | buttons[3]      |
| Left Bumper      | buttons[4]      |
| Right Bumper     | buttons[5]      |
| Right Trigger    | buttons[7]      |
| Left Trigger     | buttons[6]       |
| Back/Select      | buttons[8]      |
| Forward/Start    | buttons[9]      |
| LS Click         | buttons[10]     |
| RS Click         | buttons[11]     |
| DPad Up          | buttons[12]     |
| DPad Down        | buttons[13]     |
| DPad Left        | buttons[14]     |
| DPad Right       | buttons[15]     |
| LS Horizontal    | axes[0]         |
| LS Vertical      | axes[1]         |
| RS Horizontal    | axes[2]         |
| RS Vertical      | axes[3]         |

The Distance display is set up to reflect the default bindings
for the game, albliet with a right stick.

Because the HTML5 Gamepad API is inconsistent between different
browsers and operating systems and I made no attempt to make things
universally compatible, you may need to edit the JS yourself to get
things to work properly - you'll also need to do this if your
ingame control setup differs.

