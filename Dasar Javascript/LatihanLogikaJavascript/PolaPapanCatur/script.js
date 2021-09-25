let s = "";
let panjang = 10;
let lebar = 10;

for (let i = 1; i <= lebar; i++) {
  if (i % 2 === 0) {
    for (let j = 1; j <= panjang; j++) {
      if (j % 2 === 0) {
        s = s + "#";
      } else {
        s = s + " ";
      }
    }
  } else {
    for (let j = 1; j <= panjang; j++) {
      if (j % 2 === 0) {
        s = s + " ";
      } else {
        s = s + "#";
      }
    }
  }
  s = s + "\n";
}
console.log(s);
