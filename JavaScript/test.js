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
  name : "autonomie",
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




// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


//Param : String
//Fonction permettant de determiner l'intention de l'utilisateur de manière basique
function getIntention (string) {

var intentions = [meteo, agenda, autonomie, ennui];

  //Découpe du string en parametre et incrémentaions des variables matchWords si necessaire
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


var listeTrié=[]

//Je vide la liste intentions pour le tri
//La variable indice est l'indice du maximum
while(intentions.length!=0){
  var indice=0;
  for(var i =1; i<intentions.length; i++){
    if(intentions[i].matchWords>=intentions[indice].matchWords){
      indice=i;
    }
  }
  //Je ne veux que les matchWords différent de 0
  if(intentions[indice].matchWords!=0){
  listeTrié.push(intentions[indice]);
}
//Je retire l'élèment maximum de la liste
intentions.remove(indice);
}

return listeTrié;
}


//TESTS//
console.log(getIntention("test"));
