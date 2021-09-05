const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./user-route');

/*
router.get('/', async (req, res) => {
    try{
        res.render('new-post');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
*/

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.textTitle,
            content: req.body.textContent,
            date: new Date().toString(),
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;