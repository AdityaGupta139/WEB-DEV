const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("Hey it's a get request")
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log("Hey it's a post request")
  res.send('Hello World!')
})
app.put('/', (req, res) => {
  console.log("Hey it's put request")
  res.send('Hello World put!')
})

app.get('/index', (req, res) => {
  console.log("Hey it's a get request")
  res.sendFile('templates/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})