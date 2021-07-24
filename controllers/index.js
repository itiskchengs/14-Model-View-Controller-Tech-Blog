const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', homeRoutes);

module.exports = router;