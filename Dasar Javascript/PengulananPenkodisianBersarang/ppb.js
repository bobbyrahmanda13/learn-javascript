// let s = '';
// for(let i =0; i<10;i++){
//     for (let j = 0; j <= i; j++) {
//         s+='*';
//     }
// s+='\n';

// }
// console.log(s);

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

let s = "";
for (let i = 10; i > 0; i--) {
  // i decrement
  for (
    let j = 0;
    j < i; //true j=0 kecil dari i=10
    j++
  ) {
    // j increement
    s = s + "*"; //cetak *
  }
  s += "\n";
}
console.log(s);

// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
