const express = require('express');
const router = express.Router();
const controller = require('../controller/musicaController');


router.get("/", controller.getAllMusica)


module.exports = router;