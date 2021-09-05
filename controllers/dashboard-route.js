const router = require('express').Router();
//const {Post, User} = require('../models');

router.get('/', async (req, res) => {
    try{
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', async (req, res) => {
    try{
        res.render('new-post');
    } catch (err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;