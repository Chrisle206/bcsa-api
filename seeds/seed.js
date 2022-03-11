const { User, Enemy, Character } = require("../models");

const enemies = [
    {
        enemyName:"Joe Rehfuss",

        level: 1000,
        
        attacks: [
            "Room Mute",
            "Random Name Selector",
            "Confusing Demo",
            "Manatee Joke",
            "Bahamut Bash",
            "Shiva Shank",
            "La Croix Heal"
        ],

        dialogue: [
          "Remember to check into class on bootcampspot!",
          "Joes infernal soul has been locked away in an infinite Javascript loop."  
        ],

        idles: [
            "Joe is busy trying to get his cat off of the keyboard.",
            "Joe seems to be daydreaming about manatees.",
            "Joe seems too preoccupied with playing Stardew Valley to attack."
        ],

        taunts: [
            "Class participation is mandatory!",
            "You should know this stuff already!",
            "How do fish unlock their houses? With their manakeys!",
        ],

        image: '',

        hp: 500,
        atk: 50,
        def: 50

    }, 

    {
        enemyName:"Frantz Felix",

        level: 75,

        attacks: [
            "Algorithm Challenge",
            "Dead Headset",
            "Remote Access",
        ],

        dialogue: [
          "Frantz appears to be saying something but doesn't realize his headset has died."  
        ],

        idles: [
            "Frantz is trying on different hats.",
            "Frantz is busy drawing a diagram of a linked list."
        ],

        taunts: [],

        image: '',

        hp: 500,
        atk: 50,
        def: 50

    }, 

    {
        enemyName:"Brett Belka",

        level: 75,

        attacks: [
            "Bad Grade",
            "Cap Attack",
            "Snowboard Bash",
        ],

        dialogue: [
          "Brett positions his ski poles for striking."  
        ],

        idles: [
            "Brett keeps getting interrupted by his children.",
            "Brett is googling something and ignoring you."
        ],

        taunts: [
            "Brett's kind expression seems to belie a subtle hint of wrath.",
            "Brett is not amused.",
            "Good effort overall! But it won't be enough."
        ],

        image: '',

        hp: 500,
        atk: 50,
        def: 50

    }, 

    {
        enemyName:"Louis Coleman",

        level: 75,

        attacks: [
            "Louis's Wrath",
            "Raid Rage",
            "Charizard's Flamethrower",
        ],

        dialogue: [
          "I'll save you the headache and end this quickly."  
        ],

        idles: [
            "Louis looks like he'd rather be playing FFXIV.",
            "Louis is AFK.",
            "Louis seems preoccupied with peacocking his one-line functions.",
        ],

        taunts: [
            "No, no, no. Stop what you're doing. Back up.",
            "How would you monetize this?",
            "Louis glares menacingly."
        ],

        image: '',

        hp: 500,
        atk: 50,
        def: 50

    }, 

]

//These enemies are placeholders for demo purposes. They can be reutilized in adventure mode if we have time to develop it.
const extraEnemies = [
    {
        enemyName:"Evil Bug",

        level: 5,

        attacks: [
            "Console Crash",
            "null",
            "undefined"
        ],

        dialogue: [
          "Tzzt!",
          "The bug has been squished."
        ],

        idles: [
            "The bug looks like it's hiding something.",
            "The bug is shouting in a red-colored font.",
            "The bug seems to jitter about.",
        ],

        taunts: [
            "Tzzt!",
        ],

        image: '',

        hp: 100,
        atk: 5,
        def: 1

    }, 

    {
        enemyName:"CS Major",

        level: 10,

        attacks: [
            "Obscure Rambling",
            "Student Debt",
            "Bitterness"
        ],

        dialogue: [
          "Imposter!",
        ],

        idles: [
            "The student looks too tired and miserable to attack.",
        ],

        taunts: [
            "Noob!",
        ],

        image: '',

        hp: 150,
        atk: 10,
        def: 5

    }, 

    {
        enemyName:"Corrupted AI",

        level: 15,

        attacks: [
            "Uncanny Valley",
            "The Singularity",
            "Quantum Kick"
        ],

        dialogue: [
          "HELLO I AM HUMAN",
        ],

        idles: [
            "DO NOT FEAR THE FUTURE",
        ],

        taunts: [
            "MACHINES WILL INHERIT THE EARTH",
        ],

        image: '',

        hp: 150,
        atk: 10,
        def: 5

    }, 

]

