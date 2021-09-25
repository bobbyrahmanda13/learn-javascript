// *** Callback
//  Definisi => "Function yang dikirimkan sebagai parameter pada function yang lain"
//  Definisi 2 => "Fucntion yang dieksekusi setelah fungsi lain selesai dijalankan"

// ** Synchronous Callback

// * Contoh
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama :  ");
//   callback(nama);
// }
// tampilkanPesan(halo);

// * Contoh => Arrow Function (anonymouse function)
// function halo(nama) {
//     alert(`Halo, ${nama}`);
//   }
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama :  ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// * Contoh
// ! anggap inputannya berupa json

// const mhs = [
//   {
//     nama: "Bobby Rahmanda",
//     nobp: "14101152630133",
//     email: "bobbyrahmanda1996@gmail.com",
//     jurusan: "Teknik Informatika",
//     idAlumni: 1,
//   },
//   {
//     nama: "Richo Hardiansyah",
//     nobp: "14101152630134",
//     email: "richohardiansyah@gmail.com",
//     jurusan: "Teknik Informatika",
//     idAlumni: 2,
//   },
//   {
//     nama: "Lidya Syafina Putri",
//     nobp: "14101152630135",
//     email: "lidyasyafinaputri@gmail.com",
//     jurusan: "Teknik Informatika",
//     idAlumni: 3,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// * Hasil :
// mulai
// Bobby Rahmanda
// Richo Hardiansyah
// Lidya Syafina Putri
// selesai

// ** Ascynchronous Callback
// * Contoh menggunakan AJAX => Vanilla Javascript (Javascript Murni)
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "data/mhs.json",
//   (results) => {
//     // console.log(results); // hasil masih dalam bentuk text jadi harus di parsing dulu untuk mengubah nya menjadi bentuk object, menggunakan JSON.parse(results)
//     // console.log(JSON.parse(results));
//     // * jika ingin menampilkan namanya saja tidak butuh semua yang ada di dalam object
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama)); // menggunakan arrow function
//   },
//   (er) => console.log("404 not found")
// );
// console.log("selesai");

// * Hasil :
// mulai
// selesai
// Bobby Rahmanda
// Richo Hardiansyah
// Lidya Syafina Putri

// ** JQUERY => memiliki AJAX jika CDN nya di ambil yang "minified atau uncompressed" dan sudah include (termasuk asynchronous)
// * Contoh

console.log("mulai");
$.ajax({
  url: "data/mhs.json",
  success: (mhs) => {
    mhs.forEach((m) => {
      console.log(m.nama);
    });
    // console.log(mhs);
  },
  error: (er) => console.log(er.responseText),
});
console.log("selesai");

// * Hasil :
// mulai
// selesai
// Bobby Rahmanda
// Richo Hardiansyah
// Lidya Syafina Putri
