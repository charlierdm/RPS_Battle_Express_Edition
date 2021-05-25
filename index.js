const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('./choose_rps', {data: req.body})
})

app.get('./choose_rps', (req, res) => {
  res.sendFile('./choose_rps')
})

app.post('./choose_rps', (req, res) => {
  res.sendFile('./choose_rps')
})

app.listen(port, () => {
  console.log(`RPS app listening at port ${port}`)
})