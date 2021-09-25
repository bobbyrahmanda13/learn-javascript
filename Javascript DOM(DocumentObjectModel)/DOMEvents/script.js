// cara Event Handler
// P3 menggunakan Inline HMTL Attribute
// const p3 = document.querySelector(".p3");

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "black";
//   p3.style.color = "white";
// }
// // P2 menggunakan Element Method
// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }
// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

// P4 Menggunakan fungsi addEventListener()
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   //   alert("ok"); => untuk test aja apakah click nya jalan / tidak

//   //   Ambil Parent (orang tua element)
//   const ul = document.querySelector("section#b ul");
//   //   bikin element Baru
//   const liBaru = document.createElement("li");
//   const textLiBaru = document.createTextNode("Item Baru");
//   //   kita rangkai
//   liBaru.appendChild(textLiBaru);
//   //   simpan di akhir element li di dalam parent(ul)
//   ul.appendChild(liBaru);
// });

// ! Note Perbedaan Event Handler dan addEventListener()
// * => menggunakan Event Handler (cara lama) bisa juga dilakukan oleh addEventListener()
// * => ketika memberikan lebih dari 1 perubahan pada sebuah event, jika menggunakan Event Handler maka hal yang terakhir dilakukan akan menimpa perubahan sebelumnya
// * => sedangkan menggunakan addEventListener() dia akan menambah Perubahannya

// ! Contoh Perbedaan Event Handler dan addEventListener()
// Event Handler
// const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };
// hasil => tulisannya merah yang dijalankan p3.onclick ke 2
const p3 = document.querySelector(".p3");
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});
