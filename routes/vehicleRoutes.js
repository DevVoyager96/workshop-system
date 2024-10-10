const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/', vehicleController.createVehicle);        // Criar Veículo
router.get('/', vehicleController.getVehicles);           // Listar Veículos
router.get('/:id', vehicleController.getVehicleById);     // Listar Veículo por ID
router.put('/:id', vehicleController.updateVehicle);      // Atualizar Veículo
router.delete('/:id', vehicleController.deleteVehicle);   // Deletar Veículo

module.exports = router;
