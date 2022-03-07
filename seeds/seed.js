const users = [
    {
        username:"shawnanalla",
        password:"metagross",
    }
]

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
          "Remember to check into class on bootcampspot!"  
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
          ""  
        ],

        idles: [
            "Brett keeps getting interrupted by his children.",
            "Brett is googling something and ignoring you."
        ],

        taunts: [
            "Brett's kind expression seems to belie a subtle hint of wrath.",
            "Brett is not amused."
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
            "Louis looks like he'd rather be playing FFXIV",
            "Louis is AFK",
            "Louis seems preoccupied with peacocking his one-line functions",
        ],

        taunts: [
            "No, no, no. Back up.",
            "How would you monetize this?",
            "Louis glares menacingly."
        ],

        image: '',

        hp: 500,
        atk: 50,
        def: 50

    }, 

]

const characters = [
    {
        characterName: "BCS Champ",

        level: 80,

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
        atk: 1000,
        def: 1000

    }
]

const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

const seed = async ()=> {
    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");
        const userCollection = client.db("rpgDB").collection("users");
        const enemyCollection = client.db("rpgDB").collection("enemies");
        const charCollection = client.db("rpgDB").collection("characters");

        userCollection.drop();
        enemyCollection.drop();
        charCollection.drop();

        userCollection.insertMany(users);
        enemyCollection.insertMany(enemies);
        charCollection.insertMany(characters);

        console.log("Seed successful!");
        process.exit(0);
        // client.close();

    } catch (err) {
        console.log(err.stack);
    }
}

seed();