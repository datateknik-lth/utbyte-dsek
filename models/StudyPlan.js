const mongoose = require('mongoose');
require("./Uni");

const studyPlan = new mongoose.Schema({
    pdf: { type: Buffer, required: true},
    comments: {type: String, max: 2000},
    approved: {type: Boolean, required: true},
    uploaded_by: {type: String, trim: true, required: true},
    date_uploaded: {type: Date, required: true},
    university: {type: mongoose.Schema.Types.ObjectId, ref: 'Uni', required: true}
});

module.exports = mongoose.model('StudyPlan', studyPlan, 'studyplans');