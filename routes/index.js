const router = require('express').Router();
const user = require('./userRoutes')

router.use('/user', user);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;