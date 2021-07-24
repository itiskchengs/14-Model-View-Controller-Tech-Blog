const router = require('express').Router();
const postRoute = require('./post-route');
const userRoute = require('./user-route');
const commentRoute = require('./comment-route');

router.use('/post', postRoute);
router.use('/user', userRoute);
router.use('/comment', commentRoute);

module.exports = router;