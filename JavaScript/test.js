//                    Arbre Agenda                    //

// var Oui = {
//   père : "Agenda",
//   réponse : "Oui",
//   description : "Que veux tu savoir?",
//   fils : null,
// };
// var Non = {
//   père : "Agenda",
//   réponse : "Non",
//   description : "Apprends à parler",
//   fils : null,
// };



var NonR = {
  père: "Rappels",
  réponse : "NonR",
  description : "Comment ça non? Je fais ce que je veux en fait, c'est MOI le Boss."+"..."+"Enfin bref, il te reste (x) portions de nourriture, va falloir se calmer sur la bouffe sinon tu vas mal finir, il reste assez d'eau pour remplir une Bestway Piscine Hors-Sol Acier Hydrium 360 x 120 cm, je sais pas vraiment si ça t'aide à représenter la quantité qu'il te reste mais bon tu vas faire avec. Faut vraiment que j'arrête de tout commenter comme ça...",
  fils : null};

  var OuiR = {
    père: "Rappels",
    réponse : "OuiR",
    description : "Alors, tu m'obliges à beaucoup trop parler là, t'abuses."+"..."+" Enfin bref, il te reste (x) portions de nourriture, va falloir se calmer sur la bouffe sinon tu vas mal finir, il reste assez d'eau pour remplir une Bestway Piscine Hors-Sol Acier Hydrium 360 x 120 cm, je sais pas vraiment si ça t'aide à représenter la quantité qu'il te reste mais bon tu vas faire avec. Faut vraiment que j'arrête de tout commenter comme ça...",
    fils : null};


var Rappels = {
  père: "Que veux-tu savoir ?",
  réponse : "Rappels",
  description : "Veux tu des rappels intéressants ?",
  fils : [OuiR,NonR]};

  var Patience = {
    père: "Extraction",
    réponse : "Patience",
    description : "Tiens bon il te reste 3 jours, non je plaisante, prends ton mal en patience."+"..."+"(x) jours restants",
    fils : null};


var Extraction = {
  père: "Que veux-tu savoir ?",
  réponse : "Extraction",
  description : "Combien de jours reste t-il avant l'extraction ?",
  fils : [Patience]};

var Robots = {
  père: "Maintenance",
  réponse : "Robots",
  description : "Ton QrX16 nécessite une maintenance demain sans, faute sinon ton gentil toutou va rester couché; le CH2019 est opérationnel pour un bon moment, après c'est nnormal il fait pas grand chose mais bon il est bien brave.",
  fils : null};

var Maintenance = {
  père: "Que veux-tu savoir ?",
  réponse : "Maintenance",
  description : "Qu'en est-il de la maintenance des robots?",
  fils : [Robots]};

var Raler = {
  père: "Kilometre",
  réponse : "Raler",
  description : "Commence pas à râler qu'il te reste (x) kilomètres encore.",
  fils : null};

var Kilometre = {
  père: "Que veux-tu savoir ?",
  réponse : "Kilometre",
  description : "Combien de kilometre je dois parcourir aujourd'hui?",
  fils : [Raler]};

var LancementAgenda = {
  père : null ,
  réponse : null ,
  description : "Que veux-tu savoir ?",
  fils : [Kilometre,Maintenance,Extraction,Rappels],
};





//                    ARBRE METEO                 //

var Météo = null;
var Aujourdhui = null;
var Demain = null;
var Oui = null;
var Non = null;
var Semaine = null;
var Température = null;
var Matin = null;
var Aprem = null;
var Soir = null;
var DemainT = null;
var SemaineT = null;
var Tempête = null;


var Aujourdhui = {
  père : "Météo",
  réponse : "Aujourdhui",
  description : "Regarde par la fenêtre et tu verras quel temps il fait dehors flemmard.... .... Bon, je vais te donner le temps... .... Il fait beau",
  fils : null,
};

var Oui = {
  père : "Demain",
  réponse : "Oui",
  description: "Fais la danse de la pluie demain",
  fils : null,
};

var Non = {
  père : "Demain",
  réponse: "Non",
  description:"Il fera de la pluie",
  fils : null,
};

var Demain = {
père : "Météo",
réponse : "Demain",
description: "Tu veux savoir s'il va y avoir de la pluie demain ?",
fils : [Oui,Non],};

var Semaine = {
    père : "Météo",
    réponse : "Semaine",
    description : "D'après toi il va faire quel temps dans un désert petit génie ?",
    fils : null,
};

var Météo = {
  père : "Que veux-tu savoir ?",
  réponse : "Météo",
  description : "Tu veux la météo de quand ?",
  fils : [Aujourdhui,Demain, Semaine],
};

var Tempête =   {
    père: "Que veux-tu savoir ?",
    réponse : "Tempête",
    description: "Prochaine tempête : dans 10 jours",
    fils : null,
  };

