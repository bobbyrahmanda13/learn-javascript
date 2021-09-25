// todo => Looping baru pada Javascript
// *** for...of
// *** for...in

// *** for...of
// => sebuah looping yang bisa mengulang atau menelusuri "Object-object yang bisa diubah (iterable)"

// ** Jenis Iterable Object
// * String
// * Array
// * Arguments / NodeList
// => Arguments adalah array untuk menampung Arguments-argument pada function
// => NodeList adalah ketika melakukan query pada DOM
// * TypedArray
// * Map
// * Set
// * User-defined Iterables

// *** for..of

// ** Array
// const mhs = ["Bobby", "Rahman", "Doddy"];

// * menggunakan for biasa
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// * menggunakan forEach
// mhs.forEach((m) => console.log(m));

// * menggunakan for of
// for (const m of mhs) {
//   console.log(m);
// }

// ** String

// ! Perulangan forEach tidak bisa digunakan pada "String" karena dia bukan array

// * Contoh
// const nama = "Bobby";
// for (const n of nama) {
//   console.log(n);
// }
// * result b,o,b(2),y

// * Contoh Lain
// const mhs = ["Bobby", "Rahman", "Doddy"];

// * forEach
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// * for of => secara default tidak mempunyai index
// * bisa di Akalin menggunakan "entries()" dan di "Destructuring"
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// ** NodeList => Melakukan query pada DOM
// const liNama = document.querySelectorAll(".nama");

// * forEach
// * hasilnya sama mau menggunakan textContent atau innerHTML
// liNama.forEach((n) => console.log(n.textContent));
// liNama.forEach((n) => console.log(n.innerHTML));

// * for of
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// ** Arguments => yang ada pada sebuah function

// function jumlahkanAngka() {
// //   console.log(arguments);
// // result => Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// // return arguments.reduce((a, i) => a + i); => tidak bekerja (notworking)
//   * coba menggunakan forEach
// //   let jumlah = 0;
// //   arguments.forEach((a) => (jumlah += a)); => tidak bekerja (not working)
//   * coba menggunakan for of
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5)); => bekerja (working)

// *** for...in
// => membuat loop hanya mengulangi lebih dari "enumerable"
// => enumerable maksudnya "property pada Object"

// * contoh
const mhs = {
  nama: "Bobby",
  umur: 24,
  email: "bobbyrahmanda1996@gmail.com",
};

// * coba menggunakan for of => tidak bekerja (not working)
// for (m of mhs) {
//   console.log(m);
// }

// * coba menggunakan for in
// for (m in mhs) {
//   console.log(m);
// }

// * result : nama, umur, email
for (m in mhs) {
  console.log(mhs[m]);
}
// * result : Bobby, 24, bobbyrahmanda1996@gmail.com

// todo => Kesimpulan
// * jika ingin mengulang / looping property dari object (enumerable) maka gunakan "for in"
// * jika ingin mengulang / looping atau mengolah isi array dan iterables object yang lainnya maka gunakan "for of"
