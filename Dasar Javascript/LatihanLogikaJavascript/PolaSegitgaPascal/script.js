let s = "";
let pola = 5;
function factorial(n) {
  let a = 1;
  let i = 1;
  while (i <= n) {
    a = a * i;
    i++;
  }
  return a;
}
for (let i = 0; i < pola; i++) {
  for (let j = pola; j >= i; j--) {
    s += " ";
  }
  for (let j = 0; j <= i; j++) {
    s += factorial(i) / (factorial(j) * factorial(i - j)) + " ";
  }
  s += "\n";
}
console.log(s);
