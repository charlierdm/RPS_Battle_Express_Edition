const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.route('/')
.get((req, res) => {
  res.render('./index')
})
.post((req, res) => {
  console.log(req.body)
  res.render('./choose_rps', {data: req.body})
})

app.route('/choose_rps')
.get((req, res) => {
  res.render('./choose_rps')
})
.post((req, res) => {
  console.log(req.body)
  res.render('./results', {data: req.body})
})

app.listen(port, () => {
  console.log(`RPS app listening at port ${port}`)
})