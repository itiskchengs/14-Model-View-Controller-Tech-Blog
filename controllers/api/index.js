const router = require('express').Router();
const postRoute = require('./post-route');
const userRoute = require('./user-route');

router.use('/post', postRoute);
router.use('/user', userRoute);

module.exports = router;