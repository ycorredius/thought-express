const { urlencoded } = require('express');
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()
const port = '3000'
const path = require('path')
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const db = require('./config/db')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

app.use(logger('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/posts', postRoutes)
app.use('users', )

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/posts')
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})