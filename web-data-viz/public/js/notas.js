let chartNotas;
function notasReinado() {

        console.log("ENTROU AQUI");
        // Aqui seria o endereço criado anteriormente que obteria os dados do banco de dados
        fetch('/champion/notasReinado/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                plotarGrafico(data); // Passando os dados corretamente para a função plotarGrafico
            })
            .catch(function (err) {
                console.log(err);
            });
    }

        // Função para plotar o gráfico com os dados
    function plotarGrafico(dados) {
        console.log('iniciando plotagem do gráfico...');

        // Criando estrutura para o gráfico de barras
        let labels = [];
        let dadosGrafico = [];

        // Inserindo valores recebidos em estrutura para o gráfico
        for (let i = 0; i < dados.length; i++) {
            let registro = dados[i];
            labels.push(registro.Titulo);  // Passe aqui a label do que você está tentando buscar no select do bd (XXXXX)
            dadosGrafico.push(registro.MediaNotaReinado);  // Passe aqui os dados que você está tentando buscar no select bd (YYYYY)
        }

        console.log('O gráfico será plotado com os seguintes valores:');
        console.log('Labels:', labels);
        console.log('Dados:', dadosGrafico);

        // Configurando o gráfico de barras
        const config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Média nas notas',
                    data: dadosGrafico,
                    backgroundColor: [
                        'rgb(185, 79, 250)',
                        'rgb(179, 14, 121)',
                        'rgb(73, 3, 117)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        };

        // Plotando o gráfico de barras no canvas
        let myChart = new Chart(
            document.getElementById('canvasNotas'),  // Chamando o gráfico pelo ID do canvas
            config
        );
    }