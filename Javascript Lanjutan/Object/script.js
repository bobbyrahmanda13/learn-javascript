// Cara untuk membuat Object pada Javascript
// todo 1. Object Literal
// ! PROBLEM = Tidak efektif untuk object yang banyak\

// * Tanpa this
// let mahasiswa1 = {
//   nama: "Bobby",
//   energy: 10,
//   makan: function (porsi) {
//     mahasiswa1.energy = mahasiswa1.energy + porsi;
//     console.log(`Halo ${mahasiswa1.nama}, Selamat Makan !`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Ucok",
//   energy: 20,
//   makan: function (porsi) {
//     mahasiswa2.energy = mahasiswa2.energy + porsi;
//     console.log(`Halo ${mahasiswa2.nama}, Selamat Makan !`);
//   },
// };

// * Pakai this
// let mahasiswa1 = {
//   nama: "Bobby",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan !`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Ucok",
//   energy: 20,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan !`);
//   },
// };

// ====================================================================

// todo 2. Function Declaration

// * Tanpa this
// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = function (porsi) {
//     mahasiswa.energy += porsi;
//     console.log(`Halo ${mahasiswa.nama}, Selamat Makan`);
//   };
//   mahasiswa.main = function (jam) {
//     mahasiswa.energy -= jam;
//     console.log(`Halo ${mahasiswa.nama}, Selamat Bermain`);
//   };
//   return mahasiswa;
// }
// let bobby = Mahasiswa("Bobby", 10);
// let ucok = Mahasiswa("Ucok", 20);

// * Pakai this
// Cara menggunakan this, method => mempunyai function di dalam objek sedang kan jika tidak function maka itu disebut property

// ! Kurang Efektif = tetap melakukan duplikasi di dalam memory terhadap method yang ada pada function
// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain`);
//   };
//   return mahasiswa;
// }
// let bobby = Mahasiswa("Bobby", 10);
// let ucok = Mahasiswa("Ucok", 20);

// * Efektif Function Declaration
// ! tapi setiap objek yang di daftarkan pada objek yang berisi function2 maka harus di daftarkan juga pada function utama
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain`);
//   },
//   //  method baru
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur`);
//   },
// };

// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   // disini harus di tambahkan method nya
//   mahasiswa.tidur = methodMahasiswa.tidur;
//   return mahasiswa;
// }

// let bobby = Mahasiswa("Bobby", 10);
// let ucok = Mahasiswa("Ucok", 20);

// ==========================================================================

// todo 3. Constructor Function => menggunakan Keyword new

// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain`);
//   };
// }
// let bobby = new Mahasiswa("Bobby", 10);
// let ucok = new Mahasiswa("Ucok", 20);

// =========================================================================

// todo 4. Object.create
// ! problem nya kita jadi harus membuat 1 objek lagi yang mendukung objek utama dari segi memory memang lebih bagus dari pada dengan cara function declaration tapi cara itu menggunakan lebih banyak memory karena menciptakan method berulang2 setiap di deklarasikan

const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, Selamat Bermain`);
  },
  //  method baru
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`Halo ${this.nama}, Selamat Tidur`);
  },
};

function Mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;

  return mahasiswa;
}

let bobby = Mahasiswa("Bobby", 10);
let ucok = Mahasiswa("Ucok", 20);
