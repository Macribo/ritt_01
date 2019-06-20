$(document).ready(function() {
  // chosenCounty = this.id;
  console.log('hi' + Cookies.get('playerCounty'));
  var myCookie = Cookies.get('playerCounty');
  if (myCookie != '') {
    let chosenCountyImg = "url('./images/maps/coMaps/" + myCookie + '.png';
    // $('#county-map').css('border', '5px solid red');
    $('#county-map').css('background-image', chosenCountyImg);
  } else {
    console.log('still no cookie');
  }

  $('#back-to-counties').click(function() {
    location.href = 'file:///home/devugees/Desktop/ritt_01/index.html';
  });

  setTimeout(function() {
    $('#map-pins').css('opacity', 1);
  }, 500);
  //add location pins to county map
  for (var key in countyDetails) {
    if (key == myCookie) {
      $('#first-map-pin').css('left', countyDetails[key][2][0]);
      $('#first-map-pin').css('top', countyDetails[key][3][0]);
      $('#second-map-pin').css('left', countyDetails[key][2][1]);
      $('#second-map-pin').css('top', countyDetails[key][3][1]);
      $('#third-map-pin').css('left', countyDetails[key][2][2]);
      $('#third-map-pin').css('top', countyDetails[key][3][2]);
      $('#fourth-map-pin').css('left', countyDetails[key][2][3]);
      $('#fourth-map-pin').css('top', countyDetails[key][3][3]);
      $('#fifth-map-pin').css('left', countyDetails[key][2][4]);
      $('#fifth-map-pin').css('top', countyDetails[key][3][4]);
      $('#sixth-map-pin').css('left', countyDetails[key][2][5]);
      $('#sixth-map-pin').css('top', countyDetails[key][3][5]);
    }
  }

  $('#first-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][1][0]);
      }
    }
  });

  $('#second-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][1][1]);
      }
    }
  });

  $('#third-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][1][2]);
      }
    }
  });

  $('#fourth-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][1][3]);
      }
    }
  });

  $('#fifth-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][1][4]);
      }
    }
  });

  $('#sixth-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][1][5]);
      }
    }
  });

  $('.map-pin').mouseleave(function() {
    for (var key in countyDetails) {
      if (key == myCookie) {
        $('#location-description').html(countyDetails[key][0]);
      }
    }
  });
  for (var key in countyDetails) {
    if (key == myCookie) {
      //   console.log(key + '->' + countyDetails[key][0]);
      $('#location-description').html(countyDetails[key][0]);
      console.log(
        'Cá háit go dírach i ' +
          countyDetails[key][0] +
          '?' +
          countyDetails[key][1][1],
        countyDetails[key][1][2],
        countyDetails[key][1][3],
        countyDetails[key][1][4],
        countyDetails[key][1][5]
      );
    }
  }
});
let countyDetails = {
  antrim: [
    `Co. Aontroma`,
    [
      `Béal Feiriste`,
      `Carraig Ḟearġais`,
      `Reaċlainn`,
      `Aċaḋ Eoċaille`,
      `Carn Ṁéaḃla`,
      `Dearḃóg`
    ],
    //left
    [314, 353, 234, 237, 275, 218],
    //top
    [353, 273, 5, 201, 299, 47]
  ],
  armagh: [
    `Co. Ard Ṁaċa`,
    [
      `Port An Dúnáin`,
      `Sráid na nAlbanach`,
      `Baile an Ṁuilinn`,
      `Baile Úr`,
      `Lios Liath`,
      `Craigavon`
    ], //left
    [313, 233, 243, 217, 308, 291],
    //top
    [9, 14, 166, 290, 333, 25]
  ],
  carlow: [
    `Co. Ċeaṫarlaċ`,
    [
      `Baile Haicéid`,
      `An Ḃuiríos`,
      `Miseal`,
      `Cill Deirge`,
      `Baile Uí Ṁurċú`,
      `Cill Daṁáin`
    ], //left
    [274, 198, 342, 225, 328, 330],
    //top
    [172, 215, 200, 64, 21, 250]
  ],
  cavan: [
    `Co. An Caḃáin`,
    [
      `Dún an Rí`,
      `Lios Cré`,
      `Béal Tairbirt`,
      `Doire na Criaḋ`,
      `An Dromainn`,
      `An Cnoc Rua`
    ], //left
    [463, 428, 340, 138, 380, 278],
    //top
    [275, 340, 149, 58, 300, 108]
  ],
  clare: [
    `Co. An Ċláir`,
    [
      `Fíoch Rua`,
      `Ceann Boirne`,
      `Leaba Ṡíoda`,
      `An Tulach`,
      `Cill Rois`,
      `Bun Raite`
    ], //left
    [159, 125, 163, 344, 110, 321],
    //top
    [195, 21, 341, 193, 371, 270]
  ],
  cork: [
    `Co. Ċorcaí `,
    [
      `Sliabh an Nóglaigh`,
      `Cill na Mallaċ`,
      `Cionn tSáile`,
      `An Sciobairín`,
      `Gleann an Ṗreaċáin`,
      `Beal na mḂláth`
    ], //left
    [405, 346, 378, 191, 404, 362],
    //top
    [153, 90, 286, 345, 156, 246]
  ],
  derry: [
    `Co. Ḋoire`,
    [
      `Léim an Ṁadaiḋ`,
      `Maċaire Ráṫa`,
      `An Seanṁullach`,
      `Droichead Fíolta`,
      `Muine Mór`,
      `Doire`
    ], //left
    [234, 370, 411, 267, 389, 80],
    //top
    [112, 294, 247, 155, 368, 139]
  ],
  donegal: [
    `Co. Ḋún na nGall`,
    [
      `Sléiḃte Ḋoire Ḃeatha`,
      `Na Cruaċa`,
      `Bealach Féich`,
      `Leitir Ceanainn`,
      `Cionn Dhún Damh`,
      `Bun na hAḃann`
    ], //left
    [214, 189, 270, 305, 382, 234],
    //top
    [127, 268, 247, 191, 18, 81]
  ],
  down: [
    `Co. An Dúin`,
    [
      `An Caisleán Riaḃach`,
      `An Ṁainistir Liath`,
      `Dún Pádraig`,
      `Cill Ċaoil`,
      `Lios na gCearrḃach`,
      `An Lorgain`
    ],
    [281, 412, 393, 222, 230, 123],
    //top
    [103, 117, 242, 401, 114, 177]
  ],
  dublin: [
    `Co. Ḃaile Átha Ċliath`,
    [
      `Deilginis`,
      `Binn Éadair`,
      `Cluain Dolcáin`,
      `Cluain Tarbh`,
      `Dún Laoiġaire`,
      `Fionnġlas`
    ],
    [303, 303, 240, 281, 271, 254],
    //top
    [319, 250, 256, 254, 297, 190]
  ],
  fermanagh: [
    `Co. Ḟear Manaċ`,
    [
      `Inis Ceiṫleann`,
      `Scriobaċ`,
      `An Garastún `,
      `Lios na Daróg`,
      `Eadarnaiḋ`,
      `Paiteagó`
    ],
    [273, 132, 19, 257, 258, 148],
    //top
    [213, 196, 84, 106, 20, 35]
  ],
  galway: [
    `Co. na Gailliṁe`,
    [
      `Cill Cais`,
      `An Spidéal `,
      `An Ċeaṫrú Rua`,
      `An Teach Dóite`,
      `Poll an Phúca`,
      `Inis Meáin `
    ],
    [246, 215, 122, 168, 341, 111],
    //top
    [217, 233, 236, 198, 146, 299]
  ],
  kerry: [
    `Co. Ċiarraí`,
    [
      `Na Cruaċa Duḃa`,
      `An tSnaidhm`,
      `An Daingean`,
      `Gleann na bPúcaí`,
      `Cathair Saiḋḃín`,
      `Sliabh Mis`
    ],
    [235, 123, 17, 111, 9, 234],
    //top
    [268, 374, 159, 159, 118, 110]
  ],
  kildare: [
    `Co. Ċill Dara`,
    [
      `An Currach`,
      `Léim an Ḃradáin`,
      `Maigh Nuad`,
      `Fioḋ Alúine`,
      `Cairbre`,
      `Na Solláin`
    ],
    [329, 384, 368, 254, 239, 372],
    //top
    [268, 374, 159, 159, 118, 110]
  ],
  kilkenny: [
    `Co. Ċill Ċainniġ`,
    [
      `Ġráinseaċ Ċuffe`,
      `Baile Ṁic Andáin`,
      `Dún Garḃáin`,
      `Bearna na Gaoiṫe`,
      `Sliaḃ Rua`,
      `Baile an Ṗoill`
    ],
    [157, 272, 274, 207, 274, 215],
    //top
    [228, 295, 334, 300, 397, 361]
  ],
  laois: [
    `Co. Laoise`,
    [
      `Cúil an tSúdaire`,
      `Baile Átha Í`,
      `Eiréil `,
      `Buiríos Mór Osraí`,
      `Darú`,
      `An Baile Fionn`
    ],
    [249, 109, 161, 275, 265, 298],
    //top
    [316, 285, 119, 255, 121, 84]
  ],
  leitrim: [
    `Co. Liatroma`,
    [
      `Gleann Éada`,
      `Aċaḋ na Síleann`,
      `Fíonach`,
      `Dromad`,
      `Droim Seanḃó`,
      `Garḃach`
    ],
    [182, 302, 310, 272, 222, 202],
    //top
    [47, 215, 278, 347, 208, 126]
  ],
  limerick: [
    `Co. Luimnigh`,
    [
      `Brú Rí`,
      `Pailis Ċaonraí`,
      `Áth na bḞuinseog`,
      `Caisleán Uí Ċonaill`,
      `An Ḟeoṫanaċ`,
      `Poll an Phúca`
    ],
    [220, 198, 98, 376, 151, 284],
    //top
    [178, 64, 247, 19, 268, 46]
  ],
  longford: [
    `Co. An LongFoirt`,
    [
      `Maiġ Duṁa`,
      `An Lios Breac`,
      `Cluain Dá Ráth`,
      `An Ċarraig Ḃuí`,
      `Gránard`,
      `Meathais Troim`
    ],
    [232, 197, 166, 306, 393, 300],
    //top
    [231, 154, 245, 232, 154, 171]
  ],
  louth: [
    `Co.Lú`,
    [
      `Dún Dealgan`,
      `Ceann Ċloċair`,
      `Poll an Phúca`,
      `An Grianfort`,
      `Baile Átha Ḟirdia`,
      `Baile an Ġearlánaigh`
    ],
    [287, 450, 254, 370, 187, 323],
    //top
    [87, 53, 254, 137, 286, 236]
  ],
  mayo: [
    `Co. Mhaigh Eo`,
    [
      `An Éill`,
      `An Caoláire Rua`,
      `Caisleán an Ḃarraiġ`,
      `Baile Ui Ḟiacáin`,
      `Lios an tSaṁaiḋ`,
      `Cill Ala`
    ],
    [251, 196, 235, 155, 366, 380],
    //top
    [335, 341, 172, 196, 350, 108]
  ],
  meath: [
    `Co. Na Mí`,
    [
      `Teamhair`,
      `An Uaimh`,
      `Tigh na Sióg`,
      `Cill Ḃríde`,
      `Ráth Ċairn`,
      `Buaile na Bréachṁaí `
    ],
    [298, 274, 349, 206, 172, 122],
    //top
    [240, 187, 356, 224, 203, 387]
  ],
  monaghan: [
    `Co. Ṁuineaċáin`,
    [
      `Carraig Ṁaċaire Rois`,
      `Teach an Scotaigh`,
      `Cluain Eois`,
      `Scairbh na gCaorach`,
      `Einistir Ḃuithe`,
      `Crícheán Rua`
    ],
    [383, 132, 191, 249, 234, 380],
    //top
    [402, 281, 73, 17, 148, 200]
  ],
  offaly: [
    `Co. Uíḃ Ḟailí`,
    [
      `Cluain Ṁic Nóis`,
      `Biorra`,
      `Suí an Róin`,
      `Cionn Eitigh`,
      `Éadan Doire`,
      `Ráth Iomġáin`
    ],
    [133, 143, 141, 222, 442, 432],
    //top
    [88, 215, 284, 253, 76, 154]
  ],
  roscommon: [
    `Co. Ros Comáin`,
    [
      `Corr na Fola`,
      `Scramóg`,
      `Cluain Fada`,
      `Baile an Tobair`,
      `Loch Bó Dearge`,
      `Loch Bó Finne`
    ],
    [328, 316, 164, 240, 353, 357],
    //top
    [354, 211, 215, 191, 212, 124]
  ],
  sligo: [
    `Co. Shligigh`,
    [
      `Gob Reaċla`,
      `An Mullach Mór`,
      `Baile Uí Ḋálaigh`,
      `Béal Átha na gCarraigíní`,
      `An Ċéis`,
      `Tobar an Ċoire`
    ],
    [261, 295, 204, 306, 375, 195],
    //top
    [98, 190, 166, 110, 315, 324]
  ],
  tipperary: [
    `Co. Ṫiobraid Árann`,
    [
      `Ros Cré`,
      `Durlas`,
      `Tigh na Naoi Míle`,
      `Faiċe Ró`,
      `Sliabh na mBan`,
      `Cluain Meala`
    ],
    [293, 332, 363, 358, 282, 259],
    //top
    [102, 263, 309, 285, 307, 342]
  ],
  tyrone: [
    `Co. Ṫír Eoghain`,
    [
      `An Ómaigh`,
      `An Ċorr Ċríochach`,
      `Dún Geanainn`,
      `Caisleán na Deirge`,
      `Baile Mhic Gofraidh`,
      `An Caisleán Glas`
    ],
    [211, 386, 426, 157, 268, 302],
    //top
    [221, 161, 306, 113, 103, 175]
  ],
  waterford: [
    `Co. Ṗort Láirge`,
    [
      `Dún Garḃán`,
      `An Baile Dubh`,
      `Cill Ṁíodáin`,
      `Tullach an Iarainn`,
      `Cluain Ḟia`,
      `Sléiḃte an Ċomaraigh`
    ],
    [251, 103, 406, 85, 185, 261],
    //top
    [257, 188, 169, 266, 357, 138]
  ],
  westmeath: [
    `Co. Na hIarṁí`,
    [
      `Ráth Ḟearna`,
      `Baile na gCailleach`,
      `Na Colúir`,
      `An Teanga`,
      `Cill Ḃeagáin`,
      `An Muileann gCearr`
    ],
    [467, 393, 74, 14, 223, 374],
    //top
    [166, 48, 221, 178, 314, 252]
  ],
  wexford: [
    `Co. Loch Garman`,
    [
      `An Abhainn Dubh`,
      `Coill an Iarainn`,
      `Dún Ċormaic`,
      `Poll an Phúca`,
      `Maolán na nGaḃar`,
      `Inis Córṫaidh`
    ],
    [118, 393, 301, 236, 288, 345],
    //top
    [308, 17, 352, 152, 181, 123]
  ],
  wicklow: [
    `Co. Ċill Ṁantáin`,
    [
      `An tInḃear Mór`,
      `Na Cloċa Liaṫa`,
      `Poll an Ṗúca`,
      `Dún Ard`,
      `Siol Éalaiġ`,
      `Aḃóca`
    ],
    //left
    [359, 374, 216, 155, 164, 360],
    //top
    [293, 70, 69, 185, 125, 293]
  ]
};
