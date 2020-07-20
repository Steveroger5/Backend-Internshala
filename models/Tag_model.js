const mongoose = require('mongoose')

const TagSchema = mongoose.Schema({
    
    Title: {
        type: String,
        required: true,
        unique: true
    },
    Time_Created : {
        type: String,
        required: true
    },
    Time_Updated : {
        type: String,
       required:true
    }
})
const Tag = mongoose.model('tag', TagSchema)
module.exports = Tag