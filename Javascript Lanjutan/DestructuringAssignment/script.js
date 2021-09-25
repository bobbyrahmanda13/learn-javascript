// todo => Destructuring Assignment
// # Description => MDN Mozilla => Expression pada javascript yang membuat kita dapat "membongkar" nilai dari "array" atau property dari "object" kedalam "variabel" yang terpisah

// * Contoh Sederhana => Array
// const coba = ["satu", "dua", "tiga"];
// const [a, b, c] = coba;
// console.log(a); // satu
// console.log(b); // dua
// console.log(c); // tiga

// * Contoh Sederhana => Object
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
//   email: "bobbyrahmanda1996@gmail.com",
// };
// const { nama, umur, email } = mhs;
// console.log(nama); // Bobby Rahmanda
// console.log(umur); // 24
// console.log(email); // bobbyrahmanda1996@gmail.com

// *** Destructuring Variable / Assignment

// ** Destructuring Array

// const perkenalan = ["Halo", "Nama", "saya", "Bobby Rahmanda"];
// * Cara Biasa
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);
// * Destructuring Array => Contoh
// const [salam, satu, dua, nama] = perkenalan;

// * Skipping Items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// ** Swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// ** Return value pada Function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// ** Rest Parameter ...
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// ** Destructuring Object
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
// };
// // const nama = mhs.nama;
// const { nama, umur } = mhs;
// console.log(nama);

// ** Assignment tanpa deklarasi Object
// ({ nama, umur } = { nama: "Bobby Rahmanda", umur: 24 });
// console.log(nama);

// ** Assign ke variabel baru => memberi nama baru / nama yang lain
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// ** Memberikan Default Value
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
//   email: "bobbyrahmanda1996@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// ** Memberi Nilai Default + Assign ke Variabel Baru
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
//   email: "bobbyrahmanda1996@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// ** Rest Parameter
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
//   email: "bobbyrahmanda1996@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// ** Mengambil Field pada Object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Bobby Rahmanda",
  umur: 24,
  email: "bobbyrahmanda1996@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs));
