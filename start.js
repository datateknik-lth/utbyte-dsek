require('dotenv').config();
const mongoose = require('mongoose');
const data = require('./data.json');

// Connect to database
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function () {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    //uploadUnis(data);
    // const Uni = mongoose.model('Uni');
    // Uni.find({}, function (err, res) {
    //     if (err) {
    //         console.log(err)
    //         return;
    //     } else {
    //         //console.log(res);
    //         console.log(res[0].norm_name);
    //     }
    // })
});

require('./models/Uni')  // Require models to use in app
const app = require('./app');
const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});

/**
 * Function that uploads entries for each university in the
 * json data generated by python scripts
 * @param data JSON document generated by python script (read_unis)
 */
let uploadUnis = function (data) {
    const doc = {};
    require('./models/Uni')
    const Uni = mongoose.model('Uni');

    for (country_key in data) {
        const unis = data[country_key].unis;
        const country = data[country_key].pretty;
        for (uni_key in unis) {
            doc.name = unis[uni_key];
            doc.date_added = new Date();
            doc.country = country;

            const u = new Uni(doc);
            // Uni.updateOne(doc, doc, {upsert: true}, (err, res) => {
            //     if (err)
            //         console.log(err);
            // })
            u.save()
                .then(() => {
                    console.log("Saved: \n" + u);
                })
                .catch(() => {
                    console.log("Failed: \n" + u);
                })
        }
    }

}