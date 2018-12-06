var meteo = {
  name : "meteo",
  keyWords: ["meteo", "temps", "temperature"],
  values: [10, 5, 5],
  tree: [],
  matchWords:0,
};


var intentions = [meteo];

function getIntention (string) {

  var mots = string.split(' ');
  for(var i=0; i<mots.length; i++) {
      var mot=mots[i];

      for(var j=0; j<intentions.length; j++){


        for(var k =0; k<intentions[j].keyWords.length; k++){
          if(intentions[j].keyWords[k]==mot){
            intentions[j].matchWords=intentions[j].matchWords+intentions[j].values[k];
            console.log(intentions[j].matchWords);
          }
        }
      }
  }



}






//TESTS//
getIntention("Donne moi la meteo de demain");
