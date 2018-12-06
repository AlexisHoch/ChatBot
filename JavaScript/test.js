function getIntention (string) {

  var mots = string.split(' ');

  for(var i; i<mots.length; i++) {
      console.log(mots[i]);
  }

}


getIntention("Je cherche une poupée russe");
