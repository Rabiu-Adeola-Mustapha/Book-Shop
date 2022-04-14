const fs = require("fs");


let books = [];

fs.readFile("books.json", (err, data) => {
  
  if (err) throw err;

  books = JSON.parse(data);
});

// adding middlewares to filter books by category or by author
const byCategory = (req,res, next) => {
  const category = req.query.category;

  if (category) {
    let _books = books.filter((b) => b.category == category);

    return res.status(200).json({ success: true, data: books });
  };
  next();

};

const byAuthor = (req,res, next) => {
  const author =req.query.author

  if(author){
    let _author = books.filter((b) => b.author == author);

    return res.status(200).json({success: true,data: _author})
  };
  next();
  
};




module.exports = {
  byAuthor,
  byCategory,
}
