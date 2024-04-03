window.function = function (projectsData, statusData, width, height) {

  // data
  projectsData = projectsData.value ?? "";
  statusData = statusData.value ?? "";

  var projectsDataArray = projectsData.split(",");
  var statusDataArray = statusData.split(",");

  width = width.value ?? 100;
  height = height.value ?? 500;


  // Object to store rolled up data
  /*
  var rolledUpDataArray = [];
  var projectsList = [];
  var statusList = [];

  // Loop through the sales data
   for (var i = 0; i < projectsDataArray.length; i++) {
    var currentProject = projectsDataArray[i];
    var currentStatus = statusDataArray[i];

    if (projectsList[currentProject]) {
    }
    else {
      projectsList[currentProject] = currentProject;
    }
    if (statusList[currentStatus]) {
    }
    else {
      statusList[currentStatus] = currentStatus;
    }

    // If the region already exists in the rolled up data, add to its sales
    if (rolledUpDataArray[currentStatus][currentProject]) {
      rolledUpDataArray[currentStatus][currentProject] += 1;
    }
    // Otherwise, initialize the sales for that region
    else {
      rolledUpDataArray[currentStatus][currentProject] = 1;
    }
  } */

  let ht = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Radar Chart with Chart.js</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <canvas id="myRadarChart" width="${width}%" height="${height}px"></canvas>
      <script>
        document.addEventListener('DOMContentLoaded', function () {
          const ctx = document.getElementById('myRadarChart').getContext('2d');
          const textColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'white' : 'black';
          const pointLabelFontSize = window.innerWidth <= 768 ? 12 : 13;
  
          const data = {
            labels: [
              'a',
              'b',
              'c',
              'd',
              'e',
              'f',
              'g',
              'h'
            ],
            datasets: [
              {
                label: "Today's Touchpoint",
                data: [${data}],
                backgroundColor: 'rgba(255, 215, 0, 0)',
                borderColor: '#FFD700',
                borderWidth: 2
              },
              {
                label: 'Opportunity for Expansion',
                data: [36, 36, 36, 36, 36, 36, 36, 36],
                backgroundColor: 'rgba(75, 192, 192, 0)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0,
                pointHitRadius: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0
              }
            ]
          };
  
          const options = {
            scales: {
              r: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(255, 255, 255, 0)',
                  circular: true
                },
                pointLabels: {
                  color: textColor,
                  font: {
                    size: pointLabelFontSize
                  },
                padding: 15
                },
                ticks: {
                  color: textColor,
                  backdropColor: 'transparent',
                  min: 0,
                  max: 50,
                  display: false
                },
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: textColor,
                },
              },
              title: {
                display: true,
                text: 'test chart',
                color: textColor,
                font: {
                  size: 24,
                },
              },
            },
            backgroundColor: 'white'
          };
  
          const myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: options
          });
        });
      </script>
    </body>
  </html>
  `
  
    let enc = encodeURIComponent(ht);
    let uri = `data:text/html;charset=utf-8,${enc}`
    return uri; 
  }