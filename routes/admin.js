const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.indexReycleForAdmin ,adminController.indexViewRecycleForAdmin);
router.get('/admin/:id/edit', adminController.edit);
router.put('/admin/:id/update', adminController.update, adminController.redirectView);
router.delete('/admin/:id/delete', adminController.delete, adminController.redirectView);

module.exports = router;