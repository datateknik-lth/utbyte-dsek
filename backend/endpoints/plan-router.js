const express = require("express");
const mongoose = require("mongoose");
const Busboy = require("busboy");
const path = require("path");
const fs = require("fs");
require('./../../models/StudyPlan');
require("./../../models/Test");
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
router.route("/add").post((req, res, next) => {
    let busboy = new Busboy({headers: req.headers});

    // A field was recieved
    busboy.on('field', function (fieldname, val, valTruncated, keyTruncated) {

        if (req.body.hasOwnProperty(fieldname)) { // Handle arrays
            if (Array.isArray(req.body[fieldname])) {
                req.body[fieldname].push(val);
            } else {
                req.body[fieldname] = [req.body[fieldname], val];
            }
        } else { // Else, add field and value to body
            req.body[fieldname] = val;
        }
    });

    // A file was recieved
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        const saveTo = path.join('.', filename);
        let readFile = null;

        file.on("data", () => {
            console.log("Got file data!");
        });

        file.on("end", () => {
            //How do I save the file to MongoDB?
        });
    });

    // We're done here boys!
    busboy.on('finish', function () {
        //console.log(req.body);
        console.log('Upload complete');
        res.end("That's all folks!");
    });
    return req.pipe(busboy);
});

// Upload a new study plan
// router.route("/add").post((req, res) => {
//     console.log(req.body);
//     const uni = req.body.university;
//     Uni.find().byName(uni).exec((err, uni) => {
//         if (err) {
//             res.json({msg: "Failed to find university " + uni, reason: err});
//         } else {
//             const body = req.body;
//             body.university = uni[0]._id;
//             const plan = new StudyPlan(body);
//
//             plan.save()
//                 .then(_ => {
//                     res.status(200).json({"msg": "StudyPlan was added successfully!"});
//                 })
//                 .catch(err => {
//                     res.status(400).json({msg: "Failed to add StudyPlan!", reason: err})
//                 });
//         }
//     })
//
// });

module.exports = router;