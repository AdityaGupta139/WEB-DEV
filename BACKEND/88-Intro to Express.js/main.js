const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('About us!')
})


app.get('/contact', (req, res) => {
  res.send('contact me')
})


app.get('/blog', (req, res) => {
  res.send('hello blog')
})

app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`hello ${req.params.slug}`)
  })

// app.get('/blog/into_to_python', (req, res) => {
//   res.send('hello python')
// })
// app.get('/blog/intro to js', (req, res) => {
//   res.send('hello js')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
