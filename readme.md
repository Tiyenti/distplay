# distplay
![distplay](/img/distplay.png?raw=true)

A basic controller input display. Made this because I couldn't find any Linux controller input displays. I pretty much made this only for myself, so I made no attempt to make this universally compatible with every system ever. It works for me, but it may not work for you - the HTML5 Gamepad API is kind of inconsistent. It should technically "work" on any system, but it might not work *properly*.

This input was previously exclusively designed to work with Distance, but I decided to make it work for anything with an Xbox controller layout.

The Distance version is still available though.

![distplay-distance](/img/distplay-distance.png?raw=true)

## Using the display
Grab the latest release from [the releases page](https://github.com/TntMatthew/distplay/releases).

If you don't feel like downloading anything, there's also a web version available, which you can access by clicking
[this link](https://tntmatthew.github.io/distplay/distplay.html) (or [this one](https://tntmatthew.github.io/distplay/distplay-distance.html) for the Distance variation)

## Packing from source
In order to run it from source (required for Mac currently):
- Install [Node.js](https://nodejs.org/)
- Clone the repo by hitting the `Clone or download` button in the top right corner (and unzip it if you downloaded it as a zip)
- Within the terminal, browse to the folder you downloaded it to (in Windows, shift+right click in an empty area of the folder and click `Open PowerShell window here`)
- Type `npm install`
- Type `npm start` (if for some reason distplay appears with a white background at the wrong window size and doesn't work or crashes, run `npm install` again)

This *will*, however, start distplay in developer mode with a larger window and DevTools open. You will either need to edit the various \*.js files, look for `inDev`, and remove those checks, or you can do the following to build it yourself:
- In terminal, type `npm run pack:curr`

This will package the app as given in the releases, for your current platform. It will tell you where the new folder is located when it finishes packaging.

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
| Left Trigger     | buttons[6]      |
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

The Distance display is set up to reflect the default bindings for the game, albeit with a right stick.

Because the HTML5 Gamepad API is inconsistent between different browsers and operating systems and I made no attempt to make things universally compatible, you may need to edit the JS yourself to get things to work properly - you'll also need to do this if your in-game control setup differs.
