const mongoose = require('mongoose');

const test = new mongoose.Schema({
    name: {type: String},
    file: { type: Buffer, required: true}
});

module.exports = mongoose.model('Test', test, 'tests');