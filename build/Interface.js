"use strict";
class Asus {
    constructor() {
        this.name = "Asus ROG";
        this.warna = ["Hitam", "Putih"];
    }
    on() {
        console.log("Laptop menyala");
    }
    off() {
        console.log("Laptop mati");
    }
}
let asus = new Asus();
console.log(asus.off());
