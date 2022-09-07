const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

/*HOME ROUTERS*/
router.get('/', homeController.respondWithIndex);
router.get('/conocenos', homeController.respondWithConocenos);
router.get('/servicios', homeController.respondWithServicios);
router.get('/contacto', homeController.respondWithContact);
router.get('/cursos', homeController.respondWithCurses);
router.get('/login', homeController.respondWithLogin);

module.exports = router;