// String

let nama: string = "Ilham";
nama = "Apa Kabar Gaes";

// Number
let umur: number = 20;
umur = 30;

// Boolean
let isMarried: boolean = true;
isMarried = false;

// any = tipe data apapun
let heroes: any = "Ilham";
heroes = 20;
heroes = true;

// Array
let array1: number[];
array1 = [1, 2, 3];

let array2: string[];
array2 = ["a", "b", "c"];

let array3: any[];
array3 = ["a", 1, true];

// Tuple
let biodata: [string, number];
biodata = ["Ilham", 20];
biodata = ["Joko", 30];

// Enums

//numberic Enums increment dari nilai index sebelumnya
enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

//string Enums
enum Month2 {
  January = "Januari",
  February = "Februari",
  March = "Maret",
  April = "April",
  May = "Mei",
  June = "Juni",
  July = "Juli",
  August = "Agustus",
  September = "September",
  October = "Oktober",
  November = "November",
  December = "Desember",
}

console.log(Month2.December);

//union type satu variable bisa mempunyai lebih dari 1 type data

let phone: string | number;
phone = "08123456789";
phone = 628123456789;
