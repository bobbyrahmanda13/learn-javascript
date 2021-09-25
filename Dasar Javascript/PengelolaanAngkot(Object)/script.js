// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Angkot Masih Kosong");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas = kas + bayar;
        return this.penumpang;
      }
    }
  };
}
let angkot1 = new Angkot("Bobby Rahmanda", ["Siteba", "Pasar Raya"], [], 0);
let angkot2 = new Angkot("Rahman", ["Kampung Kalawi", "Pasar Raya"], [], 0);
