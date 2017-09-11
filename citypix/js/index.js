// user enters city name into entry box
// user clicks "update" to submit imput
// 		when click "update", imput is stored 
// 		when click "update", program identifies city based on list of identifiable city imputs
// 			if program recognizes city, then html is updated with the city's photo. 
//			if program does not recognize city, then error message is displayed 

$(document).ready(function() {
  $('#entry').submit(enter);

function enter() {
    var city = $('#newEntry').val();
    displayImage(city);
    return false;
  }

  function displayImage(city) {
    var imageSrc;

    if (city === 'nyc' ) {
      imageSrc = 'images/nyc.jpg';
    } else if (city === 'New York City') {
      imageSrc = 'images/nyc.jpg';
    } else if  (city === 'New York') {
      imageSrc = 'images/nyc.jpg';
    } else if (city === 'LA') {
      imageSrc = 'images/la.jpg';
    } else if (city === 'Los Angeles') {
      imageSrc = 'images/la.jpg';
    } else if (city === 'LAX') {
      imageSrc = 'images/la.jpg';
    } else if (city === 'ATX') {
      imageSrc = 'images/austin.jpg';
    } else if (city === 'Austin') {
      imageSrc = 'images/austin.jpg';
    } else if (city === 'Sydney') {
      imageSrc = 'images/syndey.jpg';
    } else if (city === 'SYD') {
      imageSrc = 'images/sydney.jpg';
    }
  }

});
