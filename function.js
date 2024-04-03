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
          labels : ["Proj1","Proj2","Proj3","Proj4","Proj5","Proj6","Proj7",],
          datasets : [
            {
            data : [65,8,90,81,56,55,40,],
            backgroundColor :'#3498db',
            borderColor : 'rgba(136,136,136,0.5)',
            label:"status1"},

            {
            data : [21,48,40,19,96,27,100,],
            backgroundColor :'#2ecc71',
            borderColor : '#aaaaaa',
            label:"status2"},

            {
            data : [10,15,20,25,30,31,10,],
            backgroundColor :'#9b59b6',
            borderColor : '#9b59b6',
            label:"status3"},

          ]
        };
        const options = {
          responsive:false,
          layout:{
            padding:{
              top:12,
              left:12,
              bottom:12,
            },
          },
          scales: {
            xAxes:[{
              stacked: true,
              gridLines:{
                borderDash:[],
              },
            }],
            yAxes:[{
              stacked: true,
              gridLines:{
                borderDash:[],
              },
            }],
          },
          plugins:{
            datalabels:{
              display:true,
              font:{
                style:' bold',
              },
            },
          },
          legend:{
            labels:{
              generateLabels: function(chart){
                return  chart.data.datasets.map( function( dataset, i ){
                  return{
                    text:dataset.label,
                    lineCap:dataset.borderCapStyle,
                    lineDash:[],
                    lineDashOffset: 0,
                    lineJoin:dataset.borderJoinStyle,
                    fillStyle:dataset.backgroundColor,
                    strokeStyle:dataset.borderColor,
                    lineWidth:dataset.pointBorderWidth,
                    lineDash:dataset.borderDash,
                  }
                })
              },
            },
          },
          title:{
            display:true,
            text:'Chart Title',
            fontColor:'#3498db',
            fontSize:32,
            fontStyle:' bold',
          },
          elements: {
            arc: {
            },
            line: {
            },
            rectangle: {
              borderWidth:3,
              borderSkipped:'left',
            },
          },
          tooltips:{
          },
          hover:{
            mode:'nearest',
            animationDuration:400,
          },
        };

        const myBarChart = new Chart(ctx, {
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
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri; 
}