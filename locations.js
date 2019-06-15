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

  for (var key in countyDetails) {
    if (key == myCookie) {
      console.log(key + '->' + countyDetails[key][0]);
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  ],
  derry: [
    `Co. Ḋoire`,
    [
      `Léim an Ṁadaiḋ`,
      `Maċaire Ráṫa`,
      `An Seanṁullach`,
      `Droichead Fíolta`,
      `Muine Mór`,
      `Droichead Fíolta`
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  ],
  galway: [
    `Co. na Gailliṁe`,
    [
      `Tuaim`,
      `An Spidéal `,
      `An Ċeaṫrú Rua`,
      `An Teach Dóite`,
      `Inis Bó Finne`,
      `Inis Meáin `
    ]
  ],
  kerry: [
    `Co. Ċiarraí`,
    [
      `Na Cruaċa Duḃa`,
      `An tSnaidhm`,
      `An Daingean `,
      `Neidín`,
      `Cathair Saiḋḃín`,
      `Sliabh Mis`
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  ],
  limerick: [
    `Co. Luimnigh`,
    [
      `Brú Rí`,
      `Pailis Ċaonraí`,
      `Áth na bḞuinseog`,
      `Caisleán Uí Ċonaill`,
      `An Ḟeoṫanaċ`,
      `Lios na Graí`
    ]
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
    ]
  ],
  louth: [
    `Co.Lú`,
    [
      `Dún Dealgan`,
      `Ceann Ċloċair`,
      `Dún Léire`,
      `An Grianfort`,
      `Baile Átha Ḟirdia`,
      `Baile an Ġearlánaigh`
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  ],
  wexford: [
    `Co. Loch Garman`,
    [
      `An Abhainn Dubh`,
      `Coill an Iarainn`,
      `Dún Ċormaic`,
      `Baile an Droichid`,
      `Maolán na nGaḃar`,
      `Inis Córṫaidh`
    ]
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
    ]
  ]
};
