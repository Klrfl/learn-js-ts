function cekNilai(nilai) {
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

function cekNilaiBaru(inputNilai) {
  switch (inputNilai) {
    case inputNilai >= 90:
      grade = "A";
      break;
    case inputNilai >= 80:
      grade = "B";
      break;
    case inputNilai >= 70:
      grade = "C";
      break;
    case inputNilai >= 60:
      grade = "D";
      break;
    case inputNilai <= 60:
      grade = "E";
      break;
    default:
      return "ga tau dah";
  }
  return `Selamat anda mendapatkan nilai ${grade}`;
}

console.log(cekNilai(85));
console.log(cekNilaiBaru(86));
