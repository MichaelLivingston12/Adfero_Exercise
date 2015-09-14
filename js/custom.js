$(document).ready(function() {

$("#project1").click(function() {
                $("#ProjectName").val("Project_1");
            });

$("#project2").click(function() {
                $("#ProjectName").val("Project_2"); 
            });

$("#project3").click(function() {
                $("#ProjectName").val("Project_3");
            });
});

angular.module("app", ['chart.js']).controller("BarCtrl", function ($scope) {
  $scope.labels = ['09/13/15', '09/14/15', '09/15/15', '09/16/16'];
  $scope.series = ['Project 1', 'Project 2', 'Project 3'];
  $scope.data = [
    [65, 59, 80, 81],
    [28, 48, 40, 19],
	[65, 59, 80, 81]
  ];
  
  $scope.options = [
  {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,
	

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

} 
  ];
  
  Chart.defaults.global.scaleFontColor = "white";
  Chart.defaults.global.scaleLineColor = "white";
  Chart.defaults.global.scaleGridLineColor = "white";
});



