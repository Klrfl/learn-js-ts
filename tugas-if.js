export function cekNilai(nilai) {
  let hasil;

  if (nilai >= 90) {
    hasil = "A";
  } else if (nilai >= 80) {
    hasil = "B";
  } else if (nilai >= 70) {
    hasil = "C";
  } else if (nilai >= 60) {
    hasil = "D";
  } else if (nilai <= 60) {
    hasil = "E";
  }
  return `Selamat anda mendapatkan nilai ${hasil}`;
}
