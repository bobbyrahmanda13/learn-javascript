// todo lexical scope
// function init() {
//// local variabel
// let nama = "Bobby";
// let umur = 24;
////   inner function (closure*)
//// Closure => inner function membutuhkan variabel yang ada pada parent scope nya maka inner function disebut dengan closure
// function tampilNama() {
////   akses ke parent(orangtua) variabel
//   console.log(nama);
//   console.log(umur);
// }
// console.log(tampilNama());
// * hasil => Bobby dan undefined
// console.log(tampilNama);

// * hasil => ƒ tampilNama() {
////   akses ke parent(orangtua) variabel
//   console.log(nama);
// }

// console.dir(tampilNama);
// * hasil => f tampilNama() => hanya menampilkan objek nya saja
// }
// init();

// ! Bentuk Lain yang memungkinkan untuk bisa melakukan function factory
// function init() {
//   let nama = "Bobby";
//   function tampilNama() {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama();

// ! Contoh lain nyang memungkinkan bisa melakukan function Factory

// function init() {
//   // let nama = "Bobby";
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Bobby");

// ! Mempersingkat Code Diatas dengan anonymous function
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Bobby");
// panggilNama("Rahmanda");

// todo Alasan Menggunakan Closure
// * untuk membuat function Factories
// * untuk membuat private method

// * 1. Untuk membuat Function Factories
// => Function Factories => membuat function sesuai dengan function yang lainnya
// Contoh :
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");
// selamatPagi("Bobby");
// selamatSiang("Rahman");
// ! untuk check nya gunakan dibawah ini:
// console.dir(selamatPagi);
// ket console.dir(selamatPagi); => inner function sudah jalan setengahnya karena function ucapkanSalam sudah di simpan pada variabel selamatPagi dan argument "waktu" yaitu "Pagi" sudah tersimpan pada Closure, jadi tinggal tunggu data dari nama nya
// console.dir(selamatPagi("Bobby"));

// * 2. Untuk membuat private method / private variabel
// Contoh pake closure:

// // let counter = 0; => dipindah kan ke dalam function agar menjadi private dan tidak global (tidak terpengaruh jika variabel nya di tumpuk)
// let add = function () {
//   let counter = 0;
//   // console.log(++counter);
//   return function () {
//     return ++counter;
//   };
// };
// // add();
// // counter = 100; => hasil => tetap dimulai dari 0 dan variabel ini tidak membuatnya terpengaruh
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());

// "cara yang lebih baik" menggunakan "immedietly invoke function" agar variabel "let a = add()" posisi nya lebih baik
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
//! (); pada akhir function itu untuk menjalankan inner function yakni return function() { return ++counter;}
counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
