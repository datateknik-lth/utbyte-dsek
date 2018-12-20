const express = require('express');
const router = express.Router();
const jsonDoc = require('../python/data.json');

//Respond to any requests to the root url
router.get('/', (req, res) => {

    // Read uni data from server
    res.render('front_page', {title: "Utbyte på D-sek", data: jsonDoc});

});

router.get('/*')

module.exports = router;
