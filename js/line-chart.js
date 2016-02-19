var hourlyButton = document.getElementById('hourly');
var dailyButton = document.getElementById('daily');
var weeklyButton = document.getElementById('weekly');
var monthlyButton = document.getElementById('monthly');
var lineChartDataHourly = {
		labels : ["12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "#E2E3F7",
				strokeColor : "#AAACE6",
				pointColor : "#FFF",
				pointStrokeColor : "#8083C5",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [11, 15, 8, 15, 12, 19, 5, 7, 10, 12, 10, 15]
			}
		]

	};
var lineChartDataDaily = {
		labels : ["21","22","23","24","25","26","27","28","29","30","31"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "#E2E3F7",
				strokeColor : "#AAACE6",
				pointColor : "#FFF",
				pointStrokeColor : "#8083C5",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [250, 150, 350, 300, 350, 100, 125, 175, 300, 325, 250, 200]
			}
		]

	};
var lineChartDataWeekly = {
		labels : ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "#E2E3F7",
				strokeColor : "#AAACE6",
				pointColor : "#FFF",
				pointStrokeColor : "#8083C5",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750]
			}
		]

	};
var lineChartDataMonthly = {
		labels : ["January","Febuary","March","April","May","June","July","August","September","October","November"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "#E2E3F7",
				strokeColor : "#AAACE6",
				pointColor : "#FFF",
				pointStrokeColor : "#8083C5",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [5000, 6000, 4000, 6500, 6000, 5000, 4500, 4500, 5000, 4000, 7000, 5000]
			}
		]

	};
hourlyButton.addEventListener('click', function(){
	$('#lineChart').remove();
	$('.traffic').append('<canvas id="lineChart"><canvas>');
	var ctx1 = document.getElementById("lineChart").getContext("2d");
	var listItems = document.getElementById('timeSpanList');
	var item = listItems.children;
	var canvasEl = document.createElement("canvas");
	
	window.myLine = new Chart(ctx1).Line(lineChartDataHourly, {
		bezierCurve : false,
		pointDotRadius : 6,
		pointDotStrokeWidth : 2,
		maintainAspectRatio: false,
		responsive: true,
		scaleOverride: true,
		scaleSteps: 4,
		scaleStepWidth: 5,
		scaleStartValue: 1

	});
	for(var i=0; i < item.length; i++) {
		var itemAttr = item[i].getAttribute("class");
		if(itemAttr === "active") {
			item[i].setAttribute("class", "");
		}
	}
	this.setAttribute("class", "active");

});
dailyButton.addEventListener('click', function(){
	$('#lineChart').remove();
	$('.traffic').append('<canvas id="lineChart"><canvas>');
	var ctx2 = document.getElementById("lineChart").getContext("2d");
	var listItems = document.getElementById('timeSpanList');
	var item = listItems.children;
	window.myLine = new Chart(ctx2).Line(lineChartDataDaily, {
		bezierCurve : false,
		pointDotRadius : 6,
		pointDotStrokeWidth : 2,
		maintainAspectRatio: false,
		responsive: true,
		scaleOverride: true,
		scaleSteps: 4,
		scaleStepWidth: 100,
		scaleStartValue: 50

	});
	for(var i=0; i < item.length; i++) {
		var itemAttr = item[i].getAttribute("class");
		if(itemAttr === "active") {
			item[i].setAttribute("class", "");
		}
	}
	this.setAttribute("class", "active");
});
weeklyButton.addEventListener('click', function(){
	$('#lineChart').remove();
	$('.traffic').append('<canvas id="lineChart"><canvas>');
	var ctx3 = document.getElementById("lineChart").getContext("2d");
	var listItems = document.getElementById('timeSpanList');
	var item = listItems.children;
	window.myLine = new Chart(ctx3).Line(lineChartDataWeekly, {
		bezierCurve : false,
		pointDotRadius : 6,
		pointDotStrokeWidth : 2,
		maintainAspectRatio: false,
		responsive: true,
		scaleOverride: true,
		scaleSteps: 4,
		scaleStepWidth: 500,
		scaleStartValue: 500

	});
	for(var i=0; i < item.length; i++) {
		var itemAttr = item[i].getAttribute("class");
		if(itemAttr === "active") {
			item[i].setAttribute("class", "");
		}
	}
	this.setAttribute("class", "active");
});
monthlyButton.addEventListener('click', function(){
	$('#lineChart').remove();
	$('.traffic').append('<canvas id="lineChart"><canvas>');
	var ctx4 = document.getElementById("lineChart").getContext("2d");
	var listItems = document.getElementById('timeSpanList');
	var item = listItems.children;
	window.myLine = new Chart(ctx4).Line(lineChartDataMonthly, {
		bezierCurve : false,
		pointDotRadius : 6,
		pointDotStrokeWidth : 2,
		maintainAspectRatio: false,
		responsive: true,
		scaleOverride: true,
		scaleSteps: 4,
		scaleStepWidth: 1000,
		scaleStartValue: 3000

	});
	for(var i=0; i < item.length; i++) {
		var itemAttr = item[i].getAttribute("class");
		if(itemAttr === "active") {
			item[i].setAttribute("class", "");
		}
	}
	this.setAttribute("class", "active");
});