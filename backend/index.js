const path = require("path");
const express = require("express");

const app = express();
const userRoute = require("./routes/users.router");
const booksRouter = require("./routes/books.router")

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages","index.html"));
});

app.use("/users", userRoute);
app.use("/books", booksRouter);

app.get("/*", (req, res) => {
  res.status(400).sendFile(path.join(__dirname, "pages","404.html"));
});

app.listen(4000, () => {
  console.log("SERVER IS UP!");
});
