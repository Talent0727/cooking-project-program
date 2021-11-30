const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();


const app = express();
const mongodb_uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;


mongoose.connect(mongodb_uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection to MongoDB is up')
});


const recipeRouter = require('./routes/recipes');
app.use('/recipes', recipeRouter);


app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
);

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})