$(document).ready(function(){
	$("#closebtn").click(function(){
		$("#mySidenav").animate({width:'0'})
	})
	$("#openbtn").click(function(){
		$("#mySidenav").animate({
			width: '300px'
		})
	})
})
