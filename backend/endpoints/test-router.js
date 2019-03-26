const express = require("express");
const mongoose = require("mongoose");
require('./../../models/Test');
const path = require("path");
const fs = require("fs");
const router = express.Router();

const Busboy = require("busboy");

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
            console.log(req.body);
        }
    });

    // A file was recieved
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        console.log("File incoming: " + filename);
        var saveTo = path.join('.', filename);
        console.log('Uploading: ' + saveTo);
        file.pipe(fs.createWriteStream(saveTo));
    });

    // We're done here boys!
    busboy.on('finish', function () {
        console.log('Upload complete');
        res.end("That's all folks!");
    });
    return req.pipe(busboy);
});

module.exports = router;