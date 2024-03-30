"use strict";
// String
let nama = "Ilham";
nama = "Apa Kabar Gaes";
// Number
let umur = 20;
umur = 30;
// Boolean
let isMarried = true;
isMarried = false;
// any = tipe data apapun
let heroes = "Ilham";
heroes = 20;
heroes = true;
// Array
let array1;
array1 = [1, 2, 3];
let array2;
array2 = ["a", "b", "c"];
let array3;
array3 = ["a", 1, true];
// Tuple
let biodata;
biodata = ["Ilham", 20];
biodata = ["Joko", 30];
// Enums
//numberic Enums increment dari nilai index sebelumnya
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 4] = "April";
    Month[Month["May"] = 5] = "May";
    Month[Month["June"] = 6] = "June";
    Month[Month["July"] = 7] = "July";
    Month[Month["August"] = 8] = "August";
    Month[Month["September"] = 9] = "September";
    Month[Month["October"] = 10] = "October";
    Month[Month["November"] = 11] = "November";
    Month[Month["December"] = 12] = "December";
})(Month || (Month = {}));
//string Enums
var Month2;
(function (Month2) {
    Month2["January"] = "Januari";
    Month2["February"] = "Februari";
    Month2["March"] = "Maret";
    Month2["April"] = "April";
    Month2["May"] = "Mei";
    Month2["June"] = "Juni";
    Month2["July"] = "Juli";
    Month2["August"] = "Agustus";
    Month2["September"] = "September";
    Month2["October"] = "Oktober";
    Month2["November"] = "November";
    Month2["December"] = "Desember";
})(Month2 || (Month2 = {}));
console.log(Month2.December);
//union type satu variable bisa mempunyai lebih dari 1 type data
let phone;
phone = "08123456789";
phone = 628123456789;
