const mongoose = require('mongoose')

const BookmarkSchema = mongoose.Schema({
    
    Link: {
        type: String,
        required: true,
        unique:true
    },
    Title: {
        type: String,
        required: true
    },
    Time_Created : {
        type: String,
        required: true
    },
    Time_Updated : {
        type: String,
       required:true
    },
    Publisher:{
        type:String,
        required:true
    },
    Tags: [{
        type: String,
        required: true
    }]
})
const Bookmark = mongoose.model('bookmark', BookmarkSchema)
module.exports = Bookmark