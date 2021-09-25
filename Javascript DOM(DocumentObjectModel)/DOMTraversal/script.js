// ! Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// ! DOM Traversal
// const close = document.querySelectorAll(".close");

// Karena close adalah nodeList maka bisa gunakan pengulangan forEach
// for (let i = 0; i < close.length; i++) {
// * function yang di dalam nya ada parameter e / event maka e / event ini akan berisi event yang sedang terjadi/yang berisi informasi dari event yang terjadi
//   close[i].addEventListener("click", function (e) {
//     // alert("tombol ke-" + i); => hanya untuk test tombol index nya berapa

//     // * parentElement = menelusuri orang tua nya => DOM Traversal
//     // close[i].parentElement.style.display = "none";

//     e.target.parentElement.style.display = "none";
//   });
// }

// ! cara lainnya
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     // menghentikan aksi default pada sebuah element HTML / cegah Aksi defaultnya contoh element a href
//     e.preventDefault();
//     // untuk menghentikan Event Bubbling
//     e.stopPropagation();
//   });
// });

// ! Cara Lainnya juga

// close.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// });

// ! Event Bubbling

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// ! DOM Traversal Method
// * parentNode => node => belum tentu element html => hasil => node
// * parentElement => element html => hasil => element html
// * nextSibling => dia harus saudara kandung dari element yang dipilih => hasil => node=> saudara kandung setelahnya
// * nextElementSibling => hasil => element
// * previousSibling => hasil => node=> saudara kandung sebelumnya
// * previousElementSibling => hasil => element

// ! contoh
// const nama = document.querySelector(".nama");
// console.log(nama.parentNode);
// hasil => <div class="card"></div>
// console.log(nama.parentNode.parentNode);
// hasil => <div class="card"></div>
// console.log(nama.parentElement);
// hasil => <div class="card"></div>
// console.log(nama.parentElement.parentElement);
// hasil => <div class="container"></div>
// console.log(nama.nextSibling);
// hasil => \n => gunanya untuk enter code agar ke bawah
// console.log(nama.nextElementSibling);
// hasil => <span class="telp">081232423423</span>
// console.log(nama.previousSibling);
// hasil => \n => gunanya untuk enter code agar ke bawah
// console.log(nama.previousElementSibling);
// hasil => <img src="img/images.jpeg" width="96" height="96">

// Prevent Default => sebuah method yang ada di dalam object event +> Tujuannya adalah untuk aksi default yang dilakukan oleh sebuah element HTML

// Perbaikan
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  // untuk mencari tahu apa event / atau yang kita click
  // console.log(e.target);

  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
