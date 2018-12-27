const express = require('express');
const router = express.Router();
const data = require('../data.json');

//Respond to any requests to the root url
router.get('/:country/:uni', (req, res) => {
    const uni = req.params.uni;
    const country = req.params.country;

    //res.render('uni',{title: data[country].unis[uni], uni: data[country].unis[uni]});
    res.render('fuck', {title: "FUCK!"})
});

module.exports = router;
