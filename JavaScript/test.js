var meteo = {
  name : "meteo",
  keyWords: ["meteo", "temps", "temperature", "chaud", "froid", "prevision", "previsions",  "canicule", "degres", "intemperie"],
  values: [10, 5, 5, 3, 3, 3, 3, 3, 5, 8],
  tree: [],
  matchWords:0,
};

var agenda = {
  name : "agenda",
  keyWords: ["agenda", "planning", "prevision","previsions", "maintenance"],
  values: [10, 10, 3, 3, 3],
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
  keyWords: ["ennui", "ennuie"],
  values: [10, 10],
  tree: [],
  matchWords:0,
};


var intentions = [meteo, agenda, autonomie, ennui];

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


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


  var maxIntents =[];

  for(var i =0; i<2; i++){

    var maxIntent=meteo;
    for(var j =1; j<intentions.length; j++){
      if(intentions[j].matchWords>maxIntent.matchWords & maxIntents.indexOf(maxIntent)==-1){
        maxIntent=intentions[j];
      }
    }
    maxIntents.unshift(maxIntent);
    maxIntent=meteo
  }

return maxIntents;
}


//TESTS//
