const express = require('express');
const router = express.Router();
const controller = require('../controller/musicaController');


router.get("/", controller.getAllMusica);
router.post("/", controller.createMusica);
router.get("/:title", controller.getMusicabytitle)
router.get("/:id", controller.getMusica)
module.exports = router;