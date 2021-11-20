const express = require('express');
const router = express.router();

router.get('/', (req, res) => {
    res.send({
        titulo:'Play list massa demais!' ,
        data: "19/11/2021"
    })
})


module.exports = router;
