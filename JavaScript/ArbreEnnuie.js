var Snake = {
  père: "Jeu",
  réponse : "Snake",
  description : "Lancer le snake",
  fils : null};

var Jeu = {
  père: "Tu veux que je te fasse passer le temps ?",
  réponse : "Jeu",
  description : "Je peux te proposer de jouer au snake ?",
  fils : [Snake]};

var Croissant = {
  père: "FunFacts",
  réponse : "Croissant",
  description : "Les origines du croissant ne se trouvent pas en France. En réalité, cette viennoiserie est originaire d'Autriche.",
  fils : null};

var Libye = {
  père: "FunFacts",
  réponse : "Libye",
  description : "Le territoire de la Libye est constitué à 99 % de désert. Après ton voyage tu serras en capacité de pouvoir déménager là-bas.",
  fils : null};

var Lac = {
  père: "FunFacts",
  réponse : "Lac",
  description : "Il y a plus de lacs au Canada que dans tous les autres pays du monde combinés. Je te l’accorde étant donné l’environnement qui t’entoure l’eau c’est pas ce qui manque. Comment ça j’ai un problème dans mes capteurs ? Je vois pas de quoi tu parles.",
  fils : null};

var Marcher = {
  père: "FunFacts",
  réponse : "Marcher",
  description : "En moyenne, un humain marche environ 185 000 km au cours de sa vie, soit plus que 4 fois la circonférence de la planète. Je peux te dire que vu les données que j’ai sur toi, tu n’est pas loin du double, continue comme ça!",
  fils : null};

var Israel = {
  père: "FunFacts",
  réponse : "Israel",
  description : "Des graines datant de 2000 ans ont été découvertes à Israël vers 1965 et gardées en stock ls 40 années qui ont suivies. Elles ont été plantées en 2005 et un arbre disparu depuis 1800 ans à poussé.",
  fils : null};

var Everest = {
  père: "FunFacts",
  réponse : "Everest",
  description : "Le Mont Everest n’est pas la plus haute montagne au monde. Même s’il fait 8847 mètres à la base lorsque mesuré au niveau de la mer, le Mauna Kea d’Hawaï mesure 10 200 mètres.",
  fils : null};

var Loutre = {
  père: "FunFacts",
  réponse : "Loutre",
  description : "Les loutres ont une petite poche dans leur peau pour y mettre leurs cailloux préférés.",
  fils : null};

var Mouse = {
  père: "FunFacts",
  réponse : "Mouse",
  description : "Wayne Allwine (la voix de Mickey Mouse) et Russi Taylor (la voix de Minnie Mouse) étaient mariés dans la vraie vie.",
  fils : null};

var Porte = {
  père: "FunFacts",
  réponse : "Porte",
  description : "Quelque part dans le monde en ce moment, quelqu'un est en train de pousser une porte sur laquelle il y a écrit 'tirer'. Toi t’es dans le désert et c’est pas ton cas.",
  fils : null};

var Pinguouin = {
  père: "FunFacts",
  réponse : "Pinguouin",
  description : "Les pingouins n'ont qu'un partenaire dans leur vie et font leur 'demande en mariage' en offrant un caillou. J’espère que c’est ton cas humain.",
  fils : null};

var FunFacts = {
  père: "Tu veux que je te fasse passer le temps ?",
  réponse : "FunFacts",
  description : "Combien de kilometre je dois parcourir aujourd'hui?",
  fils : [Pinguouin,Porte,Mouse,Loutre,Everest,Israel,Marcher,Lac,Libye,Croissant]};


var LancementM = {
  père : null ,
  réponse : null ,
  description : "Tu veux que je te fasse passer le temps ?",
  fils : [Jeu,FunFacts],
};

console.console.log(LancementM);
