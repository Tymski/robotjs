/*
*    I use RobotJS with regard to it's license:
*    RobotJS license:
*
*    Copyright (c) 2014 Jason Stallings
*
*    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
*    documentation files (the "Software"), to deal in the Software without restriction, including without limitation
*    the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
*    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*    The above copyright notice and this permission notice shall be included in all copies or substantial portions
*    of the Software.
*    
*    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
*    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
*    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
*    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
*    DEALINGS IN THE SOFTWARE.
*/

import robotjs from "robotjs";

var robot = robotjs;

// KEYBOARD {
    var keyboard = {};
    robot.keyboard = keyboard;
    keyboard.setDelay = robotjs.setKeyboardDelay; 
    keyboard.tap = 
    keyboard.keyTap = robotjs.keyTap;
    keyboard.toggle = 
    keyboard.toggleKey = robotjs.keyToggle;
    keyboard.type =
    keyboard.string =
    keyboard.send =
    keyboard.write =
    keyboard.typeString = robotjs.typeString;
    keyboard.typeDelayed =
    keyboard.stringDelayed =
    keyboard.writeDelayed =
    keyboard.typeString = robotjs.typeStringDelayed;
// }

// MOUSE {
    var mouse = {};
    robot.mouse = mouse;
    mouse.setDelay = robotjs.setMouseDelay;
    mouse.getPos =
    mouse.getPosition = robotjs.getMousePos;
    mouse.setPos =
    mouse.move =
    mouse.setPosition = robotjs.moveMouse;
    mouse.moveSmooth = robotjs.moveMouse;
    mouse.drag = robotjs.dragMouse;
    mouse.scroll = robotjs.scrollMouse;
    mouse.click = 
    mouse.tap = robotjs.mouseClick;
    Object.defineProperty(mouse, 'x', {
        get: function() { return this.getPos().x; },
        set: function(x){ this.setPos(x,this.y); }
    });
    Object.defineProperty(mouse, 'y', {
        get: function() { return this.getPos().y; },
        set: function(y){ this.setPos(this.x,y); }
    });
    Object.defineProperty(mouse, 'pos', {
        get: function() { return this.getPos(); },
        set: function({x,y}){ this.setPos(x,y); }
    });
    Object.defineProperty(mouse, 'position', {
        get: function() { return this.getPos(); },
        set: function({x,y}){ this.setPos(x,y); }
    });
    
// }

// SCREEN {
    var screen = robotjs.screen;
    robot.screen = screen;
    screen.getPixel =
    screen.getPix =
    screen.getColor = 
    screen.colorAt = 
    screen.getPixelColor = robotjs.getPixelColor;
    screen.getSize = robotjs.getScreenSize;
// }

export default robot;
export {keyboard,mouse,screen};