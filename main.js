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

//province selected
function provinceSelected() {
  $('#eye7').fadeOut('slow');
  $('#eye3').fadeOut('slow');
  $('#eye1').fadeOut('slow');
  $('#eye5').fadeOut('slow');
  $('#eire-map').fadeOut('slow');
  $('#back-to-main-menu').fadeIn();

  setTimeout(function() {
    $('#eye7').fadeOut('slow');
    $('#eye3').fadeOut('slow');
    $('#eye1').fadeOut('slow');
    $('#eye5').fadeOut('slow');
    $('#eire-map').fadeOut('slow');

    $('#eire-map').css('height', '700px');
    $('#eire-map').css('width', '600px');
  }, 1000);
  //   alert('province selected');
}
//ULSTER click handler

$('#eye1').click(function() {
  provinceSelected();
  $('.levelDescription').text('Uladh');

  setTimeout(function() {
    $('#eire-map').css('background-image', "url('./images/maps/u2.png')");

    $('#eire-map').fadeIn('slow');
    setTimeout(function() {
      $('.uladh').fadeIn();
    }, 1000);
    // alert('co');
    //show Galway Leitrim Mayo Roscommon Sligo
  }, 1000);
});

//MUNSTER click handler

$('#eye5').click(function() {
  provinceSelected();
  $('.levelDescription').text('An Mhumhain');

  setTimeout(function() {
    $('#eire-map').css('background-image', "url('./images/maps/m2.png')");

    $('#eire-map').fadeIn('slow');
    setTimeout(function() {
      $('.mumhain').fadeIn();
    }, 1000);
    // alert('co');
    //show Galway Leitrim Mayo Roscommon Sligo
  }, 1000);
});

//LEINSTER click handler

$('#eye3').click(function() {
  provinceSelected();
  $('.levelDescription').text('An Laighean');

  setTimeout(function() {
    $('#eire-map').css('background-image', "url('./images/maps/l2.png')");

    $('#eire-map').fadeIn('slow');
    setTimeout(function() {
      $('.laighean').fadeIn();
    }, 1000);
    // alert('co');
    //show Galway Leitrim Mayo Roscommon Sligo
  }, 1000);
});

//CONNAUGHT hover:
$('#antrim').hover(function() {
  $('.levelDescription').text(`Co. Aontroma`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Antr.png')");
});

$('#armagh').hover(function() {
  $('.levelDescription').text(`Co. Ard Ṁaċa`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Arma.png')");
});
$('#cavan').hover(function() {
  $('.levelDescription').text(`Co. An Caḃáin`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Cava.png')");
});
$('#derry').hover(function() {
  $('.levelDescription').text(`Co. Ḋoire`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Derr.png')");
});

$('#donegal').hover(function() {
  $('.levelDescription').text(`Co. Ḋún na nGall`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Done.png')");
});

$('#down').hover(function() {
  $('.levelDescription').text(`Co. An Dúin`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Down.png')");
});

$('#fermanagh').hover(function() {
  $('.levelDescription').text(`Co. Ḟear Manaċ`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Ferm.png')");
});

$('#tyrone').hover(function() {
  $('.levelDescription').text(`Co. Ṫír Eoghain`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Tyro.png')");
});

$('#monaghan').hover(function() {
  $('.levelDescription').text(`Co. Ṁuineaċáin`);
  $('#eire-map').css('background-image', "url('./images/maps/u2Mona.png')");
});

//CONNAUGHT click handler
$('#eye7').click(function() {
  provinceSelected();
  $('.levelDescription').text('Connachta');

  setTimeout(function() {
    $('#eire-map').css('background-image', "url('./images/maps/c2.png')");

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
  $('#eire-map').css('background-image', "url('./images/maps/c2Gal.png')");
});

$('#leitrim').hover(function() {
  $('.levelDescription').text(`Co. Liatroma`);
  $('#eire-map').css('background-image', "url('./images/maps/c2Leit.png')");
});

$('#mayo').hover(function() {
  $('.levelDescription').text(`Co. Mhaigh Eo`);
  $('#eire-map').css('background-image', "url('./images/maps/c2Mayo.png')");
});

$('#roscommon').hover(function() {
  $('.levelDescription').text(`Co. Ros Comáin`);
  $('#eire-map').css('background-image', "url('./images/maps/c2Rosc.png')");
});

$('#sligo').hover(function() {
  $('.levelDescription').text(`Co. Shligigh`);
  $('#eire-map').css('background-image', "url('./images/maps/c2Slig.png')");
});

//MUNSTER hover:
$('#clare').hover(function() {
  $('.levelDescription').text(`Co. An Ċláir`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Clar.png')");
});
$('#tipperary').hover(function() {
  $('.levelDescription').text(`Co. Ṫiobraid Árann`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Tipp.png')");
});

$('#cork').hover(function() {
  $('.levelDescription').text(`Co. Ċorcaí `);
  $('#eire-map').css('background-image', "url('./images/maps/m2Cork.png')");
});

$('#kerry').hover(function() {
  $('.levelDescription').text(`Co. Ċiarraí`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Kerr.png')");
});

$('#limerick').hover(function() {
  $('.levelDescription').text(`Co. Luimnigh`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Limr.png')");
});

$('#waterford').hover(function() {
  $('.levelDescription').text(`Co. Loch Garman`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Wate.png')");
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
