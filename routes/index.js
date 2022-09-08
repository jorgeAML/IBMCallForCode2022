const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');
const usersController = require('../controllers/usersController');

/*HOME ROUTERS*/
router.get('/', homeController.respondWithIndex);
router.get('/conocenos', homeController.respondWithConocenos);
router.get('/servicios', homeController.respondWithServicios);
router.get('/contacto', homeController.respondWithContact);
router.get('/cursos', homeController.respondWithCurses);

/* LOGIN ROUTE */
router.get("/users/login", usersController.login);
/*router.post("/users/login", usersController.authenticate);
router.get("/users/logout", usersController.logout, usersController.redirectView);*/

module.exports = router;