const { urlencoded } = require('express');
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()
const port = '3000'
const path = require('path')


mongoose.connect("mongodb://localhost:27017/thoughts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

app.use(logger('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})