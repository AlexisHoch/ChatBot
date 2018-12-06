var meteo = {
  name : "meteo",
  keyWords: ["meteo", "temps", "temperature", "chaud", "froid", "prevision", "canicule", "degres"],
  values: [10, 5, 5, 3, 3, 3, 3, 5],
  tree: [],
  matchWords:0,
};

var agenda = {
  name : "agenda",
  keyWords: ["agenda", "planning", "prevision", "maintenance"],
  values: [10, 10, 3, 3],
  tree: [],
  matchWords:0,
};

var autonomie = {
  name : "batterie",
  keyWords: ["autonomie", "batterie", "niveau", "maintenance", "robot"],
  values: [10, 10, 3, 3, 5, ],
  tree: [],
  matchWords:0,
};

var ennui = {
  name : "ennui",
  keyWords: ["ennui", "ennuie", "niveau", "maintenance", "robot", ""],
  values: [10, 10, 3, 3, 5, ],
  tree: [],
  matchWords:0,
};


var intentions = [meteo, agenda];

//Param : String
//Fonction permettant de determiner l'intention de l'utilisateur de manière basique
function getIntention (string) {

  var mots = string.split(' ');
  for(var i=0; i<mots.length; i++) {
      var mot=mots[i];

      for(var j=0; j<intentions.length; j++){


        for(var k =0; k<intentions[j].keyWords.length; k++){
          if(intentions[j ].keyWords[k]==mot){
            intentions[j].matchWords=intentions[j].matchWords+intentions[j].values[k];
          }
        }
      }
  }


  var maxIntent=[];
  for(var i = 0; i<intentions.length; i++){
    if(intentions[i].matchWords>maxIntent.matchWords){
      maxIntent = intentions[i];
      }
    intentions[i].matchWords=0;

    }


return maxIntent;
}






//TESTS//
var intent = getIntention("Donne moi la meteo");
console.log(intent);
