const router = require('express').Router();
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
require('dotenv').config();
const { User, Character } = require("../models");

// Login route
router.post("/login", async (req,res)=>{
    const { username, password } = req.body
    const foundUser = await User.findOne({ username: username })
    .populate('characters')
    // .exec((err) => {
    //     if (err) throw err;
    //     console.log(`Populated ${username}'s characters.`)
    // })
        console.log(foundUser);
        if(!foundUser){
            return res.status(400).json({msg:"Invalid username/password type 1"})
        }
        if(bcrypt.compareSync(password, foundUser.password)){
            const token = jwt.sign(
                { user_id: foundUser._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1d",
                }
            );

            foundUser.token = token;

            // Old code using sessions instead of JWT
            // req.session.user = {
            //     id:foundUser.id,
            //     username:foundUser.username
            // }
            console.log(foundUser);
            return res.status(200).json(foundUser);
        } else {
            return res.status(400).json({msg:"Invalid username/password type 2"})
        }
    });

//Sign up route
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body

        //Check if username already exists
        const oldUser = await User.findOne({ username })
        if (oldUser) {
            return res.status(409).send("Username taken. Please choose a different username.");
        };

        const user = await User.create({
            username,
            password
        });

        // req.session.user = {
        //     id: user.id,
        //     username: user.username
        // };
        // console.log(`Session created for ${user.username}`)

        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "1d",
            }
        );

        user.token = token;
        console.log(user);
        res.status(201).json(user);

    }
    catch (err) {
        throw err;
    }
});

//Route for accessing character details
router.get("/char/:id", auth, async (req, res) =>{
    try {
        const _id = req.params.id;
        const character = await Character.findById({ _id });
        console.log(`{${character.characterName} has been requested from the server.}`);
        res.status(200).json(character);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

//Route for creating a new character
router.post("/newchar/:id", auth, async (req, res) => {
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

//PUT route for updating character stats
router.put("/charupdate/:id", auth, async (req, res) => {
    try {
        const character = await Character.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true })

        console.log(`${character.characterName} has been updated.`)
        return res.json(character)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


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
    User.find().then(users => res.json(users))
});

module.exports = router;