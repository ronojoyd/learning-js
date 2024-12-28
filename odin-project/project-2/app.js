const express = require("express");
const app = express();

const authorRouter = require("./routes/authorRouter.js");
const bookRouter = require("./routes/bookRouter.js");

app.get("/", (req, res) => {
    res.send("Welcome to the bookstore.");
});

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