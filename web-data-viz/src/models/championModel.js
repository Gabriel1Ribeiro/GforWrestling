
var database = require("../database/config");

function buscarCampeoes() {

    var instrucaoSql = `SELECT 
    w.nome AS Campeao,
    t.nome AS Titulo,
    w.tempoReinado,
    DATEDIFF(CURDATE(), w.tempoReinado) AS diasComoCampeao
    FROM Wrestler w
    JOIN Titulo t ON w.fkTitulo = t.id`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function clicarBrand() {

    var instrucaoSql = `SELECT 
                        s.nomeShow,
                        c.contador
                            FROM shows s
                            JOIN contadorBrand c ON s.id = c.fkShow`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function notasReinado() {
// Média das notas dos reinados
    var instrucaoSql = `SELECT 
                        t.nome AS Titulo,
                        s.nomeShow AS Shows,
                        ROUND(AVG(w.notaReinado), 2) AS MediaNotaReinado
                            FROM Wrestler w
                            JOIN Titulo t ON w.fkTitulo = t.id
                            JOIN shows s ON t.fkShow = s.id
                            GROUP BY t.nome, s.nomeShow
                            ORDER BY MediaNotaReinado DESC`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirDados(notaReinado) {
    
             var instrucaoSql = `
        INSERT INTO usuario (notaReinado) 
            VALUES (?);
    `;
    
}

module.exports = {
    buscarCampeoes,
    clicarBrand,
    notasReinado,
    inserirDados
}
