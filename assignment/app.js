const express = require('express')

const app = express()
const bodyParser = require('body-parser')

const users = []

// app.set('view engine', 'pug')
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extensed: false}))

app.get('/',(req, res, next) => {
    res.render('index', {pageTitle: 'Add User'})
})

app.get('/users',(req,res,next) =>{
    res.render('users', {pageTitle: 'Users', users: users})
})

app.post('/add-user', (req, res, next) =>{
    users.push({name: req.body.username});
    res.redirect('/users')
})

app.listen(3000)
