const users = [
    {
        username:"shawnanalla",
        password:"metagross",
    }
]

//TODO: Talk to Chris about structure for attacks data for both enemies and user characters.
const enemies = [
    {
        enemyName:"Joe Rehfuss",
        attacks: [
            {atkName: "Room Mute", atkDmg: [30,50]}, 
            {atkName: "Random Name Selector", atkDmg: [50,60]}, 
            {atkName: "Confusing Demo", atkDmg: [40,50]}, 
            {atkName: "Manatee Joke", atkDmg: [20,30]}, 
            {atkName: "Bahamut Bash", atkDmg: [30,50]}, 
            {atkName: "Shiva Shank", atkDmg: [30,50]}, 
            {atkName: "La Croix Heal", atkDmg: [30,50]}, 
        ],

        attacks: [
            "Room Mute",
            "Random Name Selector",
            "Confusing Demo",
            "Manatee Joke",
            "Bahamut Bash",
            "Shiva Shank",
            "La Croix Heal"
        ],

        idles: [
            "Joe is busy trying to get his cat off of the keyboard.",
            "Joe seems to be daydreaming about manatees.",
            "Joe seems too preoccupied with playing Stardew Valley to attack."
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
        attacks: [
            {atkName: "Atk1", atkDmg: [30]}, 
            {atkName: "Atk2", atkDmg: [30]}, 
            {atkName: "Atk3", atkDmg: [30]}, 
            {atkName: "Atk4", atkDmg: [30]}, 
        ],

        items: [
            "Potion of Postponement",
            "Mongo Mallet",
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

const seed = async ()=> {
    await User.bulkCreate
}