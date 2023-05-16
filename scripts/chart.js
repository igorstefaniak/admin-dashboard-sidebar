/* const ctx = document.getElementById('myChart');

var accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');

var labels1 = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var data1 = []
var data2 = []

for (const [index, item] of labels1.entries()) {
  data1.push(qua(item))
  data2.push(timestwo(item))
}

function qua(x) { return x * x }
function timestwo(x) { return x * 10 }

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels1,
    datasets: [{
      label: 'f(x)=x²',
      data: data1,
      borderWidth: 1,
      borderColor: accentColor,
      backgroundColor: accentColor + "4D",
      borderWidth: 2,
      borderRadius: 6,
      borderSkipped: false,
      pointStyle: 'circle',
    }, {
      type: 'line',
      label: 'f(x)=x×10',
      data: data2,
      borderWidth: 1,
      borderColor: accentColor,
      backgroundColor: accentColor + "4D",
      borderWidth: 2,
      borderRadius: 6,
      borderSkipped: false,
      pointStyle: 'circle',
    }

    ]
  },
  options: {
    responsive: true,
maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: "#ccc",
          font: {
            family: 'Poppins'
          },
          beginAtZero: true
        }
      },
      x: {
        ticks: {
          color: "#ccc",
          font: {
            family: 'Poppins'
          },
          beginAtZero: true
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: "white",
          font: {
            family: 'Poppins'
          }
        }
      }
    }
  }
}); */

var accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', /* 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień' */],
    datasets: [{
      label: '',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      borderColor: accentColor,
      backgroundColor: "#214c62",
      borderWidth: 6,
      borderRadius: 12
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
          display: false,
          labels: {
            usePointStyle: true,
            color: "white",
            font: {
              family: 'Poppins'
            }
          }
        }
      },
    scales: {
        y: {
            ticks: {
              color: "white",
              font: {
                family: 'Poppins'
              },
              beginAtZero: true
            },
            grid:{color:"#575757", lineWidth: 2},
          },
      x: {
        ticks: {
          color: "white",
          font: {
            family: 'Poppins'
          },
          beginAtZero: true
        },
        grid:{color:"#575757", lineWidth: 0},
      }
    }
  }
});