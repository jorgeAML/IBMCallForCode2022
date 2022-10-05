const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.indexReycleForAdmin,adminController.garbageFind ,adminController.indexViewRecycleForAdmin);
router.get('/admin/:id/edit', adminController.edit);
router.get('/admin/:id/editGarbage', adminController.garbageEdit);
router.put('/admin/:id/update', adminController.update,adminController.garbageUpdate, adminController.redirectView);
router.delete('/admin/:id/delete', adminController.delete, adminController.garbageDelete, adminController.redirectView);

module.exports = router;