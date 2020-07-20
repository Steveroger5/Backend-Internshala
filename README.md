# Backend-Internshala

here i have made total 8 routes 

please note that the content type in postman have to be made json
and the fo to raw data nad paste corresponding dataform to send the req

for Bookmarks :
1. Post the data to create a bookmark : Post request to /api/Bookmarks
      data form :{
                      "title":"mern homepage",
                      "link":"www.mern_google.com",
                      "tags":["myhomepage","google","enjoy","study","mern"],
                      "publisher":"mern"
                  }
             
 2. Get the data of all bookmarks : Get request to /api/Bookmarks            
      
 3. Delete a Bookmark : Delete request to /api/Bookmarks
     data form :{
                    "link":"www.mern_google.com"
                }
 4. Create new Tag : Post request to /api/Tags
      data form :{
                      "title":"education"
                  }
                  
 5. Get all tags : Get request to /api/Tags
      
 6. Delete a Tag : Delete request to /api/Tags
      data form :{
                    "title": "education"
                 }
 7. Add tag to bookmark : Post request at /api/Tags/appTag
      data form :{
                      "link":"www.netflix.com",
                      "Tag":"13 reasons why"
                 }
8. Remove tag from bookmark : Delete request at /api/Tags/removeTag
      data form :{
                      "link":"www.gmail.com",
                      "Tag":"enjoy"
                 }
                 
feel free to contact me in case of any query @
gagan.gagan211@gmail.com
