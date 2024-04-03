window.function = function (projectsData, statusData, width, height) {

  // data
  projectsData = projectsData.value ?? "";
  statusData = statusData.value ?? "";
  width = width.value ?? 100;
  height = height.value ?? 500;
 
  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Bar Chart with Chart.js</title>
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
    <canvas id="myBarChart" width="${width}%" height="${height}px"></canvas>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        const ctx = document.getElementById('myBarChart').getContext('2d');
        const data = {
          labels : ["proj1","proj2",],
          datasets : [
            {
            data : [65,8,],
            backgroundColor :'#3498db',
            borderColor : 'rgba(136,136,136,0.5)',
            label:"status1"},
            {
            data : [21,48,],
            backgroundColor :'#2ecc71',
            borderColor : '#aaaaaa',
            label:"status2"},        
          ]
        };
        const options = {
          responsive:false,
	        layout:{padding:{top:12,left:12,bottom:12,},},
	        scales: {
	          xAxes:[{
              gridLines:{borderDash:[],},
            }],
	          yAxes:[{
              gridLines:{borderDash:[],},
            }],
          },
          plugins:{
            datalabels:{display:false},
          },
          legend:{display:false},elements: {
	          arc: {
            },
	          line: {
            },
	          rectangle: {
              borderWidth:3,
            },
          },
          tooltips:{enabled:false},
          hover:{
          },
        };
        const myBarChart = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: options
        });
      });
    </script>
  </body>
</html>
`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri; 
}