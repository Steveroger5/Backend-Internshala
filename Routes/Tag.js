const express = require("express");
const router = express.Router();
const Tag = require("../models/Tag_model");
const Bookmark = require("../models/Bookmark_model");

//Create and Save Tag
router.post('/',async function(req,res){
    
    const Title = req.body.title
    const now = new Date()


    {
        const Time_Created = new Date()
        const Time_Updated = new Date()
        const newtag = new Tag({
            Title,
            Time_Created,
            Time_Updated
        })
        await newtag.save()
        res.send("Tag Added successfully!")
    }
    
    
})

//Delete Tag
router.delete('/',async function(req,res){
    const Title = req.body.title
    await Tag.findOneAndRemove({Title:Title})
    res.send("Deleted the Tag...")
})

//Get Tag
router.get('/',async function(req,res){
    const Tags = await Tag.find({},function(err){
        if(err){
            console.log(err);
        }
    })
    res.send(Tags)

})

//Add Tag to Bookmark
router.post('/addTag',async function(req,res){
    const Link = req.body.link
    const Tag = req.body.Tag

    const bookmark = await Bookmark.find({Link:Link})
    console.log(bookmark);
    let Tags = bookmark[0].Tags
    console.log(Tags);
    if(Tags==null){
        Tags=Tag
    }
    else{
        Tags.push(Tag)
    }
    let now = new Date()
    await Bookmark.findOneAndUpdate({Link:Link},{Tags:Tags,Time_Updated:now},function(err,response){
        if(err){
            response.send("Something went wrong")
        }
    })
    res.send("Added The Tag to The Bookmark...")

})

//Delete Tag from Bookmark
router.post('/removeTag',async function(req,res){
    const Link = req.body.link
    const Tag = req.body.Tag

    const bookmark = await Bookmark.find({Link:Link})
    let Tags = bookmark[0].Tags

    Tags = Tags.filter(function(e){
        return e!==Tag
    })
    let now = new Date()
    await Bookmark.findOneAndUpdate({Link:Link},{Tags:Tags,Time_Updated:now},function(err,response){
        if(err){
            response.send("SOmething went wrong")
        }

    })
    res.send("Removed the tag from the bookmark")
})

module.exports = router;