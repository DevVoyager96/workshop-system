const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshopController');

router.post('/', workshopController.createWorkshop);       // Criar Oficina
router.get('/', workshopController.getWorkshops);          // Listar Oficinas
router.get('/:id', workshopController.getWorkshopById);    // Listar Oficina por ID
router.put('/:id', workshopController.updateWorkshop);     // Atualizar Oficina
router.delete('/:id', workshopController.deleteWorkshop);  // Deletar Oficina

module.exports = router;
