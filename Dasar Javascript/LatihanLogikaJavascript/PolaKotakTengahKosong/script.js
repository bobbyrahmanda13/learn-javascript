let s = "";
let panjang = 10;
let lebar = 5;

for (let i = 1; i <= lebar; i++) {
  if (i === 1 || i === lebar) {
    for (let j = 1; j <= panjang; j++) {
      s = s + "#";
    }
  } else {
    for (let u = 1; u <= panjang; u++) {
      if (u === 1 || u === panjang) {
        s = s + "#";
      } else {
        s = s + " ";
      }
    }
  }
  s += "\n";
}

console.log(s);
