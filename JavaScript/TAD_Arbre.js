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

var LancementM = {
  père : null ,
  réponse : null ,
  description : "Que veux-tu savoir ?",
  fils : [Météo,Température,Tempête],
};

console.log(LancementM);

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
