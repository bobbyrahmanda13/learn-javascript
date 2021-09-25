// *** Error Handling : Promise
// .then
// .catch

// * Contoh
// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 5000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("selesai");
//       }, waktu);
//     } else {
//       reject("kelamaan");
//     }
//   });
// }

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// *** Error Handling : Async Await
// try
// catch()

// * Contoh
// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 5000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("selesai");
//       }, waktu);
//     } else {
//       reject("kelamaan");
//     }
//   });
// }

// async function cobaAsync() {
//     try {
//       const coba = await cobaPromise();
//       console.log(coba);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   cobaAsync();
// * Jika code sudah di ubah menggunakan "async" and "await" maka kita untuk menghandle error nya yaitu menggunakan "try" and "catch()"
// * jika mempunyai sebuah "Promise" yang dibungkus dalam sebuah function yang mengembalikan "Promise" maka untuk menangkap "resolve" bisa gunakan "try" untuk menangkap "reject" bisa gunakan "catch()"
// * jika code sudah menggunakan fungsi "async" and "await" maka gunakan "try" untuk menangkap "resolve" pada "Promise" sedangkan untuk menangkap "reject" yaitu menggunakan "catch()"
