import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/services", (req, res) => {
    res.render("services.ejs");
});

app.get("/products", (req, res) => {
    res.render("products.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
});