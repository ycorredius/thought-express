const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const jwt = require('jsonwebtoken')
const user = require('../models/user')

router.post('/',
jwt.sign({id:user.id}, config.get('jwttoke', {expiresIn: 360000},
(error,token) =>{
    if(error){
        return error
    }else{
        res.json({token})
    }
}))
)
module.exports = router