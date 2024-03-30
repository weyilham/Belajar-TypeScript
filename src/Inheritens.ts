export class Mahasiswa {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getAge(): number {
    return this.age;
  }

  setAge(value: number): void {
    this.age = value;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(value: string): void {
    this.address = value;
  }
}

export class IT extends Mahasiswa {
  public jurusan: string = "Informatika";
  phone: string;

  constructor(name: string, age: number, address: string, phone: string) {
    super(name, age, address);
    this.phone = phone;
  }

  setJurusan(value: string): void {
    this.jurusan = value;
  }
}

const ilham = new IT("ilham", 20, "kota serang", "082123456789");
ilham.setJurusan("Sistem Informasi");
console.log(ilham.jurusan);
