const musicas = reuire("../model/musica.js");

const getAll = (req, res) => {
    console.log(req.url);

    res.send(musica);
};


module.exports = { getAll };