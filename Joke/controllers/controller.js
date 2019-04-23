const Joke = require('../models/joke')


// opret en joke
exports.createJoke = function (setup, punchline) {
    let joke = new Joke({
        setup: setup,
        punchline: punchline
    })
    return joke.save();
};


// funktion til joke
exports.getJoke = function (id) {
    return Joke.findOne({_id: id}).exec();
};

// funktion til alle jokes
exports.getAllJokes = function () {
    return Joke.find().exec();

};

