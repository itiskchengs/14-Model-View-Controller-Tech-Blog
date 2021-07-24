const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{

        const allNewPostData = await Post.findAll();

        const newPostData = allNewPostData.map((newpost) => newpost.get({ plain: true }));

        res.render('homepage', {
            newPostData,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/signin', async (req, res) => {
    try{
        res.render('signin', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try{
        res.render('signup', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/dashboard', withAuth, async (req, res) => {
    const currId = req.session.user_id;
    try{

        const postRequestData = await Post.findAll({
            where: {user_id: currId},
        });

        const postData = postRequestData.map((poster) => poster.get({ plain: true }));


        res.render('dashboard',
         {
             postData,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, async (req, res) => {
    try{
        res.render('new-post');
    } catch (err){
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/post/:id', withAuth, async (req, res) => {
    try{

        const postDataId = await Post.findByPk(req.params.id, {
            include: [{model: User}]
        });
        const postData = postDataId.get({ plain: true });

        const postId = req.session.user_id;
        const urlId = req.params.id;

        const commentDataId = await Comment.findAll({ 
            where: {user_id: postId, poster_id: urlId},
        });

        const commentData = commentDataId.map((comment) => comment.get({ plain: true }));

        
        res.render('single-post', { 
            postData,
            postId,
            urlId,
            commentData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;