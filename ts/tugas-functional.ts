const books: object[] = [
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

const filteredBooks = books.filter((book) => {
  return book.sales > 1_000_000;
});

const mappedBooks = filteredBooks.map((book) => {
  return `${book.author} adalah penulis buku "${book.title}" yang sangat hebat!`;
});

console.log("filtered books: ", filteredBooks, "\n");
console.log("mapped books: ", mappedBooks, "\n");
