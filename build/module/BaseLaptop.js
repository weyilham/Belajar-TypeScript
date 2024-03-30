"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = require("./Keyboard");
class BaseLaptop {
    constructor(name, type, withNumberic, withTouchScreeen) {
        this.name = name;
        this.type = type;
        this.withNumberic = withNumberic;
        this.withTouchScreeen = withTouchScreeen;
    }
    a() {
        console.log((0, Keyboard_1.a)());
    }
    b() {
        console.log((0, Keyboard_1.b)());
    }
}
exports.default = BaseLaptop;
