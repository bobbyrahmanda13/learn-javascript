// todo => template literal / template string
// definisi => string literal yang memungkinkan adanya expression didalamnya => MDN Web Docs
// * contoh "string literal"
// let nama = "Bobby";
// let nrp = "14130113203";
// let email = `rahmanrvbr1996@gmail.com`;

// todo => Template Literal :
// * Menggunakan `` backtick
// * Multi-line String
// * Embedded Expression
// * HTML Fragments
// * Expression Interpolation
// * Tagged Template

// todo => Contoh Penggunaan Template Literal
// `string text`;
// ==============
// * Multi-line string
// `string text baris 1
// string text baris 2
// string text baris 3`;
// * embedded expression
// `string text ${expression} string text`;
// * tagged template literal
// tag`string text ${expression} string text`;

// * Contoh Multi-line string
// console.log("string 1 \nstring 2");
// menggunakan backtick
// console.log(`string 1
// string 2`);
// * hasil
// string 1
// string 2

// * Multi-line String (HTML Fragment) (1)
// * Contoh
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 24,
//   nrp: 1371101309950002,
//   email: "bobbyrahmanda@gmail.com",
// };

// * cara lama untuk menampilkan
// let el = "";
// el += '<div class="mhs">';
// el += "<h2>" + mhs.nama + "</h2>";
// el += '<span class="nrp">' + mhs.nrp + "</span>";
// el += "<div>";
// console.log(el);

// * Multi-line String (HTML Fragment) (2)
// * menggunakan backtick => cara terbaru
// let elu = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(elu);

// * Embedded Expression
// const nama = "Bobby Rahmanda";
// let umur = 24;
// console.log(`Halo, Perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

// console.log(`${alert("halo!")}`);
// console.log(`${1 + 1}`);

// * Contoh Lainnya Embedded Expression
// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// * Expression Interpolation (1)
// let a = 10;
// let b = 15;
// console.log(
//   "Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : " +
//     (a + b) +
//     ", bukan" +
//     (2 * a + b)
// );

// * Expression Interpolation (2)
// let a = 10;
// let b = 15;
// console.log(
//   `Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${
//     2 * a + b
//   }`
// );
