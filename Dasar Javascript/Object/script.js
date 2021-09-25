// * membuat Object Literal Javascript
// let mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
//   ips: [3.67, 3.3, 3.7],
//   alamat: {
//     jalan: "Padang Lapuak No.123",
//     kota: "Padang",
//     provinsi: "Sumatera Barat",
//   },
// };
// hasil
// =======================================
// mhs.nama => "Bobby Rahmanda"
// mhs.umur => 24
// mhs.ips => [3.67, 3.3, 3.7]
// mhs.alamat => {
//     jalan: "Padang Lapuak No.123",
//     kota: "Padang",
//     provinsi: "Sumatera Barat",
//   }
// mhs.alamat.kota => "Padang"

// ! Membuat Object
// * Object Literal
// let mhs1 = {
//   nama: "Bobby Rahmanda",
//   nrp: 043040023,
//   email: "rahmanvisalux13@gmail.com",
//   jurusan: "Teknik Informatika",
// };
// let mhs2 = {
//   nama: "Ucok Zelnikaturas",
//   nrp: 043040000,
//   email: "ucokgantengbanget00@gmail.com",
//   jurusan: "Teknik Bahasa Minang",
// };

// * Function Declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// let mhs3 = buatObjectMahasiswa(
//   "Anjingan",
//   "0123124",
//   "anjingan@gmail.com",
//   "Teknik Cubit-Cubitan"
// );

// * Constructor => function yang khusus untuk membuat Object
// function Mahasiswa(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }
// let mhs4 = new Mahasiswa(
//   "Habib",
//   "0123124",
//   "habibterlaluganteng@gmail.com",
//   "Teknik Layangan"
// );

// ! Mengenal this pada Object
// * Cara 1 - Function Declaration
// function halo() {
//   consolog.log("halo");
// }
// halo();

// * Cara 2 - Object Literal
// let obj = {};
// obj.halo = function () {
//   console.log("halo");
// };
// obj.halo();

// * Cara 3 - Contructor
// function Halo() {
//   console.log("halo");
// }
// new Halo();

// ! Konsep this
// this => sebuah keyword spesial yang secara otomatis di definiskan pada setiap function/object
// console.log(this);
// hasilnya adalah Object Window(Object Global)
// console.log(window === this);
// let a = 10;
// console.log(a);

// ? noted => property adalah variabel yang ada didalam object
// ? noted => method adalah function yang ada didalam object

// * Cara 1 - function declaration - menerapkan this
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();
// this mengambalikan object Global

// * Cara 2 - Object Literal - menerapkan this
// let obj = { a: 10, nama: "Bobby Rahmanda" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();
// this mengembalikan object yang bersangkutan

// * Cara 3 - Contructor - menerapkan this
// function Halo() {
//   console.log(this);
//   console.log("halo");
// }
// let obj1 = new Halo();
// let obj2 = new Halo();
// this mengembalikan object yang baru dibuat
