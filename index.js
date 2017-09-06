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
    keyboard.wirte =
    keyboard.typeString = robotjs.typeString;
    keyboard.typeDelayed =
    keyboard.stringDelayed =
    keyboard.wirteDelayed =
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