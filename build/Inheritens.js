"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IT = exports.Mahasiswa = void 0;
class Mahasiswa {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = value;
    }
    getAddress() {
        return this.address;
    }
    setAddress(value) {
        this.address = value;
    }
}
exports.Mahasiswa = Mahasiswa;
class IT extends Mahasiswa {
    constructor(name, age, address, phone) {
        super(name, age, address);
        this.jurusan = "Informatika";
        this.phone = phone;
    }
    setJurusan(value) {
        this.jurusan = value;
    }
}
exports.IT = IT;
const ilham = new IT("ilham", 20, "kota serang", "082123456789");
ilham.setJurusan("Sistem Informasi");
console.log(ilham.jurusan);
