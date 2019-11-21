const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Middlewares! 

//this makes it so ALL OF OUR POSTS display under get (postman)
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});


//SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        //we can save the information on lines 14-18 by using post.save() below
        const savedPost = await post.save() //returns a promise
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    };
});

//SPECIFIC DATA
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post); //this sends post
    } catch (err) {
        res.json({ message: err });
    }
});


//DELETE A POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try{
    const updatedPost = await Post.updateOne(
        { _id: req.params.postId }, 
        { $set: {title: req.body.title} } //set new value here
    ); 
    res.json(updatedPost); //output the updatedpost
    }catch (err) {
        res.json({ message: err });
    }
}); 

module.exports = router; 