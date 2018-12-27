const express = require('express');
const router = express.Router();
//const jsonDoc = require('../data.json');
const mongoose = require('mongoose');

//Respond to any requests to the root url
const Uni = mongoose.model('Uni');
router.get('/', (req, res) => {
    // Read uni data from server
    Uni.getAllByCountry(function(allCountries) {
        res.render('front_page', {title: "Exchange studies at D-sek", data: allCountries});
    })
});

module.exports = router;
