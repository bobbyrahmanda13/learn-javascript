// let dan const mengandung block scope dan function scope jadi jika di dalam kurung kerawal dia bisa di gunakan tapi jika di perkanalkan di dalam kurung kerawal dan mencoba memanggil nya di luar kurung kerawal maka itu tidak akan berfungsi
// sedangkan var itu tidak mengandung block scope melainkan global scope / window scope dan function scope

var i = 2;
// let genap = true;
if (i % 2 == 0) {
  var genap = true;
  //  let genap = true;
}
// if (genap) {
//   console.log("genap!");
// }
function test() {
  var g = true;
}
test();
console.log(genap);
console.log(g);

// * Didalam Function kita bisa mengakses variabel global (diluar function) sedangkan jika kita berada diluar function maka kita tidak bisa mengakses variabel yang ada di dalam function
// * di dalam function => bisa akses => variabel global
// * diluar function => tidak bisa akses => variabel di dalam function
// *  di dalam function => bisa akses => variabel di dalam function

// ? perumpamaannya
// jika kita mempunyai mobil yang ada kaca film gelap nah berarti orang luar tidak bisa melihat kita di dalam mobil
// tapi kita yang berada di dalam mobil bisa melihat orang yang ada di luar mobil
//* anggapannya
// orang luar => variabel global
// dan kita yang berada dalam mobil => variabel di dalam function

// ! istilah Name Conflict
// => dimana kita punya dua buah variabel yang namanya sama tapi scope / wilayahnya berbeda jadi ini tidak menimpa nilai seperti yang biasa kita coba
// => jadi misal punya variabel "a" yang berada di luar scope dan variabel "a" yang berada di dalam scope
// maka variabel "a" yang berada di dalam scope tidak akan menimpa variabel "a" yang ada di luar function ketika dipanggil
