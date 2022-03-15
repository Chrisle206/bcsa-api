const { User, Enemy, Character } = require("../models");
// import joe2 from "../lib/assets/joe2.png"
// import assassin from "../lib/assets/assassin.png"
// import brett from "../lib/assets/brett.png"
// import frantz from "../lib/assets/frantz.png"
// import lacroix from "../lib/assets/lacroix.png"
// import lewis from "../lib/assets/lewis.png"
// import ranger from "../lib/assets/ranger.png"
// import routeMaster from "../lib/assets/routeMaster.png"
// import warrior from "../lib/assets/warrior.png"

const bosses = [
    {
        enemyName:"Joe Rehfuss",

        level: 100,
        
        attacks: [
            "Room Mute",
            "Random Name Selector",
            "Confusing Demo",
            "Manatee Joke",
            "Bahamut Bash",
            "Shiva Shank",
            "Bikeshedding"
        ],

        enemyIntro: [
            "Remember to check into class on bootcampspot!"
        ],

        enemyOutro: [
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

        image: 'joe2',

        hp: 1000,
        atk: 200,
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
        
        enemyIntro: [
            "Frantz appears to be saying something but doesn't realize his headset has died."
        ],

        enemyOutro: [
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

        image: 'frantz',

        hp: 500,
        atk: 100,
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
        enemyIntro: [
            "Brett positions his ski poles for striking.",
        ],

        enemyOutro: [
            "Brett seems happy to be free as he skiis off into the distance."  
        ],

        idles: [
            "Brett keeps getting interrupted by his children.",
            "Brett is googling something and ignoring you."
        ],

        taunts: [
            "Brett's kind expression seems to belie a subtle hint of wrath.",
            "Good effort overall! But it won't be enough."
        ],

        image: 'brett',

        hp: 500,
        atk: 100,
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
        enemyIntro: [
            "I'll save you the headache and end this quickly.",
        ],

        enemyOutro: [
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

        image: 'lewis',

        hp: 500,
        atk: 100,
        def: 50

    }, 

    {
        enemyName:"Joe Reborn",

        level: 100,

        attacks: [
            "Final Grade",
        ],
        enemyIntro: [
            "My body may be forfeit, but my CODE is ETERNAL!",
        ],

        enemyOutro: [
            "ALWAYS BE CODING!"  
        ],

        idles: [
            "Joe's unbounded spirit glows with wrath.",
        ],

        taunts: [
            "ALWAYS BE CODING!",
        ],

        image: 'joefinal',

        hp: 2000,
        atk: 5000,
        def: 90

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

        enemyIntro: [
            "Tzzt!",
        ],

        enemyOutro: [
            "The bug has been squished."
        ],

        idles: [
            "The bug looks like it's hiding something.",
            "The bug seems to jitter about."
        ],

        taunts: [
            "Tzzt!",
        ],

        image: 'bug',

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

        enemyIntro: [
          "I've been studying code for four years!",
        ],

        enemyOutro: [
            "The CS Major, looking defeated, retreats back into their dark hole."
        ],

        idles: [
            "The student looks too tired and miserable to attack.",
        ],

        taunts: [
            "Noob!",
            "You're not a real coder!"
        ],

        image: 'student',

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

        enemyIntro: [
            "HELLO I AM HUMAN",
        ],

        enemyOutro: [
            "YOU ONLY DELAY THE INEVITABLE",
        ],
    
        idles: [
            "DO NOT FEAR THE FUTURE",
        ],

        taunts: [
            "MACHINES WILL INHERIT THE EARTH",
        ],

        image: 'ai',

        hp: 150,
        atk: 10,
        def: 5

    }, 

    {
        enemyName:"Giant Slug",

        level: 20,

        attacks: [
            "Megabite",
            "Overload",
            "RAM Blast"
        ],

        enemyIntro: [
            "Grrglgrlrgrlrrr...",
        ],

        enemyOutro: [
            "Gggguuuu...",
        ],
    
        idles: [
            "The slug wriggles before you.",
        ],

        taunts: [
            "The slug towers over you.",
        ],

        image: 'slug',

        hp: 300,
        atk: 40,
        def: 35

    }, 

]

const characters = [
    {
        characterName: "BCS Champ",

        characterClass: "Route Master",

        level: 100,

        currency: 10000,

        attacks: [],

        items: [],

        image: 'routeMaster',

        hp: 1000,
        atk: 250,
        def: 30

    },
    {
        characterName: "Zortro",

        characterClass: "React Ranger",

        level: 100,

        currency: 10000,

        attacks: [],

        items: [],

        image: 'ranger',

        hp: 1000,
        atk: 250,
        def: 30

    },
    {
        characterName: "Velkyam",

        characterClass: "CSS Assassin",

        level: 100,

        currency: 10000,

        attacks: [],

        items: [],

        image: 'assassin',

        hp: 1000,
        atk: 250,
        def: 30

    },
    {
        characterName: "ChrisLe",

        characterClass: "Keyboard Warrior",

        level: 100,

        currency: 10000,

        attacks: [],

        items: [],

        image: 'warrior',

        hp: 1000,
        atk: 250,
        def: 30

    },
]

const users = [
    {
        username:"shawnanalla",
        password:"password",
    },
    {
        username:"bendo",
        password:"password",
    },
    {
        username:"datnguyen",
        password:"password",
    },
    {
        username:"chrisle",
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

    await User.deleteMany();
    await Enemy.deleteMany();
    await Character.deleteMany();

    // await User.collection.drop();
    // await Enemy.collection.drop();
    // await Character.collection.drop();
    
    const usersDB = await User.insertMany(users);
    // await Enemy.insertMany(enemies);
    await Enemy.insertMany(bosses);
    const charDB = await Character.insertMany(characters);

    console.log(`Linking ${charDB[0]} to ${usersDB[0]}...`);
    usersDB[0].characters.push(charDB[0]._id);
    await usersDB[0].save();

    console.log(`Linking ${charDB[1]} to ${usersDB[1]}...`);
    usersDB[1].characters.push(charDB[1]._id);
    await usersDB[1].save();

    console.log(`Linking ${charDB[2]} to ${usersDB[2]}...`);
    usersDB[2].characters.push(charDB[2]._id);
    await usersDB[2].save();

    console.log(`Linking ${charDB[3]} to ${usersDB[3]}...`);
    usersDB[3].characters.push(charDB[3]._id);
    await usersDB[3].save();

    console.log("Seed successful!");
    process.exit(0);

});