const fs = require("fs");

let books = [];

fs.readFile("books.json", (err, data) => {
  if (err) throw err;

  books = JSON.parse(data);
});

// adding middlewares to filter books by category or by author
const getAllBooks = (req,res) =>  {
  res.status(200).json({ success: true, data: books });
};

const createBook = (req,res) => {
  const book = req.body;
  books.push(book);

  let data = JSON.stringify(books);
  fs.writeFileSync("books.json", data);

  res.status(200).json({ success: true, data: books });
};

// update book details by isbn [international standard book number]
const updateBook = (req,res) => {
  const isbn = req.query.isbn;
  const data = req.body;

  let book = books.filter((b) => b.isbn == isbn);
  let _book = { ...book[0], ...data };

  books = books.map((b) => (b.isbn == isbn ? _book : b));

  fs.writeFileSync("books.json", JSON.stringify(books));

  res.status(200).json({ books });
};

module.exports = {
    createBook,
    getAllBooks,
    updateBook,
};
