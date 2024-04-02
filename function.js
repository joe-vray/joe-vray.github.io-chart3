window.function = function (projectsData, statusData, width, height) {

  // data
  projectsData = projectsData.value ?? "";
  statusData = statusData.value ?? "";

  var projectsDataArray = projectsData.split(",");
  var statusDataArray = statusData.split(",");


  // Object to store rolled up data
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
  }


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
              labels: [${projectsList}],
              datasets: [
                {
                  data : [${rolledUpDataArray[0]}],
                  backgroundColor :'#3498db',
                  borderColor : 'rgba(136,136,136,0.5)',
                  label:"${statusList[0]}"
                },
                {
                  data : [${rolledUpDataArray[1]}],
                  backgroundColor :'#2ecc71',
                  borderColor : '#aaaaaa',
                  label:"${statusList[1]}"
                },                
                {
                  data : [${rolledUpDataArray[2]}],
                  backgroundColor :'#9b59b6',
                  borderColor : '#9b59b6',
                  label:"${statusList[2]}"
                },                
                {
                  data : [${rolledUpDataArray[3]}],
                  backgroundColor :'#f1c40f',
                  borderColor : '#f1c40f',
                  label:"${statusList[3]}"
                },                
                {
                  data : [${rolledUpDataArray[4]}],
                  backgroundColor :'#bdc3c7',
                  borderColor : '#bdc3c7',
                  label:"${statusList[4]}"
                },                
                {
                  data : [${rolledUpDataArray[5]}],
                  backgroundColor :'#bdc3c7',
                  borderColor : '#bdc3c7',
                  label:"${statusList[5]}"
                }
              ]
            };

            const options= {
              responsive:false,
                layout:{
                  padding:{top:12,left:12,bottom:12,},},
                  scales: {
                    xAxes:[{
                      stacked: true,gridLines:{borderDash:[],},
                    }],
                    yAxes:[{
                      stacked: true,gridLines:{borderDash:[],},
                    }],
                },
               plugins:{
              datalabels:{display:true,
                font:{
                  style:' bold',},},
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
              const myStackedBarChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: data,
                options: options
              });
              
     </script>
     </body>
     </html>
  `

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri;
}