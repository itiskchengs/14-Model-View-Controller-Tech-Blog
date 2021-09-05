const router = require('express').Router();
const {Post} = require('../models');
const withAuth = require('../utils/auth');
//const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try{

        res.render('homepage', {
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

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const deletePost = await Post.destroy({
            where: {
                id:  req.params.id
              },
        })
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', withAuth, async (req, res) => {
    try{
        const updatePost = await Post.update({ 
            content: req.body.postContent,
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;