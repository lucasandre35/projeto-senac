const express = require('express');
const router = express.Router();
const controller = require('../controller/musicaController');


router.get("/", controller.getAllMusica);
router.post("/", controller.createMusica);
router.put("/:id", controller.updateMusica)
router.patch("/:id/favorited", controller.updateFavoritedStatus)
router.get("/:title", controller.getMusicabytitle)
router.get("/:id", controller.getMusica)
router.delete("/:id", controller.deleteMusica)

module.exports = router;