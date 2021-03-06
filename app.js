//advantages of using express : simplify the process of creating server (includes:setHeader,statuscode,contentType)
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
//express app
const app = express()

//use ejs for variables
//register view engine
app.set('view engine', 'ejs') // default file will be view
// app.set('views','fileName')

// connect to mongodb & listen for requests
const dbURI =
  'mongodb+srv://Jessie-test:222222@cluster0.tih1w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// middleware
// app.use((req, res, next) => {
//   console.log('new request made')
//   console.log('host : ', req.hostname)
//   console.log('method : ', req.method)
//   console.log('pathname : ', req.path)
//   next()
//   //u need next function to let the server go on
// })

//third party middleware
app.use(morgan('dev'))

//for static files(ex: img or css)
app.use(express.static('public'))

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
