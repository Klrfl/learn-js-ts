# Soal JavaScript

Berikut adalah soal-soal koding JavaScript. Awalnya soal-soal ini berbentuk file `.txt` dan juga terpisah, tapi saya gabungkan dan tulis ulang ke Markdown supaya lebih enak dibaca.

## Daftar isi

1. [Kuis Coding Function](#kuis-coding-function)
2. [Kuis Coding Array](#kuis-coding-array)
3. [Kuis Coding Map](#kuis-coding-map)
4. [Kuis Coding Object](#kuis-coding-object)
5. [Kuis Coding OOP](#kuis-coding-oop)
6. [Kuis Coding Functional](#kuis-coding-functional)
7. [Kuis Coding Module](#kuis-coding-module)
8. [Kuis Coding Try Catch](#kuis-coding-try-catch)
9. [Kuis Coding Asynchronous](#kuis-coding-asynchronous)
10. [Kuis Coding Asynchronous 2](#kuis-coding-asynchronous-2)

## ~~Kuis Coding Function~~

1. Buatlah fungsi bernama `minimal` dengan ketentuan berikut:

   - Menerima dua buah argumen bertipe number, `a` dan `b`.
   - Mengembalikan nilai terkecil antara `a` atau `b`.
   - Bila nilai keduanya sama, maka kembalikan dengan nilai `a`

   **contoh**:

   ```js
   minimal(1, 4); // mengeluarkan 1
   minimal(3, 2); // mengeluarkan 2
   minimal(3, 3); // mengeluarkan 3
   ```

2. Buatlah fungsi bernama `power` dengan ketentuan berikut:

   - Menerima dua buah argumen number, `a` dan `b`.
   - Mengembalikan nilai dari hasil perkalian `a` sebanyak `b` (fungsi kuadrat).

   **contoh**:

   ```js
   power(7, 3); // mengeluarkan 343
   power(3, 3); // mengeluarkkan 27
   power(4, 0.5); // mengeluarkkan 2
   ```

## ~~Kuis Coding Array~~

Buatlah sebuah variabel dengan nama `evenNumber` yang merupakan sebuah array, dengan ketentuan berikut:

- Array tersebut menampung bilangan genap dari 1 hingga 100

**Catatan: Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.**

---

## ~~Kuis Coding Map~~

1. Buatlah variabel `currency` yang merupakan `Map` dengan kriteria:

   - key `"USD"`, value `14000`
   - key `"JPY"`, value `131`
   - key `"SGD"`, value `11000`
   - key `"MYR"`, value `3500`

2. Buatlah variabel `priceInIDR` yang bernilai dari hasil perkalian:

   - `priceInJPY` dengan nilai `JPY`

## ~~Kuis Coding Object~~

1. Buatlah variabel dengan nama `restaurant` yang bertipe `object` dengan ketentuan berikut:

   - Memiliki properti bernama `"name"`
     - Bertipe data string
     - Bernilai apa pun, asalkan tidak string kosong atau null.
   - Memiliki properti bernama `"city"`
     - Bertipe data string
     - Bernilai apa pun, asalkan tidak string kosong atau null.
   - Memiliki properti `"favorite drink"`
     - Bertipe data string
     - Bernilai apa pun, asalkan tidak string kosong atau null.
   - Memiliki properti `"favorite food"`
     - Bertipe data string
     - Bernilai apa pun, asalkan tidak string kosong atau null.
   - Memiliki properti `"isVegan"`
     - Bertipe data boolean
     - Bernilai boolean apa pun.

2. Buatlah variabel bernama `name`.
   Kemudian isi dengan nilai `name` dari properti `restaurant`
3. Buatlah variabel bernama `favoriteDrink`.
   Kemudian isi dengan nilai `"favorite drink"` dari properti `restaurant`

## ~~Kuis Coding OOP~~

1. Buatlah sebuah class bernama `Animal` dengan ketentuan:

   - Memiliki properti:

     - name: string
     - age: int
     - isMammal: boolean

   - Memiliki method `constructor` untuk menginisialisasi properti:
     - name
     - age
     - isMammal

2. Buatlah class bernama `Rabbit` dengan ketentuan:

   - Merupakan turunan dari class `Animal`
   - Memiliki method `eat`, yang mengembalikan nilai string:

     ```js
     ${this.name} sedang makan!
     ```

   - Ketika diinstansiasi, properti `isMammal` harus bernilai `true`

3. Buatlah class bernama `Eagle` dengan ketentuan:

   - Merupakan turunan dari class `Animal`
   - Memiliki method `fly`, yang mengembalikan nilai string:

     ```js
     ${this.name} sedang terbang!
     ```

   - Ketika diinstansiasi, properti `isMammal` harus bernilai `false`

4. Buatlah instance dari class `Rabbit` bernama `myRabbit` dengan ketentuan:
   - properti name bernilai: `"Labi"`
   - properti age bernilai: `2`
5. Buatlah instance dari class `Eagle` bernama `myEagle` dengan ketentuan:
   - properti name bernilai: `"Elo"`
   - properti age bernilai: `4`

## ~~Kuis Coding Functional~~

Buatlah variabel `greatAuthors` yang merupakan array berdasarkan hasil `filter()` dan `map()` dari `books`:

```js
const books = [
  { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
  { title: "The Ghost", author: "Robert Harris", sales: 807311 },
  { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
  { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
  { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
  { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K Rowling",
    sales: 4475152,
  },
];
```

- Gunakan fungsi `filter()` untuk mengembalikan nilai item books yang hanya memiliki nilai sales lebih dari 1.000.000.
- Gunakan fungsi `map()` pada books yang sudah ter-filter, untuk mengembalikan nilai string dengan format:

  ```js
  `${author} adalah penulis buku ${title} yang sangat hebat!`;
  ```

Catatan: Jangan ubah nilai atau struktur dari books

## ~~Kuis Coding Module~~

### TODO 1 (Tiger.js)

Ekspor nilai dari class Tiger

```js
class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return "grrrrrrr";
  }
}

// TODO 1
module.exports = Tiger;
```

### TODO 2 (Wolf.js)

Ekspor nilai dari class Wolf

```js
class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    return "Auuuuuuuuu";
  }
}
```

### TODO 3 (main.js)

Impor class Tiger dan Wolf

```js
// TODO 3

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return "Harimau dan serigala sama-sama kuat!";
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);
```

### TODO 4 (main.js)

Ekspor fungsi fight, myTiger, myWolf, dan result

## Kuis Coding Try Catch

```js
const detectTriangle = (a, b, c) => {
  // TODO 3

  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};
```

Saat ini, Anda sudah memiliki fungsi `detectTriangle` yang berguna untuk mendeteksi jenis segitiga berdasarkan nilai argumen.

**Contoh**:

- `1, 1, 1` -> Segitiga sama sisi
- `4, 4, 2` -> Segitiga sama kaki
- `3, 4, 6` -> Segitiga sembarang
  Namun fungsi detectTriangle belum berjalan dengan baik karena
  bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".

**Contoh**:

- `1, false, 1` -> Segitiga sembarang
- `'a', 3, 5` -> Segitiga sembarang
- `12, 2, null` -> Segitiga sembarang

Kondisi yang diharapkan:

- `1, false, 1` -> Argumen kedua harus number
- `'a', 3, 5` -> Argumen pertama harus number
- `12, 2, null` -> Argumen ketiga harus number

Tugas Anda adalah memperbaiki fungsi `detectTriangle` agar berjalan dengan kondisi yang diharapkan.
Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.

### TODO 1:

- Buatlah class `ValidationError` yang merupakan custom error dengan spesifikasi berikut:
- Turunan dari class `Error`
- Memiliki `constructor(message)`
- `this.name` harus bernilai `"ValidationError"`

### TODO 2:

Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
Menerima 3 argumen

- Bila argumen pertama bukan number:
  - `throw ValidationError` dengan pesan 'Argumen pertama harus number'
- Bila argumen kedua bukan number:
  - `throw ValidationError` dengan pesan 'Argumen kedua harus number'
- Bila argumen ketiga bukan number:
  - `throw ValidationError` dengan pesan 'Argumen ketiga harus number'

### TODO 3:

- Panggil fungsi validateNumberInput di dalam fungsi `detectTriangle` untuk memvalidasi nilai argumen a, b, dan c.
  - pastikan Anda memanggil `validateNumberInput` menggunakan `try .. catch`.
  - bila block `catch` terpanggil, kembalikan fungsi `detectTriangle` dengan pesan error yang dibawa fungsi `validateNumberInput`.

## Kuis Coding Asynchronous

### TODO

Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.

Catatan:

- Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
- Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.

```js
function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === "id") {
      callback(null, [
        { id: "id-jk", name: "Jakarta" },
        { id: "id-bt", name: "Banten" },
        { id: "id-jr", name: "Jawa Barat" },
      ]);
      return;
    }

    callback(new Error("Country not found"), null);
  }, 1000);
}

module.exports = { getProvinces: getProvinces };
```

## Kuis Coding Asynchronous 2

### TODO

Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.

1.  Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek `{ tollRoadCard: true, balance: 0 }`.
2.  Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek `{ tollRoadCard: true, balance: 10 }`.
3.  Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.

Catatan:

- Anda boleh menggunakan async/await, `.then()` dan `.catch()`, atau kombinasi keduanya.
- Jika ada error, tampilkan error (`error.message`) tersebut dengan `console.log`.
- Masing-masing langkah di atas harus dijalankan secara berurutan.
- Masing-masing langkah akan mencetak pesan ke console.
- Anda bisa mengeksplorasi fungsi yang sudah disediakan di `utils.js`. Namun, Anda tidak boleh mengubah isi dari `utils.js`.

```js
const { buyTollRoadCard, topUpBalance, useTollRoad } = require("./utils");

function getTollAccess() {
  return;
}

// Jangan hapus kode di bawah ini
getTollAccess();
```
