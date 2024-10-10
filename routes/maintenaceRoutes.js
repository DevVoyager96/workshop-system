const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.post('/', maintenanceController.createMaintenance);        // Registrar Manutenção
router.get('/', maintenanceController.getMaintenances);           // Listar Manutenções
router.get('/:id', maintenanceController.getMaintenanceById);     // Listar Manutenção por ID
router.put('/:id', maintenanceController.updateMaintenance);      // Atualizar Manutenção
router.delete('/:id', maintenanceController.deleteMaintenance);   // Deletar Manutenção

module.exports = router;
