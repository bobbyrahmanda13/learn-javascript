// function tambah(a, b) {
//   // yang di dalam tambah yang pada fungsi function adalah parameter
//   return a + b;
// }

// cara pertama
// let hasil = tambah(2, 3);

// cara kedua di simpat ke dalam variabel
// let a = 10;
// let b = 20;
// yang di dalam kurung tambah adalah argument yang itu memanggil
// let hasil = tambah(a, b);

// cara ketiga yaitu bisa meminta user memasukkan nilainya
//! hasil yang menggunakan prompt hasil nya adalah tipe data string
// ! jadi gunakan fungsi paseInt jika menggunakan prompt untuk angka
// let a = parseInt(prompt("Masukkan Nilai 1 :"));
// let b = parseInt(prompt("Masukkan Nilai 2 :"));

// let hasil = tambah(a, b);

// ? bisa menggunakan operator matematika
// let hasil = tambah(a * 2, b * 2);

// ? bisa juga pada argument di isi dengan function lagi

// * membuat function tambahan yang akan di isi kan pada argument
// function kali(a, b) {
//   return a * b;
// }

// let hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);

// ? bagaimana jika parameter dan argument-nya tidak sesuai?
// == jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan
// * contoh
// function tambah(a, b) {
//   return a + b;
// }
// let coba = tambah(5, 10, 20); => angka 20 akan diabaikan

// == jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undenfined
// * contoh
// function tambah(a, b, c) { => nilai parameter c adalah undenfined karena tidak ada input dari argument
//   return a + b;
// }
// let coba = tambah(5, 10);

// ? istilah argument, parameter, dan arguments
// ? argument adalah nilai yang dikirimkan ke parameter saat fungsi di panggil
// ? parameter adalah variabel yang ditulis didalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil.
// * Perbedaan argument dengan arguments
// ? argument adalah sebuah istilah
// ? sedangkan "arguments" adalah variabel khusus
// * Definisi "arguments" adalah array yang berisi yang dikirimkan saat fungsi dipanggil
// * biasa disebut variabel semu / sudo variabel

// * contoh
function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil = hasil + arguments[i];
  }
  return hasil;
  //   return arguments;
}
let coba = tambah(1, 2, 3, 6);
console.log(coba);
