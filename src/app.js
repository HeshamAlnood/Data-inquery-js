const express = require("express");

const app = express();
/* For GraphQl */
/*const graphqlHttp = require("express-graphql");
const { schema: vSchema } = require("../src/ghrapql.js");

app.use(
  "/ghraphql",
  graphqlHttp({
    schema: vSchema,
    graphiql: true,
  })
);
/* For GraphQl */

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

    rsp.send(resp);
  });
});

app.get("/dom", (rqs, rsp) => {
  rsp.render(`dom`);
});

// creating WebServer
app.listen(3001, () => console.log(`data Inquery Server is Up Running  `));
