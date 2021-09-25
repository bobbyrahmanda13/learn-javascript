let s = "";
let pola = 5;

for (let i = 1; i <= pola; i++) {
  for (let u = 1; u <= pola - i; u++) {
    s = s + "-";
  }
  for (let j = 1; j <= i + i - 1; j++) {
    s = s + "*";
  }

  s = s + "\n";
}
console.log(s);
