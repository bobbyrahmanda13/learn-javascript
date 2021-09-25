let s = "";
let pola = 5;

for (let i = 1; i <= pola; i++) {
  for (let u = 1; u <= i; u++) {
    s = s + " ";
  }

  for (let j = pola; j >= 2 * i - pola; j--) {
    s = s + "*";
  }
  s = s + "\n";
}
console.log(s);
