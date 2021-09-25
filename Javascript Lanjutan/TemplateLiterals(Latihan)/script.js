// Template Literals
// * 1. HTML Fragments

// * Contoh 1
// const mhs = {
//   nama: "Bobby Rahmanda",
//   umur: 22,
//   nik: 1234234093534,
//   email: "bobbyrahmanda1996@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nik}</span>
// </div>`;

// * Contoh 2 => Looping
// const mhs = [
//   {
//     nama: "Bobby Rahmanda",
//     email: "bobbyrahmanda1996@gmail.com",
//   },
//   {
//     nama: "Ucok Taik",
//     email: "ucok996@gmail.com",
//   },
//   {
//     nama: "Tsukuyomi Asaka",
//     email: "tsukuyomiasaka@gmail.com",
//   },
// ];

// const el = `
// <div class="mhs">
// ${mhs.map((m) => `<ul><li>${m.nama}</li><li>${m.email}</li></ul>`).join("")}
// </div>`;

// * Contoh 3 => Conditionals
// * Ternary Operator
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Isyana Saraswati",
//   feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// * Contoh 4 => Nested
// HTML Fragment Bersarang
const mhs = {
  nama: "Bobby Rahmanda",
  semester: 6,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Object",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
