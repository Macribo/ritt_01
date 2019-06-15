$(document).ready(function() {
  //   let county = get_cookie('chosenCounty');
  //   console.log('hi' + county);
  let chosenCounty = document.cookie;
  let chosenCountyImg = "url('./images/maps/coMaps" + chosenCounty + '.png';
  $('#county-map').css('border', '5px solid red');
  //   $('#county-map').css('background-image', chosenCountyImg);

  $('#location-description').html(chosenCounty);

  function leave() {
    location.href = 'file:///home/devugees/Desktop/ritt_01/locations.html';
  }
});
