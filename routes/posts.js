const express = require('express'); 
const router = express.Router(); 
const Post = require('../models/Post'); 

//Middlewares! 

//You don't have to do .get('/posts') because you're in the posts route. (Whatever you have in that app.use('/'))
//You must create that route, export the route (line 19) and bring it into the app.js and use it as a middleware

router.get('/', (req, res) => { 
    res.send('We are on posts');
});

router.post('/', (req, res) => {
    const post = new Post({ //this is coming from line 3 
        title: req.body.title, 
        description: req.body.description
    });

    //we can save the information on lines 14-18 by using post.save() below
    post.save() //returns a promise
    .then(data => { //retrieve data
        res.json(data); //how we can see it on the screen
    })
    .catch(err => {
        res.json({message: err});  
    });

    //The way we create a new post..
    //We are going to have to access the information (the thing we are posting to the API from the body)

     
    //when we use postman, console.log(req.body); isn't going to work because we need it to be converted to JSON 
    //the way we can do that is through bodyparser 
    //it will parse our request from Postman, and give back correct data

});


module.exports = router; 