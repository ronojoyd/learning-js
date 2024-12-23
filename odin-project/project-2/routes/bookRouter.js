const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/", (req, res) => {
    res.send("All books");
})

bookRouter.get("/:bookId", (req, res) => {
    res.send(`Book ID: ${req.params.bookId}`);
})

bookRouter.get("/:bookId/reserve", (req, res) => {
    res.send(`Reserving Book ID: ${req.params.bookId}`);
})

bookRouter.post("/:bookId/reserve", (req, res) => {
    res.send(`Working to enable reservations for Book ID: ${req.params.bookId}`);
})

module.exports = bookRouter;