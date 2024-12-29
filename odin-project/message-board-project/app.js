const express = require("express");
const app = express();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { title: "Messageboard", messages: messages});
});

app.get("/new", (req, res) => {
    res.render("form", {});
});

app.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
    res.redirect("/");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Testing bookstore app: listening on port ${PORT}!`);
});