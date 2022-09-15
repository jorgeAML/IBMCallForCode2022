const express = require('express');
const router = express.Router();
const recycleController = require('../controllers/easyRecycleController');

router.get('/recycle', recycleController.index, recycleController.indexView);
router.get('/recycle/new', recycleController.new);
router.post('/easyRecycle/create', recycleController.create, recycleController.redirectView);
module.exports = router;