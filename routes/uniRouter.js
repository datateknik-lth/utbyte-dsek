const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Respond to any requests to the root url
const Uni = mongoose.model('Uni');
router.get('/:country/:uni', (req, res) => {
    const uni = req.params.uni;
    const country = req.params.country;
    console.log(`Uni router Country: ${country}, Uni: ${uni}`);

    Uni.find().byCountry(country).exec((err, unis) => {
        const cp = unis[0].country;
        res.render('uni',{title: unis[0].name, country: country, country_pretty: cp, uni: unis[uni]});
    });
});

module.exports = router;
