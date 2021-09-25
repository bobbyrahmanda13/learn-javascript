//perulangan
let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let p = prompt("Pilih: gajah, semut, orang");

  // menangkap pilihan computer

  // membangkitkan bilangan random
  //! fungsi Math.random => Mengeluarkan angka random di antara 0 dan 1
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  //? console.log(comp); => test hasil variable comp

  // menentukan rules
  let hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "MENANG!";
    // } else {
    //   hasil = "KALAH!";
    // }

    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "MENANG!" : "KALAH!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "Memasukkan Pilihan yang Salah";
  }

  //tampilkan hasilnya
  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih :  " +
      comp +
      "\n Maka hasilnya : Kamu " +
      hasil
  );
  tanya = confirm("Lagi?");
}
alert("Terima Kasih Sudah Bermain");
