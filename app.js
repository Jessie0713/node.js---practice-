//advantages of using express : simplify the process of creating server (includes:setHeader,statuscode,contentType)
const express = require('express')
//express app
const app = express()

//use ejs for variables
//register view engine

app.set('view engine', 'ejs') // default file will be view
// app.set('views','fileName')

//listen for requests(you don't need to write localhost)
app.listen('3000')
// for get request
app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ]
  res.render('index', { title: 'Ｈome', blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about' })
})
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' })
})
//404 include codeStatus(use status)
// use : every requests run into this function will work, so it must be put at the end of the requests
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
}) //only get callback function
