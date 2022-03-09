const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
const saltRounds = 3;
// userSchema.plugin(require('mongoose-bcrypt'));

// Schema to create User model
const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
      trim:true,
      unique:true
    },
    password: {
      type: String,
      required: true,
      max_length: 50,
    },
    token: {
      type: String,
    },
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'character'
      }
    ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

const User = model('user', userSchema);

module.exports = User;