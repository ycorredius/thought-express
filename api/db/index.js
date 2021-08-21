import mongoose, { Schema } from 'mongoose'

mongoose.connection('mongodb://localhost:27017/thought', {userNewUrlParser:true});

const thoughtSchema = new Schema({
    name: String,
    author: String,
    comments
})