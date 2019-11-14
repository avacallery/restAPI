const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
require('dotenv/config');

//middleware
app.use(bodyParser.json());
//bodyParser processes the request we made thru Postman and parses it so it displays in the terminal 

//import routes
const postsRoute = require('./routes/posts'); 

app.use('/posts', postsRoute); 


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true },
() => console.log('Connected to DB!')
);

app.listen(3000); 