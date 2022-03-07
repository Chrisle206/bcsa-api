const router = require('express').Router();
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require("bcrypt")
// const router = express.Router();
const { User } = require("../models");
const Character = require('../models/Character');


//TODO: Replace sessions with JWT.
// Login route
router.post("/login", async (req,res)=>{
    // console.log(req.body);
    User.findOne({username:req.body.username})
    .then(foundUser=>{
        console.log(foundUser);
        if(!foundUser){
            return res.status(401).json({msg:"Invalid username/password type 1"})
        }
        if(bcrypt.compareSync(req.body.password,foundUser.password)){
            console.log(`Request password: ${req.body.password}`);
            console.log(`Found User password: ${foundUser.password}`);
            req.session.user = {
                id:foundUser.id,
                username:foundUser.username
            }
            console.log(foundUser);
            return res.json(foundUser);
        } else {
            console.log(`Request password: ${req.body.password}`);
            console.log(`Found User password: ${foundUser.password}`);
            return res.status(401).json({msg:"Invalid username/password type 2"})
        }
    })
});

//Sign up route
router.post("/signup", (req,res) => {
    User.create({
        username:req.body.username,
        password:req.body.password
    }).then(newUser => {
        req.session.user = {
            id:newUser.id,
            username:newUser.username
        }
        console.log(newUser)
        res.json(newUser)
    }).catch(err => {
        throw err;
    })
});

//Logout route
router.post("/logout", (req,res)=>{
    req.session.destroy(() => {
        console.log("Logged out.")    
        res.status(204).end();
    });
});

//Route for creating a new character
router.post("/newchar/:id", async (req, res) => {
    try {
        const char = await Character.create(req.body)
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { characters: char } },
            { runValidators: true, new: true }
        )
        if (user) {
            console.log(user)
            console.log(`User ${user} located. Adding new character.`)
            return res.json(char)
        } else {
            return res.json('No user with that ID found.')
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//TODO: Replace sessions with JWT 
//Session routes, for development
router.get("/showsessions", (req, res) => {
    res.json(req.session);
  });

router.get("/clearsessions/", (req, res) => {
  req.session.destroy();
  res.json(req.session);
});

//Shows all users, this is for development only
router.get("/showall", (req, res) => {
    User.find({ include: [Character] }).then(users => res.json(users))
});

module.exports = router;