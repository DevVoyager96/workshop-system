const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    plate: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    owner: { type: String, required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
