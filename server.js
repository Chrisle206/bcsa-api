const express = require('express');
require('dotenv').config();
const db = require('./config/connection');
const MongoStore = require('connect-mongo');
const routes = require('./routes');
// const session = require('express-session');
const cors = require("cors");


const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

// const sess = {
//   secret: process.env.TOKEN_KEY,
//   cookie: {
//     maxAge: 86400000
//   },
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({
//     mongoUrl: 'mongodb://localhost:27017/rpgDB',
//     ttl: 14 * 24 * 60 * 60,
//     autoRemove: 'native' 
// })
// };


// app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
