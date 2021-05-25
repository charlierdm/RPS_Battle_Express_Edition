const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index')
})

app.get('/choose_rps', (req, res) => {
  res.sendFile('./choose_rps')
})

app.listen(port, () => {
  console.log(`RPS app listening at port ${port}`)
})