// *** Async Await

// ** Asynchronous Function
// Definisi => Sebuah function yang bekerja secara asyncronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang syncronous(standard).
// link => developer mozilla
// hal yang bisa di pahami dari asyncronous function
// 1. fungsi yang berjalan secara asynchronous
// 2. menghasilkan (implisit) promise
// 3. cara penulisannya sama seperti synchronous function (function biasa)

// Definisi lainnya => sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai

// * Contoh dengan Promise biasa
// const coba = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

// * Contoh dengan Promise yang menggunakan function dan async
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// const coba = cobaPromise();
// console.log(coba); // promise pending
// coba.then(() => console.log(coba));

// ! untuk menggunakan async await kita membutuhkan function 1 lagi untuk memanggil function cobaPromise()
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}

cobaAsync();

// ! menggunakan "try" untuk menangkap "resolve" pada "Promise" sedangkan untuk menangkap "reject" yaitu menggunakan "catch()"
