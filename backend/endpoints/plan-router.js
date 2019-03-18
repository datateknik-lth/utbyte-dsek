const express = require("express");
const mongoose = require("mongoose");
require('./../../models/StudyPlan');

const router = express.Router();
const StudyPlan = mongoose.model('StudyPlan');

// Get all study plans
router.route("/").get((req, res) => {
    StudyPlan.find({}, (plans) => {
        res.json(plans);
    });
});

module.exports = router;