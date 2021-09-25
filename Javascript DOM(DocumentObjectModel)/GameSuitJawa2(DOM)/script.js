function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}
// menentukan siapa Pemenang dari game
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

let menang = 0;
let kalah = 0;
let seri = 0;

const pilihan = document.querySelectorAll("li img");
// console.log(pilihan);
pilihan.forEach(function (pil) {
  //   console.log(pil);
  pil.addEventListener("click", function () {
    // console.log(pil);
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      // menambah fiture score
      const menangcoy = document.querySelector(".player-score");
      const kalahcoy = document.querySelector(".computer-score");
      const sericoy = document.querySelector(".seri-score");
      menangcoy.innerHTML = "Player = " + menang;
      kalahcoy.innerHTML = "Computer = " + kalah;
      sericoy.innerHTML = "Seri = " + seri;
    }, 1000);

    // rules score
    if (hasil == "MENANG!") {
      menang += 1;
    } else if (hasil == "SERI") {
      seri += 1;
    } else {
      kalah += 1;
    }

    //   console.log("comp :" + pilihanComputer);
    //   console.log("player :" + pilihanPlayer);
    //   console.log("hasil: " + hasil);
  });
});

// * Kurang Efektif
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   //   alert("ok");
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp :" + pilihanComputer);
//   //   console.log("player :" + pilihanPlayer);
//   //   console.log("hasil: " + hasil);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   //   alert("ok");
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp :" + pilihanComputer);
//   //   console.log("player :" + pilihanPlayer);
//   //   console.log("hasil: " + hasil);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   //   alert("ok");
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp :" + pilihanComputer);
//   //   console.log("player :" + pilihanPlayer);
//   //   console.log("hasil: " + hasil);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
