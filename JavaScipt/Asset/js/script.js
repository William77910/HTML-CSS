// Ceci est commentaire

/* Les variables sont des conteneurs pour stocker des données. 
    En Javascript, il existe trois façons de déclarer des variables, chacune ayant sont utilité spécifique.*/

let age = 26;                              // une variable "Let" peut-être mobifiable

const PI = 3.14;                           // "const" est une constante qui ne changera jamais et est toujours en majuscule

var nom = "Jean";                          // ne plus utiliser "var" car déprécié

// Type de données principaux

// String(chaine de carractères)
let texte = "Bonjour";
let texte2 = 'Monde';                     // il vaut mieux utiliser les "" pour les chaine de caractères
let phrase = `vous avez ${age} ans`;
let template = `${texte} ${texte2}`;      // template litteral
let template2 = texte +" "+ texte2;
console.log(template);
console.log(template2);
console.log(phrase);