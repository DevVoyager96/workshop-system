const Workshop = require('../models/Workshop');
const Maintenance = require('../models/Maintenance');

exports.createWorkshop = async (req, res) => {
    try {
        const workshop = new Workshop(req.body);
        await workshop.save();
        res.status(201).json(workshop);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find();
        res.json(workshops);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getWorkshopById = async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id).lean();
        if (!workshop) return res.status(404).json({ message: 'Oficina não encontrada' });

        
        const maintenances = await Maintenance.find({ workshop: req.params.id });
        workshop.maintenances = maintenances;

        res.json(workshop);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.updateWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workshop) return res.status(404).json({ message: 'Oficina não encontrada' });
        res.json(workshop);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id);
        if (!workshop) return res.status(404).json({ message: 'Oficina não encontrada' });
        res.json({ message: 'Oficina deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
