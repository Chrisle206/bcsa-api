const router = require('express').Router();
const mongoose = require('mongoose');
// var jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");
require('dotenv').config();
const Enemy = require('../../models/Enemy');

//GET route for acquiring enemy data. NOTE: requires JWT token to access. Include JWT token in req.body as 'token.' Refer to middleware/auth
router.get('/enemy/:id', auth, (req, res) => {
    Enemy.findById(
        { _id: req.params.id }
    ).then((enemy) =>
        !enemy
            ? res.status(404).json({ message: 'No enemy found, check ID' })
            : res.json(enemy)
    ).catch((err) => res.status(500).json(err));
});


module.exports = router;