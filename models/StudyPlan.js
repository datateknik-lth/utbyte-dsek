const mongoose = require('mongoose');


const studyPlan = new mongoose.Schema({
    pdf: { type: Buffer, required: true},
    comments: String,
    approved: {type: Boolean, required: true},
    uploaded_by: {type: String, trim: true, required: true},
    date_uploaded: {type: Date, required: true},
    university: {type: mongoose.Types.ObjectId, required: true}
});

module.exports = mongoose.model('StudyPlan', studyPlan, 'studyplans');