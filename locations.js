$(document).ready(function() {
  // chosenCounty = this.id;
  console.log('hi' + Cookies.get('playerCounty'));
  var myCookie = Cookies.get('playerCounty');
  if (myCookie != '') {
    let chosenCountyImg = "url('./images/maps/coMaps/" + myCookie + '.png';
    $('#county-map').css('border', '5px solid red');
    $('#county-map').css('background-image', chosenCountyImg);
  } else {
    console.log('still no cookie');
  }

  for (var key in countyDetails) {
    if (key == myCookie) {
      console.log(key + '->' + countyDetails[key]);
      $('#location-description').html(countyDetails[key]);
    }
  }
});
let countyDetails = {
  antrim: [`Co. Aontroma`],
  armagh: [`Co. Ard Ṁaċa`],
  carlow: [`Co. Ċeaṫarlaċ`],
  cavan: [`Co. An Caḃáin`],
  clare: [`Co. An Ċláir`],
  cork: [`Co. Ċorcaí `],
  derry: [`Co. Ḋoire`],
  donegal: [`Co. Ḋún na nGall`],
  down: [`Co. An Dúin`],
  dublin: [`Co. Ḃaile Átha Ċliath`],
  fermanagh: [`Co. Ḟear Manaċ`],
  galway: [`Co. na Gailliṁe`],
  kerry: [`Co. Ċiarraí`],
  kildare: [`Co. Ċill Dara`],
  kilkenny: [`Co. Ċill Ċainniġ`],
  laois: [`Co. Laoise`],
  leitrim: [`Co. Liatroma`],
  limerick: [`Co. Luimnigh`],
  longford: [],
  louth: [`Co.Lú`],
  mayo: [`Co. Mhaigh Eo`],
  meath: [`Co. Na Mí`],
  monaghan: [`Co. Ṁuineaċáin`],
  offaly: [`Co. Uíḃ Ḟailí`],
  roscommon: [`Co. Ros Comáin`],
  sligo: [`Co. Shligigh`],
  tipperary: [`Co. Ṫiobraid Árann`],
  tyrone: [`Co. Ṫír Eoghain`],
  waterford: [`Co. Ṗort Láirge`],
  westmeath: [`Co. Na hIarṁí`],
  wexford: [`Co. Loch Garman`],
  wicklow: [`Co. Ċill Ṁantáin`]
};
