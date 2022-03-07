const { Schema, model, Types } = require('mongoose');

// Schema to create Enemy model
const enemySchema = new Schema(
  {
    enemyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    enemyName: {
      type: String,
      required: true,
      max_length: 50,
      trim:true,
      unique:true
    },

    attacks: [],

    idles: [],

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


const Enemy = model('enemy', enemySchema);

module.exports = Enemy;