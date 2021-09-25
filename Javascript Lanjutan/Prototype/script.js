// Prototype
// =========================================================

// * Versi Objek pake Prototype

function Mahasiswa(nama, energy) {
  //   let mahasiswa = Object.create(methodMahasiswa); => bisa di lakukan oleh prototype
  //   let mahasiswa = {}; => tidak efektif karena sudah ada this
  //   let this =Object.create(Mahasiswa.prototype); => yang terjadi di belakang layar (jadi tidak perlu di buat di coding)

  this.nama = nama;
  this.energy = energy;

  //   return mahasiswa; => karena menggunakan this maka ini tidak dibutuhkan
  //   return this; => yang terjadi di belakang layar (jadi tidak perlu di buat di coding)
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `Halo ${this.nama}, selamat makan! `;
};
Mahasiswa.prototype.main = function (jam) {
  this.energy -= jam;
  return `Halo ${this.nama}, selamat bermain! `;
};
Mahasiswa.prototype.tidur = function (jam) {
  this.energy += jam * 2;
  return `Halo ${this.nama}, selamat tidur! `;
};

let bobby = new Mahasiswa("Bobby", 10);
let ucok = new Mahasiswa("Ucok", 20);

// * Versi Objek pake Kelas/Class

// class Mahasiswa {
//   constructor(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
//   }
//   makan(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan! `;
//   }
//   main(jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama}, selamat bermain! `;
//   }
//   tidur(jam) {
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, selamat tidur! `;
//   }
// }

// let bobby = new Mahasiswa("Bobby", 10);
