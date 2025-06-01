var novoModel = require("../models/championModel");

function buscarCampeoes(req, res) {
    novoModel.buscarCampeoes(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarCampeoes
}