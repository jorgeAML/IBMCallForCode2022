const express = require('express');
const router = express.Router();
const findTrashController = require('../controllers/findTrashController');

router.get('/findTrash', findTrashController.index, findTrashController.indexView);
router.get('/findTrash/new', findTrashController.new);
router.post('/findTrash/create', findTrashController.create, findTrashController.redirectView);

module.exports = router;