const config = require('./config/config');
const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const db = require('./config/db');
const app = express();
const port = process.env.PORT || 8000;
const EventEmitter = require('events');
const mEmitter = new EventEmitter();

let parserJson = bodyParser.json();

app.use(parserJson);

app.use(express.static(path.join(__dirname, 'build')));

init()
  .catch(error => console.error(error.message));
addProcessListener();


async function init(){
  let database = await MongoClient.connect(db.url, { useNewUrlParser: true });
  // Load routes
  routes(app, database.db('illpaydb'));


  app.listen(port, () => {
      console.log('Listen on port: ' + port);
  });
  mEmitter.on('closeDb', function() {
    database.close(function(){
      console.log('\nMongo disconnected on app termination');
      process.exit(0);
    })
    process.exit(0);
  });
}

function addProcessListener(){
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
  });
  process.on('SIGINT', function() {
    if(mEmitter.eventNames().find(item => item === 'closeDb')) {
      mEmitter.emit('closeDb');
    } else {
      process.exit(0);
    }
  });
}
console.log("Running in :"  + process.env.NODE_ENV);

