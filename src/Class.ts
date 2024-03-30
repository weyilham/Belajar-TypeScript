// export class User {
//   public name: string;

//   constructor(name: string, public age: number) {
//     this.name = name;
//   }
// }

// let user = new User("Ilham", 12);

// console.log(user);

export class Mobil {
  public name: string;
  public warna: string[];
  public tahun: number;

  constructor(name: string, warna: string[], tahun: number) {
    this.name = name;
    this.warna = warna;
    this.tahun = tahun;
  }
}

export class MobilSport extends Mobil {
  public isSport: boolean = true;
  public kecepatan: number = 100;
  private _harga: number = 0;

  turbo: boolean;

  constructor(name: string, warna: string[], tahun: number, turbo: boolean) {
    super(name, warna, tahun);
    this.turbo = turbo;
  }

  set harga(value: number) {
    if (value < 0) {
      console.log("Harga tidak boleh negatif");
    } else {
      this._harga = value;
    }
  }

  get harga(): number {
    return this._harga;
  }
}

const newMobil = new MobilSport("BMW", ["merah", "biru"], 2020, true);
newMobil.harga = 2000000000;

console.log(newMobil.harga);
