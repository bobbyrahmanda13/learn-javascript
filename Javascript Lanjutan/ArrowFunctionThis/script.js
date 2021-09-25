// * Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Bobby";
//   this.umur = 33;
//   // console.log(this);
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const bobby = new Mahasiswa();

// * Arrow Function
// * menggunakan Arrow Function tidak bisa begitu saja untuk mengubah semua Function menjadi Arrow Function
// * jadi tidak bisa kalau ingin membuat constructor function menggunakan Arrow Function
// * tapi jika mengubah nya pada method bisa (sebuah function yang ada di dalam sebuah function ataupun object)

// const Mahasiswa = function () {
//   this.nama = "Bobby";
//   this.umur = 24;
//   // console.log(this);

//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// ! menggunakan Arrow Function atau pun Function Expression fungsi nya sama tapi sebetulnya pada saat menggunakan Arrow Function sebetulnya tidak menyimpan context this jadi tidak ada konsep this di dalam Arrow Function dia akan cari keluar
// const bobby = new Mahasiswa();

// * Object Literal
// const mhs1 = {
//   nama: "Bobby",
//   umur: 24,
//   sayHello: () => {
// console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// hasil => Halo, nama saya undefined, dan saya undefined tahun

// test dengan console.log(this);
// console.log(this);
// hasil => window
//   },
// };
// ! Arrow Function tidak konsep this

//* Contoh lainnya

// const Mahasiswa = function () {
//   this.nama = "Bobby";
//   this.umur = 24;
//   // console.log(this);
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   setInterval(function () {
//     console.log(this.umur++);
// * hasil NaN
// console.log(this);
// * window
// console.log(this.umur);
// * undefined
//   }, 500);

// * Jadi untuk mengatasi nya tidak menggunakan function declaration atapun function expression tapi menggunakan "Arrow Function"

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);

// ! function expression itu disimpan dulu kedalam variabel jadi isi dalam function tersebut tidak akan terkena hoisting
// ! tapi jika menggunakan function declaration maka itu akan terkena hoisting, jadi pada sat "this" dipanggil maka dia tidak akan mengecek this yang ada di local function tapi akan lansung mengecek di global/luar function

//  * NaN => Not a Number => Bukan Angka

// };

// const bobby = new Mahasiswa();

// * contoh Real penggunaan "Arrow Function"
// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let that = this;
//   //   console.log(this);
//   // * hasil <div class="box"></div>
//   this.classList.toggle("size");
//   setTimeout(function () {
//     // this.classList.toggle("caption");
//     // console.log(this);
//     // * hasil => window
//     console.log(that);
//     //! jika tetap ingin menggunakan function expression dan setTimeout dan juga this dalam keadaan hoisting maka bisa membuat variabel dulu yang berisi this
//   }, 600);
// });

// * jika menggunakan "Arrow Function"
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  //   let that = this; => tidak di perlukan karena setTimeout function nya menggunakan arrow function yang konsep this tidak ada di dalam nya sehingga dia bisa mencari keluar function
  //   console.log(this);
  // * hasil <div class="box"></div>

  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
    // console.log(this);
    // * hasil => <div class="box size"></div>
  }, 600);
});
// * sudah berjalan dengan benar tapi ada "masalah" dibagian urutan jika di click
// * jadi diakalin dengan logika if dan penambahan variabel
