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

function clicarBrand(req, res) {
    novoModel.clicarBrand(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function notasReinado(req, res) {
    novoModel.notasReinado(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function notasReinado(req, res) {
    novoModel.notasReinado(req)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarCampeoes,
    clicarBrand,
    notasReinado
}