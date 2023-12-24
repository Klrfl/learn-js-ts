// kita tidak dikasih ./utils jadi kita tidak akan mengerjakan tugas ini

function printMessage(message) {
  return new Promise((resolve, reject) => {
    if (message) {
      const mes = `pesanmu adalah sebagai berikut: ${message}`;
      resolve(mes);
    } else {
      reject("taroh dulu messagenya baru dijalanin tolol");
    }
  });
}

async function getResource() {
  printMessage()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

getResource();
