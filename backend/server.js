require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const data = require('./../data.json');

const misc = require("./misc/json-uploader");

// Create a new express app and set the port
const app = express();
const PORT_EXPRESS = 4000;

app.use(cors());
app.use(bodyParser.json())

// Connect to mongoose database
mongoose.promise = global.Promise;
mongoose.connect(`${process.env.DATABASE}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true})
    .then(() => {
        console.log(`Mongoose connection open on port [${process.env.DB_PORT}] to database [${process.env.DB_NAME}]`);
        if (process.argv[2] == "populate") {
            misc.uploadUnis(data);
        }
    })
    .catch(() => {
        console.error.bind(console, 'connection error:')
    });

// Register our endpoints API
const uniRouter = require("./endpoints/uni-router");
const studyPlanRouter = require("./endpoints/plan-router");
app.use("/unis", uniRouter);
app.use("/study-plans", studyPlanRouter);

// Start our express server
app.listen(PORT_EXPRESS, () => {
    console.log(`Express is up and running on port ${PORT_EXPRESS}`);
});

