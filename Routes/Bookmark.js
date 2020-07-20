const express = require("express");
const Bookmark = require("../models/Bookmark_model");
const { findOneAndDelete } = require("../models/Bookmark_model");
const { response } = require("express");
const router = express.Router();

//Create and Save Bookmark
router.post('/',async function(req,response){
    const Link = req.body.link
    const Title = req.body.title
    const Tags = req.body.tags
    const now = new Date()


    {
        const Time_Created = new Date()
        const Time_Updated = new Date()
        const newbookmark = new Bookmark({
            Link,
            Title,
            Tags,
            Time_Created,
            Time_Updated
        })
        await newbookmark.save()
        response.send("Bookmark Added successfully!")
    }
    
    
   
})

//Delete Bookmark
router.delete('/',async function(req,res){
    const Link = req.body.link
    await Bookmark.findOneAndRemove({Link:Link})
    console.log(Link);
    res.send("Deleted the Bookmark...")
    
})

//Get Bookmark
router.get('/',async function(req,res){
    let bookmarks = await Bookmark.find({},function(err){
        if(err){
            console.log(err);
        }
    })

    res.send(bookmarks)
})

module.exports = router;