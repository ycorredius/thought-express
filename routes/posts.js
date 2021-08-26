const express = require('express')
const router = express.Router()

const posts =[
    {
        title: "this is cool",
        author: "shaun",
        content: "blah blah blah"
    },
    {
        title: "this is a test",
        author: "test author",
        content: "This is just a test of how this works"
    }
]

router.get('/', (req,res) =>{
    console.log(posts)
    res.render('posts/index',{posts})
})

router.get('/new',(req,res)=>{
    res.send('Post creation route')
})

router.post('/',(req,res)=>{
    console.log(req.body)
})

router.get ('/:id',(req,res)=>{
    res.send('Post show route')
})

router.get('/:id/edit',(req,res)=>{
    res.send('Post edit')
})

module.exports = router;