const mongoose = require('mongoose');

//Now we are going to create a Schema
//What a schema means is how that Post looks
//Title, string, description... how your data looks

const PostSchema = mongoose.Schema({ 
    //this is where we describe the properties 
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now
    }, 
});

//we create the model (.model) give a name 'Posts' and the Schema it uses (PostSchema)
module.exports = mongoose.model('Posts', PostSchema); 
//this will show up in our MongoDB 
