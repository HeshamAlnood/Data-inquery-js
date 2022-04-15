const express = require("express");

const app = express();
const hbs = require("hbs");

let pat1 = __dirname;
let pat2 = __filename;

const path = require("path");

let path3 = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");

app.use(express.static(path3));

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(viewsPath);

app.get("", (req, rsp) => {
  rsp.render("index");
});

// creating WebServer
app.listen(3001, () => console.log(`data Inquery Server is Up Running  `));
