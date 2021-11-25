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

const getMusica = (req, res) => {
    const musicaid = req.params.id
    const musicaFound = musica.find((musica) => musica.id == musicaid)
    if (musicaFound){
        res.status(200).send(musicaFound)
    } else {
        res.status(404).send({ message :"musica não encontrada"})
    }
}

const getMusicabytitle = (req, res) => {
    const musicatitle= req.params.title
    const musicaFound = musica.find((musica) => musica.title == musicatitle)
    if (musicaFound){
        res.status(200).send(musicaFound)
    } else {
        res.status(404).send({ message :"Titulo não encontrada"})
    }
}

module.exports = {
    getMusicabytitle,
    getMusica,
    createMusica,
    getAllMusica,
};