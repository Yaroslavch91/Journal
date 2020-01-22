const router = require('express').Router();
const Post = require('../models').Post;

router.get('/', async (reg, res) => {
    res.json(await Post.findAll())
});

router.post('/', async (reg, res) => {
    const post = await Post.create(req.body)
    res.status(201).json(post);
});

module.exports = router;