

$(document).ready(function() {

$("#paragraph1").hide(); 
$(".readless").hide();
$(".readmore").click(showparagraph);
$(".readless").click(hideparagraph);

function showparagraph(event) {
	event.preventDefault();
	$("#paragraph1").show();
	$(".readmore").hide();
	$(".readless").show();
} 

function hideparagraph(event) {
	event.preventDefault();
	$("#paragraph1").hide();
	$(".readmore").show();
	$(".readless").hide();
}



$(".hide").hide();
$(".learnmore").click(showmore);

function showmore(event) {
	event.preventDefault();
	$(".hide").show();
	$(".learnmore").hide();
}




event.preventDefault() 

});