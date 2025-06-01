
var database = require("../database/config");

function buscarCampeoes() {

    var instrucaoSql = `SELECT 
                        s.nomeShow,
                        w.nome AS wrestler,
                        rs.notasReinado
                            FROM shows s
                            JOIN RegistroShows rs ON s.id = rs.shows_id
                            JOIN Wrestler w ON w.id = rs.Wrestler_id`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarCampeoes
}
