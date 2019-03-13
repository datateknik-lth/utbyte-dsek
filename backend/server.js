require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


// Create a new express app and set the port
const app = express();
const PORT_EXPRESS = 3000;

app.use(cors());
app.use(bodyParser.json())


// Connect to mongoose database
mongoose.connect(`${process.env.DATABASE}`, {useNewUrlParser: true});
mongoose.promise = global.Promise;

let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('connected', function () {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    if (process.argv[2] == "populate") {
        //uploadUnis(data);
    }
});

// Start our express server
app.listen(PORT_EXPRESS, () => {
    console.log("Server is up and running on port: " + PORT_EXPRESS);
})
