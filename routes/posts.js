const express = require('express'); 
const router = express.Router(); 

//Middlewares! 

//You don't have to do .get('/posts') because you're in the posts route. (Whatever you have in that app.use('/'))
//You must create that route, export the route (line 19) and bring it into the app.js and use it as a middleware

router.get('/', (req, res) => { 
    res.send('We are on posts');
});

router.get('/specific', (req, res) => {
    res.send('Specific post');
});



module.exports = router; 