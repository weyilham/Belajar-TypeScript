function getName(): string {
  return "Nama Saya Ilham";
}

function getUmur(): number {
  return 20;
}

function printName(): void {
  console.log("tidak mengembalikan nilai");
}

printName();

function multiplay(a: number, b: number): number {
  return a * b;
}

const result = multiplay(12, 2);

console.log(result);

type Tambah = (a: number, b: number) => number;

const Add: Tambah = (a: number, b: number): number => a + b;

console.log(Add(12, 2));

//default parameter

const fullName = (firstName: string, lastName: string = "Maulana"): string => {
  return firstName + " " + lastName;
};

console.log(fullName("Ilham", "Muhammad"));

//optional parameter

const create = (val1: string, val2?: string): string => {
  return val1 + val2;
  //  type number tidak bisa menggunakan fungsi optional
};

create("apa kabar");
