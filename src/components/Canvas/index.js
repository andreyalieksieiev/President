import Chart from 'chart.js';
import { shape, number, arrayOf } from 'prop-types';

const chart = (ctx, Erd, Tru) => {
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Erdogan', 'Trump'],
      datasets: [
        {
          label: '# of Votes',
          data: [Tru, Erd],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
};

chart.propTypes = {
  Erd: number,
  Tru: number,
  ctx: arrayOf(shape({}))
};

export default chart;
