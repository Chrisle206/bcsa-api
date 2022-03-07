const router = require('express').Router();
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require("bcrypt")
// const router = express.Router();
const { User } = require("../models");


//TODO: Replace sessions with JWT.
// Login route
router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({msg:"Invalid username/password"})
        }
        if(bcrypt.compareSync(req.body.password,foundUser.password)){
            req.session.user = {
                id:foundUser.id,
                username:foundUser.username
            }
            console.log(foundUser);
            return res.json(foundUser);
        } else {
            return res.status(401).json({msg:"Invalid username/password."})
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


//TODO: Replace sesions with JWT 
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
    User.findAll().then(users => res.json(users))
});

module.exports = router;