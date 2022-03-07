const express = require('express');
require('dotenv').config();
const db = require('./config/connection');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

//TODO: Replace sessions with JWT
const sess = {
  secret: process.env.TOKEN_KEY,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/rpgDB',
    ttl: 14 * 24 * 60 * 60,
    autoRemove: 'native' 
})
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