var MatinT={
  père : "Température",
  réponse: "Matin",
  description : "Il fait 58°c",
  fils : null,
};

var ApremT = {
 père : "Température",
 réponse: "Aprem",
 description : "Il fait 65°c, je te déconseille de marcher pendant ce créneau horaire sinon tu vas pas pouvoir supporter la chaleur, je suis quand même là pour t’aider.",
 fils : null,
};

var SoirT = {
 père : "Température",
 réponse : "Soir",
 description : " Tu vas dormir dans ton cockpit réfrigéré pendant la nuit ça te sert à rien de savoir la température",
 fils : null,
};

var DemainT =   {
   père : "Température",
   réponse: "Demain",
   description : "Il fera beau, normalement, toute la journée, ou p'tet pas.",
   fils : null,
 };

var SemaineT= {
  père : "Température",
  réponse: "Semaine",
  description : "Tu le sauras quand on sera la semaine prochaine",
  fils : null,
};

var Température = {
  père: "Que veux-tu savoir ?",
  réponse : "Température",
  description : "Quelle température veux-tu connaître ?",
  fils : [  MatinT , ApremT, SoirT, DemainT, SemaineT],};

var LancementMeteo = {
  père : null ,
  réponse : null ,
  description : "Que veux-tu savoir ?",
  fils : [Météo,Température,Tempête],
};


/*function lancement(arrayIntention){
  var objet = arrayIntention[0];
  console.log("Voulez vous bien", objet, "?");
  if ("Yes"){
    objet.tree;
  }
  else{
    (obje)
  }
}*/






//                    ARBRE ENNUI                   //







//                    ARBRE SURVIE                   //




var QrX16 = {
  père: "Maintenance",
  réponse:"QrX16",
  description : "	Il lui faut une maintenance	demain"
    +"dernier delai, sinon il va tomber,"
    +"tu devrais éviter de le surmener le pauvre,"
    +"si ça continue continue comme ça, il va partir"
    +"en arrêt maladie le con, ou bien pire encore, bloquer un rond-point.",
  fils:[],
};

var CH2019 = {
  père : "Maintenance",
  réponse : "CH2019",
  description : "Lequel?"
  +"...."
  +"Ah si je vois du quel tu parles c'est un brave gars, il n'a pas besoin de maintenance pour l'instant."
  +"Tu te tais, mais de toi à moi, il n'est pas très grâcieux et accompagnable, mais il est futé et renifle bien les pistes",
  fils : [],
};

var Maintenance = {
  père : "Quel renseignement te faut-il pour éviter d'y passer ?",
  réponse : "Maintenance",
  description : "Tu parles de quel automate là ?",
  fils : [QrX16,CH2019],
};

var Batterie = {
  père : "Quel renseignement te faut-il pour éviter d'y passer ?",
  réponse : "Batterie",
  description : "Il reste 4 piles LR6 MX1500 Ultra Power avec contrôle de puissance...."+
  "Bon, en vrai ça correspond à 4 batteries. Je suis vraiment trop sympa.",
  fils : [],
};

var Nourriture = {
  père : "Quel renseignement te faut-il pour éviter d'y passer ?",
  réponse : "Nourriture",
  description: "En vrai ça dépend, tu as un estomac de quelle taille sur l'échelle de Pierre Menez? Allez fais pas la tête, tu l'auras ton Big Mac Billy.. Il reste 4 portions de nourritures",
  fils : [],
};

var Eau = {
  père : "Quel renseignement te faut-il pour éviter d'y passer ?",
  réponse : "Eau",
  description: "Alors il va falloir se calmer sur la boisson garçon, la sueur ou l'urine est à envisager..... Il reste 4 portions d'eau",
  fils : [],
};

var LancementSurvie = {
  père : null,
  réponse : null,
  description : "Quel renseignement te faut-il pour éviter d'y passer ?",
  fils : [Eau,Nourriture,Batterie,Maintenance],
};









//                    DECLARATION DES OBJETS INTENTIONS                   //


var meteo = {
  name : "meteo",
  keyWords: ["meteo", "temps", "temperature", "chaud", "froid", "prevision", "previsions",  "canicule", "degres", "intemperie"],
  values: [10, 5, 5, 3, 3, 3, 3, 3, 5, 8],
  tree: LancementMeteo,
  matchWords:0,
};

var agenda = {
  name : "agenda",
  keyWords: ["agenda", "planning", "prevision","previsions", "maintenance", ],
  values: [10, 10, 3, 3, 3],
  tree: LancementAgenda,
  matchWords:0,
};

var survie = {
  name : "survie",
  keyWords: ["autonomie", "batterie", "niveau", "maintenance", "robot", "provisions", "eau", "nourriture", "QrX16", "CH2019"],
  values: [10, 10, 1, 3, 5, 6, 7, 7, 7, 7],
  tree: LancementSurvie,
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

var intentions = [meteo, agenda, survie, ennui];

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
