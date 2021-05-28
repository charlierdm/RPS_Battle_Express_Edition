const express = require("express");
const computerPlayer = require("./public/js/computerPlayer");
const gameResults = require("./public/js/gameResults");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app
  .route("/")
  .get((req, res) => {
    res.render("./index");
  })

app
  .route("/choose_rps")
  .post((req, res) => {
    res.render("./choose_rps", { data: req.body });
  });

  app
    .route("/results")
    .post((req, res) => {
      res.render("./results", { data: req.body });
    })

app.listen(port, () => {
  console.log(`RPS app listening at port ${port}`);
});
