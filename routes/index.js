const express = require('express');
const router = express.Router();
const jsonDoc = require('../python/data.json');

//Respond to any requests to the root url
router.get('/', (req, res) => {
    // Read uni data from server
    console.log(req.params)
    res.render('front_page', {title: "Utbyte på D-sek", data: jsonDoc});

});

module.exports = router;
