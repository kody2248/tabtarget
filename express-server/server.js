// Get dependencies
require('dotenv').config();

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// Get our API routes
//const api = require('./routes/api');
const tags = require('./routes/tags');
const ui = require('./routes/ui');
const app = express();

console.log(process.env.MONGODB)

mongoose.connect('mongodb://mongodb:27017/tabtarget')
  .then(()=>{
    console.log('connected to mongo')
  })
  .catch(()=>{
    console.log('mongo connection failed')
  })

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

/** API Routes */
//app.use('/', api);
app.use('/api/tags', tags);
app.use('/api/ui', ui);



// _Get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// _Create HTTP server._
const server = http.createServer(app);

/*
 _ Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));