// program tebak angka
alert("Tebak Angka dari 1 - 10 \n Kamu punya 3 kesempatan");

// looping untuk pengulangan apakah main lagi atau tidak
let tanya = true;
while (tanya) {
  //menggenerate bilangan random antara 1-10
  let computer = Math.floor(Math.random() * 10 + 1); // acak angka 0 - 10

  // ada 3 kesempatan
  let kesempatan = 3;
  while (kesempatan > 0) {
    // user input
    let player = prompt("Masukkan Angka Tebakan");

    let hasil;
    // jika benar
    if (player == computer) {
      alert("Kamu Benar \nAngka yang dicari adalah : " + computer);
      break;
    }
    //jika salah
    else if (player < computer) {
      hasil = "Terlalu Rendah";
    } else if (player > computer) {
      hasil = "Terlalu Tinggi";
    } else {
      hasil = "Angka yang dimasukkan Salah";
    }

    // kesempatan berkurang 1 setiap salah (Increement)
    kesempatan--;

    // jika kesempatan 0 output nya beda
    if (kesempatan == 0) {
      alert(
        hasil +
          "\nKesempatan kamu habis, Kamu Kalah \nAngka yang benar : " +
          computer
      );
    } else {
      alert(hasil + "\nKesempatan :" + kesempatan);
    }
  }

  tanya = confirm("Mau Main Lagi?");
}
alert("Terima Kasih Sudah Bermain");
