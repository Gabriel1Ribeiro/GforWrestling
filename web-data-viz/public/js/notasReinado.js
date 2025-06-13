console.log("teste");
// Função chamada ao carregar a página para obter e processar os dados
function obterDadosNotas() {
// Aqui seria o endereço criado anteriormente que obteria os dados do banco de dados
fetch('/champion/clicarBrandFetch/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        plotarGraficoBrand(data); // Passando os dados corretamente para a função plotarGraficoBrand
    })
    .catch(function (err) {
        console.log(err);
    });
}
// Função para plotar o gráfico com os dados
    function plotarGraficoBrand(dados) {
        console.log('iniciando plotagem do gráfico De brands...');

        // Criando estrutura para o gráfico de barras
        let labels = [];
        let dadosGrafico = [];

        // Inserindo valores recebidos em estrutura para o gráfico
        for (let i = 0; i < dados.length; i++) {
            let registro = dados[i];
            labels.push(registro.nomeShow);  // Passe aqui a label do que você está tentando buscar no select do bd (XXXXX)
            dadosGrafico.push(registro.contador);  // Passe aqui os dados que você está tentando buscar no select bd (YYYYY)
        }

        console.log('O gráfico será plotado com os seguintes valores:');
        console.log('Labels:', labels);
        console.log('Dados:', dadosGrafico);

        // Configurando o gráfico de barras
        const config = {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data: dadosGrafico,
                    backgroundColor: [
                        'rgb(185, 79, 250)',
                        'rgb(179, 14, 121)',
                        'rgb(73, 3, 117)',
                    ],
                    borderWidth: 1
                },
            ]
            },
            options: {
                responsive: true
            }
        };

        // Plotando o gráfico de barras no canvas
        let rosca = new Chart(
            document.getElementById('ContBrands'),  // Chamando o gráfico pelo ID do canvas
            config
        );
    }
