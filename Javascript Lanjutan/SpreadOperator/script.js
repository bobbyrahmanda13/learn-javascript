// todo => Spread Operator
// => Memecah (Expand / unpack) iterables menjadi single element.

// * Contoh
// const mhs = ["Bobby", "Rahman", "Riko"];
// console.log(...mhs); // Bobby Rahman Riko
// console.log(...mhs[0]); // B o b b y

// ** Menggabungkan 2 atau lebih Array
// const mhs = ["Bobby", "Rahman", "Riko"];
// const dosen = ["Ade", "Hendra", "Wanda"];
// const orang = [...mhs, ...dosen]; // hasilnya => menggabungkan Array "mhs" dengan Array "dosen"
// const orang = mhs.concat(dosen); // hasilnya => menggabungkan Array "mhs" dengan Array "dosen"

// const orang = [...mhs, "Aji", ...dosen];
// console.log(orang); // hasilnya => (7) ["Bobby","Rahman","Riko","Aji","Ade","Hendra","Wanda"]

// ** Meng-Copy Array
// const mhs = ["Bobby", "Rahman", "Riko"];
// // const mhs1 = mhs; // menggunakan ini artinya membuat referensi dari "mhs" karena "mhs1" hanya menggunakan variabel "mhs" saja jadi jika di ubah "mhs1" nya maka Arrary dari "mhs" juga berubah
// // mhs1[0] = "Fajar"; // contoh merubah "mhs1" index ke 0

// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";

// console.log(mhs); // (3) ["Bobby", "Rahman", "Riko"]
// console.log(mhs1); // (3) ["Fajar", "Rahman", "Riko"]

// * Contoh Manipulation DOM => Spread Operator
// const liMhs = document.querySelectorAll("li");

// * Cara Looping biasa
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// * Cara Looping menggunakan Higher Order Function (map)
// const mhs = [...liMhs].map((m) => m.textContent); // (3) ["Rahman", "Bobby", "Riko"]
// const mhs = [...liMhs]; // (2) [li,li,li]
// console.log(mhs);

// * Coba Contoh Kasus Transition Nama menggunakan Hover Perhuruf (DOM Manipulation) menggunakan Spread Operator

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
