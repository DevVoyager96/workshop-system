const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    specialties: [String],
});

module.exports = mongoose.model('Workshop', workshopSchema);
