// ## Contoh Higher Order Function
// 1. array.prototype.map();
// 2. array.prototype.filter();
// 3. array.prototype.reduce();

// ! noted : "map()" dan "forEach" itu mirip, dan beda nya kalau "forEach" tidak menghasilkan "array baru" tapi kalau "map()" menghasilkan "array baru". "reduce()" menggabungkan yang sudah di "map()" dan dia juga bisa menghasilkan "array baru"

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// todo => mencari angka >= 3
// * for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// * filter()
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);

// * dengan Arrow Function
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// * map
// * definisi map => petakan semua element pada array dengan sebuah fungsi yang baru
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// * reduce => mempunyai 2 parameter
// * parameter pertama biasa disebut accumulator (hasil dari prosesnya) dan parameter 2 disebut currentValue (element array yang sedang di looping)
// * definisi reduce => melakukan sesuatu terhadap seluruh element pada array nya
// jumlahkan seluruh element pada array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// * Contoh
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// 0 adalah nilai awal (default) (boleh ditulis) (boleh tidak ditulis)
// console.log(newAngka);

// * Method Chaining
// menggabungkan fungsi pada high order function dalam 1 kali eksekusi tanpa perlu disimpan dalam variabel
// contoh kasus
// Cari angka > 5, kalikan 3, jumlahkan
// const hasil = angka
//   .filter((a) => a > 5) // result 8,9,9
//   .map((a) => a * 3) //24, 27, 27
//   .reduce((acc, cur) => acc + cur); // 78
// console.log(hasil);
