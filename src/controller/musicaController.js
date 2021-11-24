const musica = require("../models/musica.json");
const fs = require("fs");

const getAllMusica = (req, res) => {
    console.log(req.url)
    res.status(200).send(musica)

    res.send(musica);
};


const createMusica = (req, res) => {
    const { id, title, duration, lunchyear, favorited, artists } = req.body
    musica.push({ id, title, duration, lunchyear, favorited, artists })
    fs.writeFile("./src/models/musica.json", JSON.stringify(musica), 'utf8', function (err) { 
        if (err) {
            res.status(500).send({ message: err });
        } else {
            console.log("Arquivo atualizado com sucesso!");
            const musicaFound = musica.find(musica => musica.id == id);     
            res.status(200).send(musicaFound);
        }
    })
}

module.exports = {
    createMusica,
    getAllMusica,
};