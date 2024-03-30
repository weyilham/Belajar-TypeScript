"use strict";
// Generic Function
function myData(data) {
    return data;
}
// console.log(myData("Ilham Maulana").length);
// console.log(myData(123));
// Generic Class
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let number = new List(1, 2, 3, 4);
number.add(5);
number.addMultiple(6, 7, 8, 9);
console.log(number.getAll());
