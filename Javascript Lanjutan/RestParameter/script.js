// todo => Rest Parameter
// Definisi => Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// * Contoh
// # function myFunct(a, b, ...myArgs) { //! function yg memiliki variabel awal seperti a, b dan dilanjutkan rest parameter yaitu ...MyArgs
// # function myFunct(...myArgs) { //! function yang tidak memiliki variabel awal dan lansung menggunakan rest parameter untuk menangkap argument yang hasil nya akan menjadi "Array"
// #  return a; //! 1
// #  return b; //! 2
// #  return myArgs; //! (3) [3, 4, 5]
// #  return `a=${a}, b=${b}, myArgs=${myArgs}`; //! a=1, b=2, myArgs=3,4,5
// # return myArgs; //! (5) [1, 2, 3, 4, 5] => array
// # }
// # console.log(myFunct(1, 2, 3, 4, 5));

// ! Note : Rest Parameter ini hanya bisa digunakan diakhir dari argument-nya
// ! Note : Hasil dari Rest Parameter adalah Array jika inputannya adalah Array tapi jika inputannya adalah Object maka hasil nya adalah Object

// * Contoh Lain
// Jika tidak ingin menggunakan Rest Parameter
// # function myFunc() {
//   return arguments; //! Arguments(5) [1, 2, 3, 4, 5] => hasilnya bukan array melainkan Arguments itu sendiri
//   * Mengubah arguments itu sendiri menjadi array dengan cara :
//   return Array.from(arguments); //! (5) [1, 2, 3, 4, 5]
//   * Menggunakan Spread Operator
// #  return [...arguments]; //! (5) [1, 2, 3, 4, 5]
// #  }
// # console.log(myFunc(1, 2, 3, 4, 5));

// * Contoh lagi (kasus menjumlahkan seluruh parmeter yang dikirimkan)
// * Rest Parameter
// function jumlahkan(...angka) {

// * Menggunakan looping baru => for of
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total; //! 15

// * Menggunakan High Order Function
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// * Menggunakan Rest Parameter pada Saat melakukan array Destructuring
// ** Array Destructuring
// * Contoh
// const kelompok1 = ["Bobby", "Riko", "Rahman", "Risma", "Monyeet"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua); //! Bobby
// console.log(wakil); //! Riko
// console.log(anggota); //! (3) ["Rahman", "Risma", "Monyeet"] => Array

// ** Object Destructuring
// const team = {
//   pm: "Bobby",
//   frontEnd1: "Riko",
//   frontEnd2: "Risma",
//   backEnd: "Fajar",
//   ux: "Hendra",
//   devOps: "Ferry",
// };

// const { pm, ...myTeam } = team;
// console.log(pm); //! Bobby
// console.log(myTeam); //! {frontEnd1: "Riko", frontEnd2: "Risma", backEnd: "Fajar", ux: "Hendra", devOps: "Ferry"} => Object

// ** Filter
// * Melakukan Filtering pada Parameter yang ada
// * Contoh
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("number", 1, 2, "Bobby", false, 10, true, "Riko")); //! (3) [1, 2, 10]
console.log(filterBy("string", 1, 2, "Bobby", false, 10, true, "Riko")); //! (2) ["Bobby", "Riko"]
console.log(filterBy("boolean", 1, 2, "Bobby", false, 10, true, "Riko")); //! (2) [false, true]
