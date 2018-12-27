const express = require('express');
const router = express.Router();
const data = require('../data.json');
const mongoose = require('mongoose');

//Respond to any requests to the root url
const Uni = mongoose.model('Uni');
router.get('/:country', (req, res) => {
    const country = req.params.country;

    Uni.find().byCountry(country).exec((err, unis) => {

        if (err)
            console.log(err);
        else if (unis.length < 1) {
            res.render('not_found', {title: "Page not found"});
        }
        else {
            console.log(unis)
            res.render('country', {
                title: `Universities in ${unis[0].country}`,
                country: country,
                country_name: unis[0].country,
                unis: unis
            });
        }
    });
});

module.exports = router;