const characters = [
    {
        characterName: "BCS Champ",

        level: 100,

        currency: 10000,

        attacks: [
            {atkName: "Atk1", atkDmg: [30]}, 
            {atkName: "Atk2", atkDmg: [30]}, 
            {atkName: "Atk3", atkDmg: [30]}, 
            {atkName: "Atk4", atkDmg: [30]}, 
        ],

        items: [
            "Potion of Postponement",
            "Hu-Mongo Mallet",
            "Sword of Sequelize",
            "Shiva's Fang",
            "Brett's Skis", 
            "Louis' Sunglasses"
        ],

        image: '',

        hp: 1000,
        atk: 250,
        def: 250

    }
]

const users = [
    {
        username:"shawnanalla",
        password:"password",
    },
    {
        username:"chrisle",
        password:"password",
    },
    {
        username:"datnguyen",
        password:"password",
    },
    {
        username:"bendo",
        password:"password",
    },
]


const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const connection = require("../config/connection");

//Hash passwords before inserting into collection
for (let i = 0; i < users.length; i++) {
    const element = users[i];
    users[i].password = bcrypt.hashSync(users[i].password, 10, function(err, hash) {
        if (err) return next(err);
        users[i].password = hash;
    });
    
}
// users[0].password = bcrypt.hashSync(users[0].password, 10, function(err, hash) {
//     if (err) return next(err);
//     // override the cleartext password with the hashed one
//     users[0].password = hash;
//     // next();
// });

// bcrypt.genSalt(10, function(err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hashSync(users[0].password, 10, function(err, hash) {
//         if (err) return next(err);
//         // override the cleartext password with the hashed one
//         users[0].password = hash;
//         next();
//     });
// });


//use mongoose methods to seed, not mongo
//create character, create user, find character, update user
connection.once('open', async ()=> {

    await User.deleteMany({});
    await Enemy.deleteMany({});
    await Character.deleteMany({});
    
    const usersDB = await User.insertMany(users);
    await Enemy.insertMany(enemies);
    const charDB = await Character.insertMany(characters);

    usersDB[0].characters.push(charDB[0]._id);
    await usersDB[0].save();

    console.log("Seed successful!");
    process.exit(0);

});

// try {
//     const enemyCollection = client.db("rpgDB").collection("enemies");
//     const charCollection = client.db("rpgDB").collection("characters");
//     const userCollection = client.db("rpgDB").collection("users");

//     await userCollection.drop();
//     await enemyCollection.drop();
//     await charCollection.drop();
    
//     await enemyCollection.insertMany(enemies);
//     await charCollection.insertMany(characters);
//     await userCollection.insertMany(users);

//     // hashPw()

//     // Does not create any users
//     // for (const user of users) {
//     //     console.log(user)
//     //     const newUser = await User.create({user}, function(err) {
//     //         if (err) throw err;
        
//     //     console.log(newUser);
//     //     userCollection.insertOne(newUser);   
//     //     })   
//     // }

//     //Does not create any users
//     // const testUser = User.create(users[0])
//     // userCollection.insertOne(testUser);

//     //Does not create any users
//     // const asyncCreate = async ()=>  {
//     //     for (let i = 0; i < users.length; i++) {
//     //         // console.log(users[i])
//     //         const newUser = await User.create(users[i])
//     //         console.log(newUser)
//     //         await userCollection.insertOne(newUser)
//     //     }
//     // }
//     // asyncCreate();

//     //Does not create any users
//     // console.log(users[0])
//     // const asyncCreate = async () => {
//     //     const testUser = await User.create(users[0])
//     //     .then(testUser => {
//     //         console.log(testUser);
//     //         userCollection.insertOne(testUser);
//     //     })

//     // }
//     // asyncCreate();

//     console.log("Seed successful!");
//     process.exit(0);
//     // client.close();

// } catch (err) {
//     console.log(err.stack);
// }