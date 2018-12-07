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

var LancementS = {
  père : null,
  réponse : null,
  description : "Quel renseignement te faut-il pour éviter d'y passer ?",
  fils : [Eau,Nourriture,Batterie,Maintenance],
};

console.log(LancementS);
