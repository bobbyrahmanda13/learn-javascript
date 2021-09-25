// Execution Context, Scope & Hoisting

// var nama = "bobby";
// console.log(nama);
// hasil => bobby

// console.log(nama);
// var nama = "bobby";
// hasil => undefined

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase => mengekseskusi bari code dari atas ke bawah

// console.log(sayHello());

// var nama = "bobby";
// var umur = 24;

// function sayHello() {
//   console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`);
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat  creation dan execution phase
// bisa akses window
// bisa akses arguments => bisa berisi apapun yang kita masukkan pada parameter function
// hoisting => local

// contoh Lainnya
// var nama = "Bobby Rahmanda";
// var username = "@rahmanrvbr";

// function cetakUrl(username) {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl(username));

// var nama = "Bobby Rahmanda";
// var username = "@rahmanrvbr";

// function cetakUrl(username) {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl("@bobbyrahmanda"));
// hasil => http://instagram.com/@bobbyrahmanda

// var nama = "Bobby Rahmanda";
// var username = "@rahmanrvbr";

// function cetakUrl() {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl("@bobbyrahmanda"));
// hasil => http://instagram.com/@rahmanrvbr

// var nama = "Bobby Rahmanda";
//// var username = "@rahmanrvbr";

// function cetakUrl() {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl("@bobbyrahmanda"));
// hasil => error username tidak ada dalam script.js

// var nama = "Bobby Rahmanda";
// var username = "@rahmanrvbr";

// function cetakUrl() {
//   console.log(arguments);
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakUrl("@bobbyrahmanda"));
// hasil => http://instagram.com/@rahmanrvbr, tapi arguments pada console.log("@bobbyrahmanda")
// tidak hilang tapi di simpan di dalam Object Arguments
// cara check nya buat console.log(arguments); didalam function nya

// scope itu adalah dia mencari di definisi variabel terdekat kalau tidak ada dia akan naik ke atas (Global)

// contoh hoisting local di dalam function ada function

// function a() {
//   console.log("ini A");
//   function b() {
//     console.log("ini B");
//     function c() {
//       console.log("ini C");
//     }
//     c();
//   }
//   b();
// }
// a();

// latihan
// function satu() {
//   var nama = "Sandhika";
//   console.log(nama);
// }
// function dua() {
//   console.log(nama);
// }
// console.log(nama);
// var nama = "Erik";
// satu();
// dua("Doddy");
// console.log(nama);
// hasil nya check alur execution phase nya di javascript virtualizer
