// const books = [
//   {
//     title: "Anjing ",
//     author: "Ben",
//     sales: 103124,
//   },
//   {
//     title: "Identifying sexual assault in schools and how to handle it",
//     author: "Muhamad Rava Basya",
//     sales: 1694203,
//   },
//   {
//     title: "How To Build A Car",
//     author: "Adrian Newey",
//     sales: 1735428,
//   },
//   {
//     title: "Kemalasan Gua Untuk Hidup: Mengatasi Stres Pada Masa Muda",
//     author: "Efraim",
//     sales: 934026,
//   },
//   {
//     title: "Idk what to title this book man",
//     author: "Someone W. Himself",
//     sales: 33320,
//   },
//   {
//     title: "Matematika diskrit mudah 100% punjabi no root no hack",
//     author: "Someone W. Himself",
//     sales: 873329,
//   },
// ];

export const books = [
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

export const filteredBooks = books.filter((book) => {
  return book.sales > 1_000_000;
});

export const greatAuthors = filteredBooks.map((filteredBook) => {
  return `${filteredBook.author} adalah penulis buku "${filteredBook.title}" yang sangat hebat!`;
});
