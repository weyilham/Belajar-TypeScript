abstract class Kendaraan {
  abstract roda: number;

  start() {
    console.log("Brummmmmm");
  }
}

class Motor extends Kendaraan {
  roda: number = 2;
}

class Mobil extends Kendaraan {
  roda: number = 4;
}

let motor = new Motor();
console.log(motor.roda);
motor.start();

let mobil = new Mobil();
console.log(mobil.roda);
mobil.start();
