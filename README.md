# RobotJS-wrapper

More natural Desktop Automation.

## What is this?

This is a simple wrapper around RobotJS (https://robotjs.io) that changes it's naming convention. 
You still can use robotjs naming though.

I provide mouse, keyboard and screen objects with their methods, for exaple:

```JavaScript
// RobotJS-wrapper
mouse.scroll(0,0);
mouse.click();

// RobotJS
robot.scrollMouse(0,0);
robot.mouseClick();
```

If you import robot (default) instead, you can use it as regular robotjs, or use the other convention:

```JavaScript
robot.mouse.click(); // wrapper style
robot.mouseClick(); // robotjs style
```

# Installation

Install using Node Package Manager:
```npm install robotjs-wrapper```

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

## Mouse

### Logging position of a mouse cursor

```JavaScript
import {mouse} from 'robotjs-wrapper';
console.log("Mouse X position:", mouse.x );
console.log("Mouse Y position:", mouse.y );
console.log("Mouse Position:", mouse.position );
```

### Changing only one mouse coordinate

```JavaScript
import {mouse} from 'robotjs-wrapper';
mouse.x = 123;
mouse.y = 456;
```

### Different ways to change mouse position

```JavaScript
mouse.setPos(x,y);
mouse.setPosition(x,y);
mouse.move(x,y);
mouse.pos = {x,y};
mouse.position = {x,y};
```

## Keyboard

### Different ways to type

```JavaScript
keyboard.string("I am typing!");
keyboard.type("I am typing!");
keyboard.write("I am typing!");
keyboard.send("I am typing!"); // AutoHotKey style
keyboard.typeString("I am typing!"); // RobotJS style
```
