const express = require("express");

const app = express();
const hbs = require("hbs");

//const { runSql, getQuery } = require("./querys");
const { runSql, getQuery } = require("../src/querys.js");
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

app.get("/dbData", (rqs, rsp) => {
  //rsp.send(`The path you Requested is not available !`);
  if (!rqs.query.inquery || rqs.query.inquery === undefined) {
    return;
  }
  console.log(`rqs.query.inquery`);
  console.log(rqs.query.inquery);
  //  const { runSql, getQuery } = require("../src/querys.js");
  //const { getQuery } = require("./querys");
  let rslt;

  let inquery = getQuery(rqs.query.inquery);
  console.log(getQuery);

  runSql(inquery).then((resp) => {
    rslt = { ...resp };
    console.log(`rsp`);
    //console.log(resp);

    rsp.send(resp);

    //console.log(rsp[0]);
  });

  console.log(`rslt`);
  console.log(rslt);
  //rsp.send(`Obj : ${rslt}`);
});

// creating WebServer
app.listen(3001, () => console.log(`data Inquery Server is Up Running  `));
