const { User, Enemy, Character } = require("../models");
import joe2 from "../lib/assets/joe2.png"
import assassin from "../lib/assets/assassin.png"
import joe2 from "../lib/assets/joe2.png"
import joe2 from "../lib/assets/joe2.png"
import joe2 from "../lib/assets/joe2.png"
import joe2 from "../lib/assets/joe2.png"
import joe2 from "../lib/assets/joe2.png"
import joe2 from "../lib/assets/joe2.png"

const bosses = [
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
            "Bikeshedding"
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

        image: joe2,

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
            "Remote Access Control",
        ],

        dialogue: [
          "Frantz appears to be saying something but doesn't realize his headset has died.",
          "Frantz turns off his camera and slips away into the darkness."  
        ],

        idles: [
            "Frantz is trying on different hats.",
            "Frantz is busy drawing a diagram of a linked list.",
            "Frantz seems suspiciously quiet."
        ],

        taunts: [
            "Frantz smiles at you after attacking.",
            "Frantz is not amused.",
        ],

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
            "Six-Page Resume",
            "Snowboard Bash",
        ],

        dialogue: [
          "Brett positions his ski poles for striking.",
          "Brett seems happy to have been defeated as he skiis off into the distance."  
        ],

        idles: [
            "Brett keeps getting interrupted by his children.",
            "Brett is googling something and ignoring you."
        ],

        taunts: [
            "Brett's kind expression seems to belie a subtle hint of wrath.",
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
          "I'll save you the headache and end this quickly.",
          "Louis seems fed up with you and leaves."  
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
const enemies = [
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
            "The bug seems to jitter about."
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

        characterClass: "Keyboard Warrior",

        level: 100,

        currency: 10000,

        attacks: [
            {atkName: "Atk1", atkDmg: [30]}, 
            {atkName: "Atk2", atkDmg: [30]}, 
            {atkName: "Atk3", atkDmg: [30]}, 
            {atkName: "Atk4", atkDmg: [30]}, 
        ],

        items: [
            "Round Pebble",
            "101 Manatee Jokes",
            "Bug Squisher",
            "Ronnel's Memoir",
            "Ring of Regex",
            "Node Docs",
            "La Croix",
            "Shiva's Fang",
            "Bahamut's Box",
            "DOM Map",
            "MIT License",
            "UDEMY Course Coupon",
            "Best Practices Handbook",
            "Mongo's Compass",
            "Flexbox Froggy",
            "Magic Keyboard",
            "Callback Quiver",
            "Orb of OOP",
            "Wand of Recursion",
            "Bootstrap Dagger",
            "Paradigm-Padded Armor",
            "Excalidraw",
            "Nodemon Dagger",
            "HashSync Shield",
            "Arcane Config",
            "API Skeleton Key",
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

connection.once('open', async ()=> {

    await User.deleteMany({});
    await Enemy.deleteMany({});
    await Character.deleteMany({});
    
    const usersDB = await User.insertMany(users);
    await Enemy.insertMany(enemies);
    await Enemy.insertMany(bosses);
    const charDB = await Character.insertMany(characters);

    usersDB[0].characters.push(charDB[0]._id);
    await usersDB[0].save();

    console.log("Seed successful!");
    process.exit(0);

});