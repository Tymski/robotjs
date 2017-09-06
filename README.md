# What is this?
This is a simple wrapper around RobotJS (https://robotjs.io) that changes it's naming convention. 
You still can use robotjs naming though.

I provide mouse, keyboard and screen objects with their methods, for exaple:
```JavaScript
// RobotJS
robot.scrollMouse(0,0);
robot.mouseClick();

// VS.

// RobotJS-wrapper
robot.mouse.scroll(0,0);
robot.mouse.click();
```

If you import {mouse}, you can use shorter notation instead:
```JavaScript
mouse.scroll(0,0);
mouse.click();
```

# Installation:
```npm install --save robotjs-wrapper```

# Usage

```JavaScript
import {keybaord,mouse} from 'robotjs-wrapper';
mouse.move(300,300);
mouse.click();
keyboard.type("I am typing!");
```

Or:
```JavaScript
import robot from 'robotjs-wrapper';
robot.mouse.move(300,300);
robot.mouse.click();
robot.keyboard.type("I am typing!");
```
