const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();



// GET
router
    .get('/', (req, res) =>{
    controller.getAllJokes()
        .then(result => res.json(result))
        .catch(err => {
            console.error("Error " + err);
        });
})
.get('/othersite', (req, res) =>{
    controller.getOtherSites();
})
.get('/otherjokes', (req, res) =>{
    controller.getOtherJokes(req.params.id).then((data) => {
        res.json(data)
    })
})

// POST
.post('/', (req, res) =>{

    const setup = req.body.setup;
    const punchline = req.body.punchline;
    controller.createJoke(setup,punchline)
        .then( result =>{
                res.json({message: 'createt'});
            }
        ).catch(err => {
            console.error("Error: " + err);
            if (err.stack) console.error(err.stack);
            res.status(500).send(err);
    });
});

module.exports = router;