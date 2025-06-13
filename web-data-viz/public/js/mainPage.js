// const shows = document.getElementById('metrica-shows').getContext('2d');

// // Novo formato de dados com múltiplos bairros
// const dadosPorAno = {
//   2025: [
//     [20, 30, 20, 15],
//     [10, 30, 30, 20],
//     [30, 17, 10, 20]
//   ]
// };

// // Atualizado para 8 meses
// const labels = ['Shows'];

// // Criação inicial do gráfico
// const grafico = new Chart(shows, {
//   type: 'bar',
//   data: {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Raw',
//         data: dadosPorAno[2025][0],
//         backgroundColor: 'rgb(185, 79, 250)'
//       },
//       {
//         label: 'SmackDown',
//         data: dadosPorAno[2025][1],
//         backgroundColor: 'rgb(179, 14, 121)'
//       },
//       {
//         label: 'Nxt',
//         data: dadosPorAno[2025][2],
//         backgroundColor: 'rgb(73, 3, 117)'
//       },
//     ]
//   },
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { color: '#ffffff' },
//       },
//       x: {
//         ticks: { color: '#ffffff' },
//       }
//     },
    
//   }
// });