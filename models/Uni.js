const mongoose = require('mongoose');

const uniSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, unique: true},
    country: {type: String, required: true, trim: true},
    date_added: Date
}, {autoIndex: false});

/**
 * The normalized version of this unis name
 */
uniSchema.virtual('norm_name').get(function () {
    const norm_name = this.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "_")
        .toLowerCase();
    return norm_name;
});

/**
 * The normalized version of this unis country
 */
uniSchema.virtual('norm_country').get(function () {
    const norm_country = this.country
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "_")
        .toLowerCase();
    return norm_country;
})

/**
 * Finds all unis and returns them as values to their respective country (as key).
 *
 * Example of output:
 * {
 *     argentina: {
 *         unis: [uni1, uni2],
 *         pretty: Argentina
 *     },
 *     usa: {
 *         unis: [uni3, uni4],
 *         pretty: USA
 *     }
 * }
 * @param callback function that is called at end of exection like callback(unis).
 */
uniSchema.methods.getAllByCountry = function (callback) {
    this.model('Uni').find({}, function (err, res) {
        const countries = {};
        for (key in res) {
            const c_key = res[key].norm_country

            if (c_key in countries) {
                countries[c_key].unis.push(res[key]);
            } else {
                countries[c_key] = {unis: [res[key]], pretty: res[key].country};
            }
        }

        callback(countries);
    })
};

uniSchema.query.byCountry = function(country) {
    return this.where({$or: [{country: new RegExp(country, 'iu')}, {norm_country: new RegExp(country, 'iu')}]});
}

uniSchema.index({norm_name: 1, norm_country: 1}, {unique: true});

module.exports = mongoose.model('Uni', uniSchema, 'universities');