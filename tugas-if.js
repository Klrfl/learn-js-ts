export function cekNilai(nilai) {
  let result = "Anda mendapatkan nilai";

  if (nilai >= 90) {
    result = `Selamat! ${result} A.`;
  } else if (nilai >= 80) {
    result = `${result} B.`;
  } else if (nilai >= 70) {
    result = `${result} C.`;
  } else if (nilai >= 60) {
    result = `${result} D.`;
  } else if (nilai <= 60) {
    result = `${result} E.`;
  }

  return result;
}
