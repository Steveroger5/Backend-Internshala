const express = require('express')
const app = express()
const db = require('./config/db')

db()

app.use(express.json())

app.listen(3000,function(req,res){
    console.log("Server up backend mate!");
})

app.get('/',function(req,res){
    res.send("hello there !")
})
/****Basic Routes**********/
app.use("/api/Bookmarks", require('./Routes/Bookmark'))
app.use("/api/Tags", require('./Routes/Tag'))
/****Basic Routes*********/