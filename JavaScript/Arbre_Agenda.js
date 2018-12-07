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
  description : "Comment ça non? Je fais ce que je veux en fait, c'est MOI le Boss. ... Enfin bref, il te reste (x) portions de nourriture, va falloir se calmer sur la bouffe sinon tu vas mal finir, il reste assez d'eau pour remplir une Bestway Piscine Hors-Sol Acier Hydrium 360 x 120 cm, je sais pas vraiment si ça t'aide à représenter la quantité qu'il te reste mais bon tu vas faire avec. Faut vraiment que j'arrête de tout commenter comme ça...",
  fils : null};

var OuiR = {
  père: "Rappels",
  réponse : "OuiR",
  description : "Alors, tu m'obliges à beaucoup trop parler là, t'abuses. ... Enfin bref, il te reste (x) portions de nourriture, va falloir se calmer sur la bouffe sinon tu vas mal finir, il reste assez d'eau pour remplir une Bestway Piscine Hors-Sol Acier Hydrium 360 x 120 cm, je sais pas vraiment si ça t'aide à représenter la quantité qu'il te reste mais bon tu vas faire avec. Faut vraiment que j'arrête de tout commenter comme ça...",
  fils : null};

var Rappels = {
  père: "Que veux-tu savoir ?",
  réponse : "Rappels",
  description : "Veux tu des rappels intéressants ?",
  fils : [OuiR,NonR]};

var Patience = {
  père: "Extraction",
  réponse : "Patience",
  description : "Tiens bon il te reste 3 jours, non je plaisante, prends ton mal en patience. ... (x) jours restants",
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

var LancementM = {
  père : null ,
  réponse : null ,
  description : "Que veux-tu savoir ?",
  fils : [Kilometre,Maintenance,Extraction,Rappels],
};

console.console.log(LancementM);
