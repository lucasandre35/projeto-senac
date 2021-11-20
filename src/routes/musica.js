const express = require('express');
const router = express.Router();
const Controller = require('../controller/musicaController')


router.get("/", controller.getAll);
router.get("/musicas", controller.getAll);

module.exports = router;