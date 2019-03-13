const express = require("express");
const mongoose = require("mongoose");
require('./../../models/Uni');

const router = express.Router();
const Uni = mongoose.model('Uni');

router.route("/").get((req, res) => {
    const country = "australia";
    Uni.find({}, (err, unis) => {
        res.json(unis);
    });
});

module.exports = router;