"use strict";
class Kendaraan {
    start() {
        console.log("Brummmmmm");
    }
}
class Motor extends Kendaraan {
    constructor() {
        super(...arguments);
        this.roda = 2;
    }
}
class Mobil extends Kendaraan {
    constructor() {
        super(...arguments);
        this.roda = 4;
    }
}
let motor = new Motor();
console.log(motor.roda);
motor.start();
let mobil = new Mobil();
console.log(mobil.roda);
mobil.start();
