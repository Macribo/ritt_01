$(document).ready(function() {
  $('.county').tilt({
    scale: 1.1,
    maxTilt: '7',
    perspective: 400,
    speed: 3000
  });
  $('.eyes').tilt({
    scale: 1.1,
    maxTilt: '7',
    perspective: 400,
    speed: 3000
  });

  //HOVER ON PROVINCES:
  //ULSTER
  $('#eye1').hover(function() {
    console.log('hover1');
    // $('.selectedLv').css('background-image', "url('v1.png')");
    $('.selectedLv').text('Feabhas');

    $('#eire-map').css('background-image', 'url("./images/u.png")');

    $('.levelDescription').text(`Uladh`);
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
//back-to-main-menu-button

$('#back-to-main-menu').click(function() {
  $('.county').fadeOut('slow');
  $('#eire-map').fadeOut('slow');
  $('.levelDescription').text('');

  setTimeout(function() {
    $('#eire-map').css('height', '500px');
    $('#eire-map').css('width', '400px');
    $('#eye7').fadeIn('slow');
    $('#eye3').fadeIn('slow');
    $('#eye1').fadeIn('slow');
    $('#eye5').fadeIn('slow');
    $('#back-to-main-menu').fadeOut();
    $('#eire-map').css('background-image', "url('./images/e.png')");
    $('#eire-map').fadeIn('slow');
  }, 1000);
  //clear player object
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

//LEINSTER hover:
$('#carlow').hover(function() {
  $('.levelDescription').text(`Co. Ċeaṫarlaċ`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Carl.png')");
});

$('#dublin').hover(function() {
  $('.levelDescription').text(`Co. Ḃaile Átha Ċliath`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Dubl.png')");
});
$('#kildare').hover(function() {
  $('.levelDescription').text(`Co. Ċill Dara`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Kild.png')");
});
$('#kilkenny').hover(function() {
  $('.levelDescription').text(`Co. Ċill Ċainniġ`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Kilk.png')");
});

$('#laois').hover(function() {
  $('.levelDescription').text(`Co. Laoise`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Laoi.png')");
});

$('#longford').hover(function() {
  $('.levelDescription').text(`Co. An LongFoirt`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Long.png')");
});

$('#louth').hover(function() {
  $('.levelDescription').text(`Co.Lú`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Lout.png')");
});

$('#meath').hover(function() {
  $('.levelDescription').text(`Co. Na Mí`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Meat.png')");
});

$('#offaly').hover(function() {
  $('.levelDescription').text(`Co. Uíḃ Ḟailí`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Offa.png')");
});

$('#westmeath').hover(function() {
  $('.levelDescription').text(`Co. Na hIarṁí`);
  $('#eire-map').css('background-image', "url('./images/maps/l2West.png')");
});

$('#wexford').hover(function() {
  $('.levelDescription').text(`Co. Loch Garman`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Wexf.png')");
});

$('#wicklow').hover(function() {
  $('.levelDescription').text(`Co. Ċill Ṁantáin`);
  $('#eire-map').css('background-image', "url('./images/maps/l2Wick.png')");
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
  $('.levelDescription').text(`Co. Ṗort Láirge`);
  $('#eire-map').css('background-image', "url('./images/maps/m2Wate.png')");
});
let myEmblem;
$('.county').mouseenter(function() {
  //   alert('enter')
  //   console.log(this.id);
  myEmblem = this.id;
  let myEmblemImg = "url('./images/emblems/" + myEmblem + '.png';
  //   $('.county').css('filter', 'grayscale(100%)');
  $('.county').css(
    'background-image',
    "url('./images/emblems/nullEmblem.png')"
  );
  $('#' + myEmblem).css('background-image', myEmblemImg);
});

$('.county').mouseleave(function() {
  //   alert('leave');
});

$('.county').click(function() {
  // chosenCounty = this.id;
  Cookies.set('playerCounty', myEmblem);
  console.log('hi from cookie script');

  //    leave();
  //   alert('test');
});
