// * function declaration

// function tampilPesan(nama) {
//   alert(`halo ${nama}`);
// }
// tampilPesan("Bobby");

// * function expression

// let tampilPesan = function (nama) {
//   alert(`halo ${nama}`);
// };
// tampilPesan("Bobby");

// * Arrow Function
// * Definisi => bentuk lain yang lebih ringkas dari Function Expresstion

// let tampilPesan = (nama) => {
//   alert(`halo ${nama}`);
// };
// tampilPesan("Bobby");

// * functoin expression
// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama("Bobby"));

// * Arrow Function
// * 1 Parameter dan input 1 arguments
// const tampilNama = (nama) => {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama("Bobby Rahmanda"));

// * 2 Parameter dan input 2 arguments
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Ucok", "Siang"));

// * Implisit Return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log("Bobby Rahmanda");

// * tanpa Parameter
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// * contoh lain menggunakan Arror Function
// * Function map => untuk memetakan sebuah function kedalam array
// let mahasiswa = ["Sandhika Galih", "Ucok Hardiansyah", "Hardiansyah Riko"];

// * menggunakan function expression biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// * menggunakan Arrow Function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// * mengembalikan dalam bentuk object, jadi bukan array lagi
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.log(jumlahHuruf);
// * hasil => (3) [{…}, {…}, {…}]
// 0: {nama: "Sandhika Galih", jmlHuruf: 14}
// 1: {nama: "Ucok Hardiansyah", jmlHuruf: 16}
// 2: {nama: "Hardiansyah Riko", jmlHuruf: 16}
// length: 3

// console.table(jumlahHuruf);
// hasil =>
// (index)    nama        jmlHuruf
// 0	"Sandhika Galih"	14
// 1	"Ucok Hardiansyah"	16
// 2	"Hardiansyah Riko"	16

// * pada javascript baru sekarang jika ingin mengembalikan object yang propertinya sama dengan nilainya, maka tidak perlu tulis 2 2 nya hanya tulis 1 saja seperti dibawah ini:
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// pada function map()/peta => jika ingin memetakan sebuah function yang berisi object pada map
// biasanya jika me return object maka menggunakan kurung kerawal {} tapi function map() akan menganggap ingin melakukan return dan bukan membuat object
// supaya jadi object maka kurung kerawal tersebut harus di bungkus lagi dengan kurung biasa
// maka baru kurung kerawal {} akan dianggab sebagai object
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);
