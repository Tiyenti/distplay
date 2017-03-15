# distplay
![distplay](/img/display.png?raw=true)

Controller input display specifically designed for Distance. Made this
because I couldn't find any Linux controller input displays. I pretty
much made this only for myself, so I made no attempt to make this
universally compatible with every system ever. It works for me,
but it may not work for you - the HTML5 Gamepad API is kind of
inconsistent. It should technically "work" on any system,
but it might not work *properly*.

## Using the Display
Run the display using Electron:

`electron path/to/distplay.html`

Add a window capture source in OBS to capture the display's window, and
set the colour transparency key to black.

You can run this in a web browser instead of using Electron, though
you'll have to modify the script to remove the stuff that sets the
window size, and also the require statement required to do that,
otherwise you'll get errors.
  
## Display mapping
The display is mapped by default as:

| Display     | Button        | JS               |
| ----------  | ------------- | ---------------  |
| Left Stick  | Left Stick    | axes[0], axes[1] |
| Right Stick | Right Stick   | axes[3], axes[5] |
| Accelerate  | Right Trigger | axes[5]          |
| Brake       | Left Trigger  | axes[2]          |
| Boost       | Right Bumper  | buttons[5]       |
| Grip        | Left Bumper   | buttons[4]       |
| Reset       | Back          | buttons[6]       |
| Jump        | X             | buttons[2]       |

Because the HTML5 Gamepad API is inconsistent between different
browsers and operating systems and I made no attempt to make things
universally compatible, you may need to edit the JS yourself to get
things to work properly - you'll also need to do this if your
ingame control setup differs.

