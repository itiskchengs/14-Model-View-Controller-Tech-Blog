const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-route.js');
//const dashRoutes = require('./dashboard-route.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', homeRoutes);

module.exports = router;