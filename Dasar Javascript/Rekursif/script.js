// function tampilAngka(n) {
//   // kondisi yang akan memberhentikan rekursif nya
//   // mulai dari if kurung terbuka hingga tertutup itu disebut dengan BASE CASE
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   return tampilAngka(n - 1);
// }
// tampilAngka(10);

// membuat faktorial dengan cara Code Rekursif
// function faktorial(n) {
//   if (n === 0) return 1;
//   return n * faktorial(n - 1);
// }
// let hasil = faktorial(5);
// console.log(hasil);

// membuat faktorial dengna cara Code looping
function faktorial(n) {
  let hasil = 1;
  for (let i = n; i > 0; i--) {
    hasil = hasil * i;
  }
  return hasil;
}
let hasil2 = faktorial(5);
console.log(hasil2);
