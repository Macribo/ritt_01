$(document).ready(function() {
  $('.eyes').tilt({
    scale: 1.2
  });

  //HOVER ON PROVINCES:
  //ULSTER
  $('#eye1').hover(function() {
    console.log('hover1');
    // $('.selectedLv').css('background-image', "url('v1.png')");
    $('.selectedLv').text('Feabhas');

    $('#eire-map').css('background-image', 'url("./images/u.png")');

    $('.levelDescription').text(`Ulaidh`);
  });
  //LEINSTER
  $('#eye3').hover(function() {
    console.log('hover3');
    $('.selectedLv').text('Daonnacht');
    $('#eire-map').css('background-image', 'url("./images/l.png")');

    $('.levelDescription').text('Laighean');
  });

  //MUNSTER
  $('#eye5').hover(function() {
    console.log('hover3');
    // $('.selectedLv').css('background-image', "url('v5.png')");
    $('#eire-map').css('background-image', 'url("./images/m.png")');

    $('.selectedLv').text('Tuiscint');

    $('.levelDescription').text('An Mhumhain');
  });

  //CONNAUGHT
  $('#eye7').hover(function() {
    console.log('hover3');
    // $('.selectedLv').css('background-image', "url('v7.png')");

    $('.selectedLv').text('Rathúnas');
    $('#eire-map').css('background-image', 'url("./images/c.png")');

    $('.levelDescription').text('Connachta');
  });

  function wink() {
    console.log('wink');
  }
});

//CONNAUGHT click handler
$('#eye7').click(function() {
  $('#eye7').fadeOut('slow');
  $('#eye3').fadeOut('slow');
  $('#eye1').fadeOut('slow');
  $('#eye5').fadeOut('slow');
  $('#eire-map').fadeOut('slow');
  $('.levelDescription').text('Connachta');

  setTimeout(function() {
    $('#eire-map').css('background-image', "url('./images/maps/m2.png')");

    $('#eire-map').fadeIn('slow');
    setTimeout(function() {
      $('.connachta').fadeIn();
    }, 1000);
    // alert('co');
    //show Galway Leitrim Mayo Roscommon Sligo
  }, 1000);
});

//CONNAUGHT hover:
$('#galway').hover(function() {
  $('.levelDescription').text(`Co. na Gailliṁe`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Gal.png')");
});

$('#leitrim').hover(function() {
  $('.levelDescription').text(`Co. Liatroma`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Leit.png')");
});

$('#mayo').hover(function() {
  $('.levelDescription').text(`Co. Mhaigh Eo`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Mayo.png')");
});

$('#roscommon').hover(function() {
  $('.levelDescription').text(`Co. Ros Comáin`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Rosc.png')");
});

$('#sligo').hover(function() {
  $('.levelDescription').text(`Co. Shligigh`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Slig.png')");
});

let eye1 = document.getElementById('eye1');
let eye2 = document.getElementById('eye2');
let eye3 = document.getElementById('eye3');
let eye4 = document.getElementById('eye4');
let eye5 = document.getElementById('eye5');
let eye6 = document.getElementById('eye6');
let eye7 = document.getElementById('eye7');
let eye8 = document.getElementById('eye8');

let eyeArr = [eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8];
