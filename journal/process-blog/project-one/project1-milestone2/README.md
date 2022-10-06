# Project One

### Milestone Two

The code in this folder is a very rough idea of what I want this project to look like once I am finished. So far, I've gotten it set up to read the user's mouse input, and to have objects and words scroll off the page as they go. As they descend the color gets darker, and new labels pop up to tell them how deep they've gotten. 

I also have a class that will handle the movement and identification of the sea creatures. I'm currently just using circles for place-holders, but I have functionality set up that will flag them when they are clicked, so that I can display information based on which fish the user clicked on. The "fish" (circles) currently follow the users mouse when it is close enough, and move randomly when the mouse is farther away. The fish are confined to their own zones, so their linear velocity reverses when they hit the line below or above the layer of the ocean they can be found in, and they loop across the screen if their horizontal position is less than zero or greater than the screen width.

Although I have most of the skeleton done, I definitely still have a lot to do to reach all the goals I set in Milestone One. Since I have nearly all of the logic in place and working, the next steps are to fill it in with art and to add text when objects are clicked on. I'm still hoping I can reach some of my stretch goals, such as adding more complex animations and drawing the objects myself. I plan to have about twenty-five fish in total, though, so drawing them out may take too much time. 

Additionally, I'm adding another stretch goal to convert my code from global to instance mode. I would ideally do this before I make any more progress, since it would require going through what I've already done and making some changes. I read through the page linked below but I need to do some additional research on how OOP works in instance mode to see if it would be feasible. 

https://github.com/processing/p5.js/wiki/Global-and-instance-mode
