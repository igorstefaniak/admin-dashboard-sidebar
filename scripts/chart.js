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

function rgbToHex(color) {

  let rgb = color.split(",");

  return('#'+valueToHex(((Number(rgb[0]))) + valueToHex(Number(rgb[1])) + valueToHex(Number(rgb[2]))));
}

function valueToHex(c) {

  var hex = c.toString(16);

  return hex

}

console.log(rgbToHex(accentColor))
/*
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', /* 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień' ],
    datasets: [{
      label: '',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      borderColor: rgbToHex(accentColor),
      backgroundColor: "#214c62",
      borderWidth: 4,
      borderRadius: 8
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
            grid:{color:"#575757", lineWidth: 3},
            border: {
              width: 0
            }
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
}); */
/* 



const chartZloty = document.querySelector("#chart-zloty").getContext("2d");

const labelsZloty = [
  "06/07",
  "07/07",
  "08/07",
  "09/07",
  "10/07",
  "11/07",
  "12/07",
  "13/07",
  "14/07",
];
const datasetsZloty = [
  12914, 11720, 9831, 11847, 10810, 11837, 12187, 9833, 12345,
];

const gradientColorBitcoin = chartZloty.createLinearGradient(0, 90, 450, 90);
gradientColorBitcoin.addColorStop(0.3, "#D37416");
gradientColorBitcoin.addColorStop(1, "#D3A246");

const dataBitcoin = {
  labels: labelsZloty,
  datasets: [
    {
      data: datasetsZloty,
      backgroundColor: gradientColorBitcoin,
    },
  ],
};

const optionsBitcoin = {
  elements: {
    line: {
      fill: true,
      borderColor: "#FDB92A",
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      pointBackgroundColor: "#FA7E0C",
      pointBorderColor: "#ffffff",
      hoverBorderWidth: 3,
      hoverRadius: 6,
      radius: 0,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  maintainAspectRatio: false,
  scales: {
    y: { display: false, min: 7000 },
    x: { display: false },
  },
  plugins: {
    legend: { display: false },
  },
};



    // Data-----
    const data = [];
    let prev = 100;
    for (let i = 0; i < 1000; i++) {
        prev += 5 - Math.random() * 10;
        data.push({x: i, y: prev});
    }
    // Data-----

    // Animation-----
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };
    // Animation-----

    // Config-----
    const config = {
        type: 'line',
        data: {
            datasets: [{
                data: data,
                backgroundColor: gradientColorBitcoin,
            }]
        },
        options: {
            animation,
            interaction: {
                intersect: false
            },
            plugins: {
                legend: false
            },
            scales: {
                x: {
                    type: 'linear'
                }
            },
            maintainAspectRatio: false,
            elements: {
              line: {
                fill: true,
                borderColor: "#FDB92A",
                borderWidth: 3,
                tension: 0.4,
              },
              point: {
                pointBackgroundColor: "#FA7E0C",
                pointBorderColor: "#ffffff",
                hoverBorderWidth: 3,
                hoverRadius: 6,
                radius: 0,
              }
            }
        }
    };



    var myChart = new Chart(
      document.getElementById('chart-zloty'),
      config
  );

 */


/* new Chart(chartZloty, {
  type: "line",
  data: dataBitcoin,
  options: optionsBitcoin,
});
 */
/* 
var data = [];
var prev = 100;
for (var i=0;i<1000;i++) {
  prev += 5 - Math.random()*10;
  data.push({x: i, y: prev});
}

var delayBetweenPoints = 10;
var started = {};
var ctx2 = document.getElementById("chart-zloty").getContext("2d");
var chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0,
        data: data,
        fill: true,
        animation: (context) => {
          var delay = 0;
          var index = context.dataIndex;
          var chart = context.chart;
          if (!started[index]) {
            delay = index * delayBetweenPoints;
            started[index] = true;
          }
          var {x,y} = index > 0 ? chart.getDatasetMeta(0).data[index-1].getProps(['x','y'], true) : {x: 0, y: chart.scales.y.getPixelForValue(100)};
          
          return {
            x: {
              easing: "linear",
              duration: delayBetweenPoints,
              from: x,
              delay
            },
            y: {
              easing: "linear",
              duration: delayBetweenPoints * 500,
              from: y,
              delay
            },
            skip: {
              type: 'boolean',
              duration: delayBetweenPoints,
              from: true,
              to: false,
              delay: delay
            }
          };
        }
      }
    ]
  },
  options: {
    scales: {
      x: {
        type: 'linear',
        display: false
      },
            y: {
        type: 'linear',
        display: false
      }
    }
  },
  plugins: [{
    id: 'force_line_update',
    beforeDatasetDraw(chart, ctx) {
      ctx.meta.dataset.points = ctx.meta.data;
    }
  }]
});

 */

const chartZloty = document.querySelector("#chart-zloty").getContext("2d");

const labelsZloty = [
  "06/07",
  "07/07",
  "08/07",
  "09/07",
  "10/07",
  "11/07",
  "12/07",
  "13/07",
  "14/07",
];
const datasetsZloty = [
];

let prev = 10000;

for (var i=0;i<9;i++) {
  prev += 500 - Math.random()*1000;
  datasetsZloty.push(prev);
}

const gradientColorBitcoin = chartZloty.createLinearGradient(0, 900, 900, 90);
gradientColorBitcoin.addColorStop(0.3, rgbToHex(accentColor));
gradientColorBitcoin.addColorStop(1, rgbToHex(accentColor)+'4D');

const dataBitcoin = {
  labels: labelsZloty,
  datasets: [
    {
      data: datasetsZloty,
      backgroundColor: gradientColorBitcoin,
    },
  ],
};

const optionsBitcoin = {
  elements: {
    line: {
      fill: true,
      borderColor: rgbToHex(accentColor),
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      pointBackgroundColor: rgbToHex(accentColor),
      pointBorderColor: "#ffffff",
      hoverBorderWidth: 3,
      hoverRadius: 6,
      radius: 0,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  maintainAspectRatio: false,
  scales: {
    y: { display: false, min: 7000 },
    x: { display: false },
  },
  plugins: {
    legend: { display: false },
  },
};

new Chart(chartZloty, {
  type: "line",
  data: dataBitcoin,
  options: optionsBitcoin,
});


$('#procent').text(((datasetsZloty[8] - datasetsZloty[0]) / datasetsZloty[0]  * 100).toFixed(2));