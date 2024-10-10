const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
    workshop: { type: Schema.Types.ObjectId, ref: 'Workshop', required: true },
    vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    services: [{ name: String, price: Number }],
    date: { type: Date, default: Date.now },
    totalCost: { type: Number, default: 0 }
});

// Pre-save hook to calculate total cost
maintenanceSchema.pre('save', function (next) {
    this.totalCost = this.services.reduce((total, service) => total + service.price, 0);
    next();
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
