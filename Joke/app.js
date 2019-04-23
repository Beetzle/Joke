
// INITIALIZATION
const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

app.use(express.static('public'));
app.use(express.json());


// Add to Joke Register
fetch('https://krdo-joke-registry.herokuapp.com/api/services', {method: 'POST', body: JSON.stringify(config.register),
headers: { 'Content-Type': 'application/json' }}).then(res => res.json())
    .then(json => console.log("Registry Response: " + JSON.stringify(json)));


// Mongoose
mongoose.connect(config.mongoDB,
    {useNewUrlParser: true }, (err) => {
        if(err) {
            console.log('Some problem with the connection ' + err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    });


// Middleware
app.set('view engine', 'hbs');

// ROUTES
const jokeRouter = require('./routes/jokes');
const jokeWebservices = require('./routes/jokeWebservices');
app.use('/api/jokes', jokeRouter);
app.use('/api/services', jokeWebservices);




//START SERVER
app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`)
})

