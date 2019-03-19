const express = require("express");
const mongoose = require("mongoose");
require('./../../models/StudyPlan');
//require("./../../models/Uni");

const router = express.Router();
const StudyPlan = mongoose.model('StudyPlan');
const Uni = mongoose.model("Uni");

// Get all study plans
router.route("/").get((req, res) => {
    StudyPlan.find({}, (plans) => {
        res.json(plans);
    });
});

// Upload a new study plan
router.route("/add").post((req, res) => {
    console.log(req.body);
    const uni = req.body.university;
    Uni.find().byName(uni).exec((err, uni) => {
        if (err) {
            res.json({msg: "Failed to find university " + uni, reason: err});
        } else {
            const body = req.body;
            body.university = uni[0]._id;
            const plan = new StudyPlan(body);

            plan.save()
                .then(_ => {
                    res.status(200).json({"msg": "StudyPlan was added successfully!"});
                })
                .catch(err => {
                    res.status(400).json({msg: "Failed to add StudyPlan!", reason: err})
                });
        }
    })

});

module.exports = router;