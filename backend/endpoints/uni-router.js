const express = require("express");
const mongoose = require("mongoose");
require('./../../models/Uni');

const router = express.Router();
const Uni = mongoose.model('Uni');

// Get all unis
router.route("/").get((req, res) => {
    Uni.find({}, (err, unis) => {
        res.json(unis);
    });
});

// Find uni by normalized name
router.route("/by_uni/:name_norm").get((req, res) => {
    const name = req.params["name_norm"];
    Uni.find().byName(name).exec((err, unis) => {
        if (unis.length > 0)
            res.json(unis[0]);
        else
            res.status(400).json(`University ${name} could not be found.`);
    })
})

router.route("/by_country/:name_norm")

module.exports = router;