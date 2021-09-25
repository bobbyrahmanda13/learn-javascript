// refactoring => sebuah proses mengubah kode agar menjadi lebih "baik" tanpa mengubah fungsionalitasnya
// Teknik Refactoring
// ==================
// - readability => kemudahan dalam membaca kode program
// - DRY (don't repeat yourself) => duplikasi kode
// - testability => penulisan kode agar mudah dilakukan pengujian
// - performance => menulis kode untuk meningkatkan performance dari programnya
// - Maintainability => code dapat dengan mudah di kelola dan di maintanance

// * Contoh Kode
// # Before Refactoring
function jumlahVolumeDuaKubus(a, b) {
  let volumeA;
  let volumeB;
  let total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}
alert(jumlahVolumeDuaKubus(8, 3));

// # After Refactoring
function jumlahVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));
