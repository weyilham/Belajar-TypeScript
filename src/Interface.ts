interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name = "Asus ROG";
  warna: string[] = ["Hitam", "Putih"];
  on(): void {
    console.log("Laptop menyala");
  }
  off(): void {
    console.log("Laptop mati");
  }
}

let asus = new Asus();

console.log(asus.off());
