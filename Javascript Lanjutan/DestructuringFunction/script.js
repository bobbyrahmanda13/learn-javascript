// todo => Destructuring (function)

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }
// ** cara lama
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// ** Menggunakan Destructuring
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// * Contoh Lainnya
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// ! Urutan sangat berpengaruh pada Destructuring (Function), jadi nama variabel harus sesuai dengan urutan array

// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// * Cara agar Urutan tidak berpengaruh "return value" nya bisa diganti dengan Object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// ** Destructuring function arguments
const mhs1 = {
  nama: "Bobby Rahmanda",
  umur: 24,
  email: "bobbyrahmanda1996@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// * Cara Lain yang tidak menggunakan Destructuring
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

// * Menggunakan Destructuring Function
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
