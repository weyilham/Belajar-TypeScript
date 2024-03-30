"use strict";
function getName() {
    return "Nama Saya Ilham";
}
function getUmur() {
    return 20;
}
function printName() {
    console.log("tidak mengembalikan nilai");
}
printName();
function multiplay(a, b) {
    return a * b;
}
const result = multiplay(12, 2);
console.log(result);
const Add = (a, b) => a + b;
console.log(Add(12, 2));
//default parameter
const fullName = (firstName, lastName = "Maulana") => {
    return firstName + " " + lastName;
};
console.log(fullName("Ilham", "Muhammad"));
//optional parameter
const create = (val1, val2) => {
    return val1 + val2;
    //  type number tidak bisa menggunakan fungsi optional
};
create("apa kabar");
