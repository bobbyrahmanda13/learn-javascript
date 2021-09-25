let s = "";
let pola = 10;
for (let i = 1; i <= pola; i++) {
  for (let j = 1; j <= i; j++) {
    s = s + "*";
  }
  s = s + "\n";
}
console.log(s);
// hasil
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
