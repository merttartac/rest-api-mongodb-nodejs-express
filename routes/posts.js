const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//FIND ALL POSTS
///////////////////////
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});

//FIND POST BY ID
//////////////////////////
router.get('/:postId', async (req, res) => {
    try {
        const postById = await Post.findById(req.params.postId);
        res.json(postById);
    } catch (err) {
        res.json({ message: err })
    }
});

//DELETE POST BY ID
//////////////////
router.delete('/:postId', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(deletedPost);
    } catch (err) {
        res.json({ message: err })
    }
});

//UPDATE A POST
////////////////////////
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err })
    }
});


//SUBMIT A POST
///////////////////////////
// implementation of a post req #1
// router.post('/', (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     post.save()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err })
//         });
// });

// implementation of a post req #2
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router;