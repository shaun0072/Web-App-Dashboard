window.onload = function (){
	var barChart = document.getElementById("barChart").getContext("2d");
	window.myBar = new Chart(barChart).Bar(barChartData, {
		responsive : true,
		scaleBeginAtZero : false,
		barShowStroke : false,
		barValueSpacing : 20,
		scaleOverride: true,
		scaleSteps: 4,
		scaleStepWidth: 50,
		scaleStartValue: 50

	});
	var lineChart = document.getElementById("lineChart").getContext("2d");
	window.myLine = new Chart(lineChart).Line(lineChartDataWeekly, {
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
	var pieChart = document.getElementById("pieChart").getContext("2d");
	window.myPie = new Chart(pieChart).Doughnut(pieData, {
		animateScale: true,
		animationSteps : 100,
		responsive: true,
		legendTemplate :  '<ul '
						+ 'class=\"<%=name.toLowerCase()%>-legend\">'
						+ '<% for (var i=0; i<segments.length; i++){%>'
						+ '<li>'
						+ '<span style=\"background-color:<%=segments[i].fillColor%>\"></span>'
						+ '<%if(segments[i].label){%><%=segments[i].label%><%}%>'
						+ '</li>'
						+ '<%}%>'
						+ '</ul>'
	});
	var legend = myPie.generateLegend();
	$('.mobileUsers').append(legend);
	for(var i = 0; i < newMembers.profilePicture.length; i++) {
	var $table = $('.new-mem-group');
	var $tableItem;
	$tableItem = '<tr class="new-mem-item">'
			   + '<td class="pic-container">'
			   + '<img class="pic-circle" src="'
			   + newMembers.profilePicture[i]
			   + '" />'
			   + '</td>'
			   + '<td class="name-email-container">'
			   + '<div class="mem-name">'
			   + newMembers.nameemail[0].name[i]
			   + '</div>'
			   + '<div class="mem-email"><a href="mailto:'
			   + newMembers.nameemail[0].email[i]
			   + '">'
			   + newMembers.nameemail[0].email[i]
			   + '</a></div>'
			   + '</td>'
			   + '<td class="date-container">'
			   + newMembers.date[i]
			   + '</td>'
			   + '</tr>';
	$table.append($tableItem);
	} //End for loop
	for(var i=0; i < recentActivity.activity.length; i++) {
		var $activityList = $('.recent-activity-list');
		var $activityItem;
		$activityItem = '<li class="activity-item">'
					  + '<div class="svg-container">'
					  + '<img class="svg-circle" src="'
					  + recentActivity.activity[i].svg 
					  + '"/>'
					  + '</div>'
					  + '<div class="name-time-container">'
					  + '<div class="name-container">'
					  + '<span class="name">'
					  + recentActivity.name[i]
					  + '</span>'
					  + '<span class="activity-type">'
					  + recentActivity.activity[i].phrase 
					  + '</span>'
					  + '<span class="place">'
					  + recentActivity.objectofactivity[i]
					  + '</span>'
					  + '<div class="time-ago">'
					  + recentActivity.time[i]
					  + '</div>'
					  + '</div>'
					  + '</div>'
					  + '<div class="arrow">></div>'
					  + '</li>'	
		$activityList.append($activityItem);
	}
	var $socialStatsHolder = $('.socialStatsHolder');
	var $twitterStats;
	var $facebookStats;
	var $googleStats;
	$twitterStats = '<div class="twitter">'
				  + '<div class="icon-container">'
				  + '<div class="twitter-circle">'
				  + twitterWidget.icon
				  + '</div>'
				  + '</div>'
				  + '<div class="t-group">'
				  + '<h5>'
				  + twitterWidget.label
				  + '</h5>'
				  + '<div>'
				  + twitterWidget.stat
				  + '</div>'
				  + '</div>'
				  + '</div>';
	$facebookStats = '<div class="facebook">'
				  + '<div class="icon-container">'
				  + '<div class="facebook-circle">'
				  + facebookWidget.icon
				  + '</div>'
				  + '</div>'
				  + '<div class="f-group">'
				  + '<h5>'
				  + facebookWidget.label
				  + '</h5>'
				  + '<div>'
				  + facebookWidget.stat
				  + '</div>'
				  + '</div>'
				  + '</div>';
	$googleStats = '<div class="google">'
				  + '<div class="icon-container">'
				  + '<div class="google-circle">'
				  + googleWidget.icon
				  + '</div>'
				  + '</div>'
				  + '<div class="g-group">'
				  + '<h5>'
				  + googleWidget.label
				  + '</h5>'
				  + '<div>'
				  + googleWidget.stat
				  + '</div>'
				  + '</div>'
				  + '</div>';
	$socialStatsHolder.append($twitterStats);
    $socialStatsHolder.append($facebookStats);
    $socialStatsHolder.append($googleStats);
	console.log("Page Refreshed!")
};

window.onresize = function(){ location.reload(); }