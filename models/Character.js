const { Schema, model, Types } = require('mongoose');

// Schema to create Enemy model
const characterSchema = new Schema(
  {
    characterId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    characterName: {
      type: String,
      required: true,
      max_length: 50,
      trim:true,
    },

    characterClass: {
      type: String,
      required: true,
    },

    level: {
      type: Number,
      required: true,
      default: 1
    }, 

    currency: {
      type: Number,
      default: 0
    },

    exp: {
      type: Number,
      default: 0,
    },

    attacks: [],

    items: [],

    image: '',

    hp: 0,

    atk: 0,

    def: 0

  },
  {
    toJSON: {
      getters: true,
    },
  }
);


const Character = model('character', characterSchema);

module.exports = Character;