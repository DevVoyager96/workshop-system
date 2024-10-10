const Vehicle = require('../models/Vehicle');
const Maintenance = require('../models/Maintenance');

exports.createVehicle = async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).lean();
        if (!vehicle) return res.status(404).json({ message: 'Veículo não encontrado' });

        const maintenances = await Maintenance.find({ vehicle: req.params.id });
        vehicle.maintenances = maintenances;

        res.json(vehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vehicle) return res.status(404).json({ message: 'Veículo não encontrado' });
        res.json(vehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) return res.status(404).json({ message: 'Veículo não encontrado' });
        res.json({ message: 'Veículo deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
