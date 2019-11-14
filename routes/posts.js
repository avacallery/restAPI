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
    //The way we create a new post..
    //We are going to have to access the information (the thing we are posting to the API from the body)
    console.log(req.body); 
})


module.exports = router; 