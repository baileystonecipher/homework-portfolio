$(document).ready(function() {

$("#paragraph1").hide(); 
$(".readless").hide();
$(".readmore").click(showparagraph);
$(".readless").click(hideparagraph);

function showparagraph() {
	$("#paragraph1").show();
	$(".readmore").hide();
	$(".readless").show();
} 

function hideparagraph() {
	$("#paragraph1").hide();
	$(".readmore").show();
	$(".readless").hide();
}








});