const router = require('express').Router();
const user = require('./userRoutes')
const enemy = require('./api/enemyRoutes')

router.use('/user', user);
router.use('/api', enemy);

// router.use((req, res) => res.send('Wrong route!'));

module.exports = router;