// todo Hoisting => mengangkat
// * contoh :
// jika menggunakan code ini:
// console.log(i);
// var i = 10;
// * hasil => undefined
// maka yang dilakukan di belakang layar / javascript dalam browser
// var i;
// console.log(i);
// i = 10;
//  hasil => undefined
// ! jika menggunakan var itu tidak akan di deteksi sebagai error hanya mengeluarkan undefined tapi jika menggunakan let atau const maka itu akan di anggap sebagai error sama hal nya dengan bahasa pemrograman lainnya

// * contoh let :
// console.log(i);
// let i = 10;
// * hasil => error

// // pengulangan menggunakan var:
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   // hasil => 1,2,3,4,5,6,7,8,9
// }
// console.log(i);
// // hasil => 1,2,3,4,5,6,7,8,9,10

// * function scope
// function test() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//     // hasil => 1,2,3,4,5,6,7,8,9
//   }
// }
// test();
// console.log(i);
// * hasil => 1,2,3,4,5,6,7,8,9,10

// ! pada javascript memungkinkan untuk mengakses variabel yang ada didalam looping kalau dibahasa pemrograman lain itu akan error / tidak bisa karena menganut block scope(lingkup pada block program(jika kita bertemu dengan kurung kerawal({})))

// * IIFE => Immediately Invoked Function Expression => sebuah function expression yang dipanggil lansung ketika dibuat
// * SIAF => Self Invoking Anonymous Function => menjaga agar variabel yang ada di dalam function tidak bisa di akses dari luar

// * ini adalah IIFE atau SIAF
// (function () {

// })();

// * Anonymous Function => fungsi tidak bernama => menggunakan function expression

// * code ini cara lama untuk menggunakan function scope dengan menggunakan variabel var

// * contoh :

// * function expression :
// var x = function () {};

// * function tanpa perlu disimpan di dalam variabel :
// ! () => untuk menjalankan function
// (function () {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);
// * hasil => 1,2,3,4,5,6,7,8,9,error

// contoh let:
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// * hasil => 1,2,3,4,5,6,7,8,9,error

// ! saat ini javascript ES6 untuk variabel di anjurkan menggunakan "let, const" karena mengandung block scope
// ! Jadi tidak perlu lagi menggunakan var dengan di akalin menggunakan function scope IIFE atau SIAF

// ! jika kita yakin jika nilai tidak berubah maka jangan gunakan "let" tapi gunakan "const" karena jika variabel "const" diterapkan maka jika kita merubah variabel tersebut akan tampil error

// * contoh singkat:
// const i = 10;
// i = 15;
// * hasil => error

// ! menggunakan "const" dapat meminimalisir perubahan state, tapi "const" masih bisa mengubah isi dari "const / constanta" asal tidak mengganti semuanya, tapi jika mengganti semuanya maka itu akan error
// * contoh :
// const mhs = {
//   nama: "Bobby",
//   umur: 24,
// };
// console.log(mhs);
// * hasil => {nama: "Bobby", umur: 24}

// * jika di ubah umurnya
// const mhs = {
//   nama: "Bobby",
//   umur: 22,
// };
// mhs.umur = 25;
// console.log(mhs);
// * hasil => {nama: "Bobby", umur: 25}

// * jika diganti dengan object baru
// const mhs = {
//   nama: "Bobby",
//   umur: 22,
// };
// mhs = {
//   jurusan: "Teknik Informatika",
// };
// console.log(mhs);
// * hasil => error

// * jika menggunakan array
// const i = [1, 2, 3];
// i = [1, 2, 3, 4, 5];
// console.log(i);
// * hasil => error

// * jika hanya menambahkan isi kedalam array nya maka itu bisa bekerja
// const i = [1, 2, 3];
// i.push(4);
// console.log(i);
// * hasil => [1, 2, 3, 4]

// * ask orang lain => gunakan let hanya saat bikin for saja
// * contoh :
// for (let i = 0; i < 10; i++) {} => karena jika menggunakan const maka itu akan error
