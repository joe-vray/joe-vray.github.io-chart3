window.function = function (data, width, height) {

    // data
    data = data.value ?? "";
    width = width.value ?? 100;
    height = height.value ?? 500;
   
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
        <canvas  id="chart-01" width="${width}%" height="${height}px"></canvas>
        <script> function MoreChartOptions(){} 
    var ChartData = {
      labels : ["proj1","proj2","proj3","proj4","proj5","proj6","proj7",],
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
        data : [],
        backgroundColor :'#9b59b6',
        borderColor : '#9b59b6',
        label:"status3"},
    
        {
        data : [],
        backgroundColor :'#f1c40f',
        borderColor : '#f1c40f',
        label:"status4"},
    
        {
        data : [],
        backgroundColor :'#bdc3c7',
        borderColor : '#bdc3c7',
        label:"status5"},
    
    ]
      };
    ChartOptions= {
    responsive:false,
      layout:{padding:{top:12,left:12,bottom:12,},},
       scales: {
      xAxes:[{
        stacked: true,gridLines:{borderDash:[],},
    }],
    
      yAxes:[{
        stacked: true,gridLines:{borderDash:[],},
    }],
     },plugins:{
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
     DrawTheChart(ChartData,ChartOptions,"chart-01","horizontalBar");</script></body></html>
  `
  
    let enc = encodeURIComponent(ht);
    let uri = `data:text/html;charset=utf-8,${enc}`
    return uri; 
  }