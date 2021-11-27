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
    const musicaId = req.params.id
    const musicaFound = musica.find((musica) => musica.id == musicaId)
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

const updateMusica = (req, res) => {
    try {
        const musicaId = req.params.id
        const musicaToUpdate = req.body //Pego o corpo da requisição com as alterações 

        const musicaFound = musica.find(musica => musica.id == musicaId) // separo o filme que irei atualizar      
        const musicaIndex = musica.indexOf(musicaFound) // separo o indice do filme no array de filmes

        if (musicaIndex >= 0) { // verifico se o filme existe no array de filmes
            musica.splice(musicaIndex, 1, musicaToUpdate) //busco no array o filme, excluo o registro antigo e substituo pelo novo 
        } else {
            res.status(404).send({ message: "Musica não encontrado para ser atualizado" })
        }

        fs.writeFile("./src/models/musica.json", JSON.stringify(musica), 'utf8', function (err) { // gravo meu json de filmes atualizado
            if (err) {
                res.status(500).send({ message: err }) // caso dê erro retorno status 500
            } else {
                console.log(" Musica atualizado com sucesso! ")
                const musicaUpdated = musica.find(musica => musica.id == musicaId) // separo o filme que modifiquei no array
                res.status(200).send(musicaUpdated) // envio o filme modificado como resposta
            }
        })
    } catch (err) {
        res.status(500).send({ message: err }) // caso dê erro retorno status 500
    }
}

const updateFavoritedStatus = (req, res) => {
    try{
        const musicaId = req.params.id 
        const favorited = req.body.favorited

        const musicaToUpdate = musica.find(musica => musica.id == musicaId)
        const musicaIndex = musica.indexOf(musicaToUpdate)

        if (musicaIndex >= 0) { // verifico se o filme existe no array de filmes
            musicaToUpdate.favorited = favorited //atualizo o objeto com o novo status informando se foi assistido ou não
            musica.splice(musicaIndex, 1, musicaToUpdate) // removo o filme pelo índice substituindo pelo novo
        } else {
            res.status(404).send({ message: "Musica não encontrada para informar se foi escutada ou não" })
        }

        fs.writeFile("./src/models/musica.json", JSON.stringify(musica), 'utf8', function (err) { // gravo meu json de filmes atualizado
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Musica atualizada com sucesso!")
                const musicaUpdated = musica.find((musica) => musica.id == musicaId) // separo o filme que modifiquei no array
                res.status(200).send(musicaUpdated) // envio o filme modificado como resposta
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}
 
const deleteMusica = (req, res) => {
    try {
        const musicaId = req.params.id
        const musicaFound = musica.find(musica => musicae.id == musicaId) // encontro o filme pelo id
        const musicaIndex = musica.indexOf(musicaFound) // identifico o índice do filme no meu array

        if (musicaIndex >= 0) { // verifico se o filme existe no array de filmes
            musica.splice(musicaIndex, 1) // removo o filme pelo índice
        } else {
            res.status(404).send({ message: "Filme não encontrado para ser deletado" })
        }

        fs.writeFile("./src/models/movies.json", JSON.stringify(musica), 'utf8', function (err) { // gravo meu array de filmes sem o filme que deletei
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Filme deletado com sucesso do arquivo!")
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o filme" })
    }
}


module.exports = {
    deleteMusica,
    updateFavoritedStatus,
    updateMusica,
    getMusicabytitle,
    getMusica,
    createMusica,
    getAllMusica,
};