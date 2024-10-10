const Maintenance = require('../models/Maintenance');
const Workshop = require('../models/Workshop');
const Vehicle = require('../models/Vehicle');


exports.createMaintenance = async (req, res) => {
    try {
        const maintenance = new Maintenance(req.body);
        await maintenance.save();
        res.status(201).json(maintenance);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMaintenances = async (req, res) => {
    try {
        const maintenances = await Maintenance.find();
        res.json(maintenances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMaintenanceById = async (req, res) => {
    try {
        const maintenance = await Maintenance.findById(req.params.id).populate('workshop vehicle');
        if (!maintenance) return res.status(404).json({ message: 'Manutenção não encontrada' });
        res.json(maintenance);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!maintenance) return res.status(404).json({ message: 'Manutenção não encontrada' });
        res.json(maintenance);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndDelete(req.params.id);
        if (!maintenance) return res.status(404).json({ message: 'Manutenção não encontrada' });
        res.json({ message: 'Manutenção deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
