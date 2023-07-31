# VKSL 2022 LHM Hud 

This is a hud used in Dota 2 during the VKSL 2022. You can use it with your LHM absolutely free. If you have some questions about functionality of this HUD, you can tag me in my social networks in profile.

## Setting up
Fork this repo, clone it, and then run `npm install` and `npm start`. HUD should start on the 3500 port. For this to work have HUD Manager opened so it will pass CS:GO data to the HUD.

## Identifying HUD
In `/public` directory edit hud.json so it fits you - fill HUD's name, author, version, specify the radar and killfeed functionalities. At the end replace the thumb.png with your icon :)

## Building & distributing
To build version to distribute and move around, in the root directory run `npm run pack`. It will create the zip file for distribution. Now you can just drag and drop this file into the HUD Managers upload area.


