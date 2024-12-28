const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
    { href: "/", text: "Home" },
    { href: "/authors", text: "Authors" },
    { href: "/books", text: "Books" }
];

const users = ["Bob", "Carl", "Doug"];

app.get("/", (req, res) => {
    res.render("index", { message: "Welcome to the bookstore...", links: links, users: users });
});

const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Testing bookstore app: listening on port ${PORT}!`);
});