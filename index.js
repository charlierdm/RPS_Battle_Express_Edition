const express = require("express");
const ComputerPlayer = require("./public/js/computerPlayer");
const Game = require("./public/js/game");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app
  .route("/")
  .get((req, res) => {
    res.render("./index");
  });

app
  .route("/choose_rps")
  .post((req, res) => {
    res.render("./choose_rps", { data: req.body });
  });

  app
    .route("/results")
    .post((req, res) => {
      const computerChoice = new ComputerPlayer().play();
      const game = new Game(req.body.user_choice, computerChoice).results();
      res.render("./results", { data: req.body, results: game, computerChoice: computerChoice, });
    });

app.listen(port, () => {
  console.log(`RPS app listening at port ${port}`);
});
