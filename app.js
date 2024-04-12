const express = require("express");
const app = express();

// Register view engine
app.set("view engine", "ejs");

// Listen for requests
app.listen(3000);

// Render index page using view enginer
app.get("/", (req, res) => {

    /* 
    // Traditional method of returning HTML pages, w/o view engine
    res.sendFile("./coffee/index.html", {root: __dirname});
    */

    // Uses view engine to render index view
    res.render("index", {
        customerName: "Mario"
    });

});

/*
app.get("/order", (req, res) => {

    res.redirect("/");

});
*/

app.use((req, res) => {
    res.status(404).render('404');
});