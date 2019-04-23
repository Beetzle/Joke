const express = require('express');
const router = express.Router();


// GET
router
    .get('/', (req, res) =>{
        controller.getOtherSites()
            .then(result => res.json(result))
            .catch(err => {
                console.error("Error " + err);
            });
    })

module.exports = router;