const express = require("express");
const app = express();

const index = require('./routes/index');
const musicas = require('./require/musicaroute');

app.use((req, res, next) => {
    console.log('nova requisicao realizada');

    next()
})

app.use('/', index);
app.use('/musicas', musicas)

module.exports =app;


