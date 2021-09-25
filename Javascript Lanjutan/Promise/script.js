// * Contoh menggunakan jquery yang didalamnya memiliki ajax

// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=85d4554&s=avengers",
//   success: (movies) => console.log(movies),
// });

// * Contoh menggunakan Ajax yang ada pada Javascript Murni (vanilla Javascript)

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyStat === 4) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.log(xhr.responseText);
//     }
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=85d4554&s=avengers");
// xhr.send();

// * Contoh Ajax pada javscript murni mengggunakan "fetch"

// fetch("http://www.omdbapi.com/?apikey=85d4554&s=avengers")
//   .then((response) => response.json())
// * Method Json Mengembalikan "Promise"
//   .then((response) => console.log(response));

// *** Promise (Janji)
// Definisi => Object yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asyncrounous di masa yang akan datang
// * janji (terpenuhi / ingkar)
// * states (fulfilled / rejected / pending)
// fullfilled => keadaan yang terpenuhi
// rejected => keadaan yang diingkari / tidak terpenuhi
// pending => waktu tunggu sebelum janji nya terpenuhi / atau tidak terpenuhi
// ** untuk menjalankan keadaan ini ada 3 fungsi callback
// * callback (resolve / reject / finally)
// resolve => akan dibuat ketika janji/promise nya terpenuhi
// reject => akan dibuat ketika janji/promise nya tidak terpenuhi
// finally => akan dibuat ketika waktu tunggu nya selesai janjinya terpenuhi ataupun tidak terpenuhi
// * aksi (then / catch )
// then => resolve
// catch => reject

// * Contoh Promise 1
// ! note : karena dia "object" maka bisa bikin keyword "new" => untuk membuat object, tapi untuk object khusus yaitu "Promise"

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
// ! note "resolve" bisa apa aja seperti request ke API, bisa menjalankan sebuah proses yang complex
//   } else {
//     reject("Ingkar Janji");
//   }
// });

// janji1
//* resolve ditangkap oleh "then"
//   .then((response) => console.log(`OK! : ${response}`))
// *  reject ditangkap oleh "catch"
//   .catch((response) => console.log(`NOT OK : ${response}`));

// * Contoh penggunaan Promise 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak Ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });
// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   // * Method "finally" dijalankan ketika salah satu dari "then" atau "catch" sudah siap untuk dijalankan
//   // ! "finally" ini biasanya digunakan kalau ingin menambah animasi loading, jadi pada saat mulai jalan "promise" nya animasi loading nya jalan
//   .finally(() => console.log("Selesai Menunggu"))
//   // * resolve ditangkap oleh "then"
//   .then((response) => console.log(`OK! : ${response}`))
//   // *  reject ditangkap oleh "catch"
//   .catch((response) => console.log(`NOT OK : ${response}`));
// console.log("selesai");

// ** Method Promise.all
// ini untuk menjalankan ketika mempunyai banyak "promise" yang ingin dijalankan sekaligus

const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Richo Hardiansyah",
        pameran: "Riko, Risma",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Padang",
        temperature: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// * Cara jalankan "promise" satu-satu
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// * Cara jalankan sekaligus
Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
