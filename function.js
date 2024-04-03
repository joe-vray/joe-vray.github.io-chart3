window.function = function (projectsData, statusData, width, height) {

  // data
  projectsData = projectsData.value ?? "";
  statusData = statusData.value ?? "";

  var projectsDataArray = projectsData.split(",");
  var statusDataArray = statusData.split(",");


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


  width = width.value ?? 100;
  height = height.value ?? 500;

  let ht = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Stacked bar with Chart.js</title>
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
      <canvas  id="myStackedBarChart" width="${width}%" height="${height}px"></canvas>
      <script> 
        document.addEventListener('DOMContentLoaded', function () {
          const ctx = document.getElementById('myStackedBarChart').getContext('2d');
          const textColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'white' : 'black';
          const pointLabelFontSize = window.innerWidth <= 768 ? 12 : 13;
          
          const data = {
            "labels": [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            "datasets": [
              {
                "label": "Dataset 1",
                "backgroundColor": "rgba(255, 99, 132, 0.5)",
                "borderColor": "rgb(255, 99, 132)",
                "borderWidth": 1,
                "data": [
                  -32,
                  62,
                  64,
                  41,
                  -31,
                  -32,
                  87
                ]
              },
              {
                "label": "Dataset 2",
                "backgroundColor": "rgba(54, 162, 235, 0.5)",
                "borderColor": "rgb(54, 162, 235)",
                "data": [
                  9,
                  -100,
                  -13,
                  64,
                  -57,
                  26,
                  20
                ]
              },
              {
                "label": "Dataset 3",
                "backgroundColor": "rgba(255, 206, 86, 0.5)",
                "borderColor": "rgb(255, 206, 86)",
                "data": [
                  -45,
                  30,
                  -20,
                  50,
                  -10,
                  40,
                  60
                ]
              },
              {
                "label": "Dataset 4",
                "backgroundColor": "rgba(75, 192, 192, 0.5)",
                "borderColor": "rgb(75, 192, 192)",
                "data": [
                  20,
                  -10,
                  30,
                  -40,
                  25,
                  -15,
                  35
                ]
              },
              {
                "label": "Dataset 5",
                "backgroundColor": "rgba(153, 102, 255, 0.5)",
                "borderColor": "rgb(153, 102, 255)",
                "data": [
                  10,
                  -20,
                  15,
                  -25,
                  18,
                  -12,
                  22
                ]
              }
            ]
          };

          const options = {
            "elements": {
              "rectangle": {
                "borderWidth": 2
              }
            },
            "responsive": true,
            "legend": {
              "position": "right"
            },
            "title": {
              "display": true,
              "text": "Chart.js Horizontal Bar Chart"
            },
            "scales": {
              "xAxes": [{
                "stacked": true
              }],
              "yAxes": [{
                "stacked": true
              }]
            }
          };

          const myStackedBarChart = new Chart(ctx, {
            type: 'horizontalBar',
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