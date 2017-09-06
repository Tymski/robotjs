## This is not official RobotJS
For official robotjs go to (https://robotjs.io)

# What is this?
This is a simple wrapper around RobotJS that changes it's naming convention. 
You still can use robotjs naming though.

I provide mouse, keyboard and screen objects with their methods, for exaple:
instead of RobotJS's
```
robot.scrollMouse(0,0);
robot.mouseClick();
```
You can use:
```
robot.mouse.scroll(0,0);
robot.mouse.click();
```
or if you import {mouse}, you can use instead:
```
mouse.scroll(0,0);
mouse.click();
```


# Installation:
```npm install --save robotjs-wrapper```

# Usage
You can import keyboard only for example, no need to import everything.

```[lang=JavaScript]
import {keyboard} from 'robotjs-wrapper'
keyboard.type("I am typing!");
```

```[lang=JavaScript]
import robot from 'robotjs-wrapper'
robot.mouse.setPosition(0,0); 
// or robot.mouse.setPos(0,0);
// or robot.mouse.move(0,0);
// or old notation: robot.setMousePosition(0,0);
robot.mouse.click("right");
```

# RobotJS license:
I use RobotJS with regard to it's license:

Copyright (c) 2014 Jason Stallings

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# License to this wrapper (robotjs-wrapper)
Copyright (c) 2017 Tymon Oziemblewski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.