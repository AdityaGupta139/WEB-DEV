const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName="Adidas"
    let searchText="Search now"
    let arr=[1,34,56]
  res.render(`index`,{siteName:siteName,searchText:searchText,arr})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle="Adidas why and when?"
    let blogContent="It's a very good brand"
  res.render(`blogpost`,{blogContent:blogContent,blogTitle:blogTitle})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})