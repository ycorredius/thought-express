const express = require('express')
const app =  express()

const port = process.env.Port || '3001';

app.get('/',(req,res) =>{
    res.send('This works?')
    console.log("this may be working")
})

app.listen(port,() =>{
    console.log(`I am listing to you from port: ${port}`)
})