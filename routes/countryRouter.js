const express = require('express');
const router = express.Router();

//Respond to any requests to the root url
router.get('/:country', (req, res) => {
    const country = req.params.country;
    // Read uni data from server
    //res.render('front_page', {title: "Utbyte på D-sek", data: jsonDoc});

});

module.exports = router;
