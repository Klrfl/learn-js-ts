interface Restaurant {
  nama: String;
  kota: String;
  minumanFavorit: String;
  makananFavorit: String;
  vegetarian: boolean;
}

const restoran: Restaurant = {
  nama: "KAEFCI",
  kota: "Bogor",
  minumanFavorit: "Air putih",
  makananFavorit: "Ayam goreng kremes",
  vegetarian: false,
};

const { nama, minumanFavorit } = restoran;

console.log(nama, minumanFavorit);
