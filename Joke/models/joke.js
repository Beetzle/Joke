const mongoose = require('mongoose')
const schema = mongoose.Schema

const jokeSchema = new schema({
    setup: String,
    punchline: 'String'

});

module.exports = mongoose.model('Joke', jokeSchema);
