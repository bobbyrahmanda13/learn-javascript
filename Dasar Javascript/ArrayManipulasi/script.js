// ? Manipulasi Array dengan cara yang Manual

// * 1. Menambah Isi Array

// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// ! index pada array tidak boleh melampui angka yang sebelumnya karena itu akan terhitung "undefined"
// arr[6] = "Doddy";

// console.log(arr);

// * 2. Menghapus Isi Array

// var arr = ["Sandhika", "Galih", "Nofa"];
// arr[1] = undefined;

// console.log(arr);

// * 3. Menampilkan Isi Array
// var arr = ["Sandhika", "Galih", "Nofa", "Anjing"];

// for (let i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + ":" + arr[i]);
// }

// ? Method pada Array

// var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];

//* 1. Join
// console.log(arr.join());
// Sandhika,Galih,Nofa  ==> Hasil

//* 2. Push(tambah element terakhir sebuah array) & Pop(hapus element terakhir sebuah array)
// arr.push("Anjing","Taik"); bisa di tambah
// arr.pop(); hanya bisa 1, jika ingin menghapus lagi maka harus bikin lagi arr.pop() nya

//* 3. unshift & shift (Mirip dengan Push & Pop tapi dia Bekerja Pada element Pertama)
// arr.unshift("Doddy");
// arr.shift();
// console.log(arr.join());

//* 4. Splice
// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, .....)
// arr.splice(1, 2, "Doddy", "Fitri");

//* 5. Slice => Mengiris Sebuah Array menjadi Array yang Baru
// slice(indexAwal, akhir-1)
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
// var arr2 = arr.slice(1, 3);
// console.log(arr.join(" - "));
// Hasil => Sandhika - Galih - Nofa - Fitri
// console.log(arr2.join(" - "));
// Hasil => Galih - Nofa

//* 6. foreach => tidak mengembalikan array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// let nama = ["Sandhika", "Galih", "Nofa"];

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });
// ket e => element
// ket i => index

//* 7. map => Mengembalikan array
// let angka = [1, 2, 5, 3, 6, 8, 4];
// angka.map(function (e) {
//   console.log(e);
// });
//? Jika disimpan di dalam Variabel
// let angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

//* 8. sort => untuk mengurutkan Isi Array
// => Mengurutkan karakter pertama dulu
// let angka = [1, 2, 5, 3, 6, 10, 20, 8, 4];
// console.log(angka.join(" - "));
// angka.sort();
// jika ingin mengurutkan nya benar harus di buat function perbandingan angka
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//* 9. filter => Mengembalikan Banyak nilai
// => Termasuk Pencarian Pada Array
// let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// let angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2);
//* 10. find => Mengembalikan 1 nilai (tidak menghasilkan array)
let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
let angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
