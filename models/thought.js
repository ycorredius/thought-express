const mongoose = require('moongoose')
const {Schema} = mongoose
const thoughtSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author
})