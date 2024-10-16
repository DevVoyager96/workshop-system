const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshopController');

router.post('/', workshopController.createWorkshop);       
router.get('/', workshopController.getWorkshops);          
router.get('/:id', workshopController.getWorkshopById);    
router.put('/:id', workshopController.updateWorkshop);     
router.delete('/:id', workshopController.deleteWorkshop);  

module.exports = router;
