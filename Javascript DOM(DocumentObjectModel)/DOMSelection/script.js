// DOM Selection
// ======================================================
// Method -> Hasil
// getElementById() -> element
// getElementsByTagName() -> HTMLCollection
// getElementsByClassName() -> HTMLCollection
// querySelector() -> element
// querySelectorAll() -> nodeList
// ======================================================
// document.getElementById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Rahman";
// ======================================================
// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "lightblue";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// -------------------------------------------------------
// jika element nya hanya ada 1 pada file.html
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";
// ======================================================
// document.getElementsByClassName('') -> HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Ini Diubah dari Javascript";
// ======================================================
// document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// const p = document.querySelector("p");
// p.innerHTML = "Ini diubah Melalui Javascript";
// ======================================================
// document.querySelectorAll() -> NodeList
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// p[2].style.backgroundColor = "lightblue";

// Mengubah Node Root
// const p = document.getElementsByTagName("p");
// p[3].style.backgroundColor = "lightblue";

// const p = document.querySelectorAll("p");
// p[3].style.backgroundColor = "lightblue";

// const sectionB = document.getElementById("b");
// // const p4 = sectionB.getElementsByTagName("p");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "orange";

const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
