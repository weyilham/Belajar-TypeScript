"use strict";
// export class User {
//   public name: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilSport = exports.Mobil = void 0;
//   constructor(name: string, public age: number) {
//     this.name = name;
//   }
// }
// let user = new User("Ilham", 12);
// console.log(user);
class Mobil {
    constructor(name, warna, tahun) {
        this.name = name;
        this.warna = warna;
        this.tahun = tahun;
    }
}
exports.Mobil = Mobil;
class MobilSport extends Mobil {
    constructor(name, warna, tahun, turbo) {
        super(name, warna, tahun);
        this.isSport = true;
        this.kecepatan = 100;
        this._harga = 0;
        this.turbo = turbo;
    }
    set harga(value) {
        if (value < 0) {
            console.log("Harga tidak boleh negatif");
        }
        else {
            this._harga = value;
        }
    }
    get harga() {
        return this._harga;
    }
}
exports.MobilSport = MobilSport;
const newMobil = new MobilSport("BMW", ["merah", "biru"], 2020, true);
newMobil.harga = 2000000000;
console.log(newMobil.harga);
