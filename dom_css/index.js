/* En JavaScript, il est possible de modifier dynamiquement la liste de classes associées à un élément 
(et donc son affichage, en fonction des règles CSS qui sont associées à ces classes), 
grâce à la propriété classList, et à ses fonctions add() et remove(). */

document.getElementById('displayOrHide').classList.remove('hidden');
document.getElementById('displayOrHide').classList.add('hidden');


/* L'API du DOM donne également accès à une fonction qui permet d'accéder à l'ensemble des éléments 
qui portent une même classe class : getElementsByClassName().
Contrairement à getElementById(), cette fonction ne retourne pas un seul élément, mais un tableau de
plusieurs éléments. */

var tab = document.getElementsByClassName('spoiler');

document.getElementById('spoilerButton').onclick = function() {
 for (var i=0; i<tab.length; i++) {
 tab[i].classList.add('hidden');
 }
};

/* Pour modifier la couleur de fond du titre de la leçon, il faut exécuter le code JavaScript suivant : */

var element = document.getElementById('lessonTitle');
element.style.backgroundColor = 'lightcoral';



/* Code JavaScript nécessaire pour que la couleur de fond du titre "Welcome" devienne cyan quand l'utilisateur clique dessus */

var element = document.getElementById('welcome');
element.onclick = function() {
 element.style.backgroundColor = 'cyan';
};

/* Liste de choses permettant aux stagiaires de réussir leur année avec possibilité de filtrer l'affichage
de ces choses en activant les catégories "toutes catégories", "indispensables" et "optionnelles".
*/

function changerDisplay(classe, valeur) {
    var articles = document.getElementsByClassName(classe);
    for (var i=0; i<articles.length; ++i) {
      articles[i].style.display = valeur;
    }  
  }
  
  document.getElementById('allCat').onclick = function() {
    changerDisplay('article', 'block'); // afficher tous les articles (choses essentilles et optionnelles)
  };
  
  document.getElementById('essentialCat').onclick = function() {
    changerDisplay('article', 'none'); // cacher tous les articles (choses essentilles et optionnelles)
    changerDisplay('essentialCat', 'block'); // afficher articles (choses) essentilles
  };
  
  
  document.getElementById('optionalCat').onclick = function() {
    changerDisplay('article', 'none'); // cacher tous les articles (choses essentilles et optionnelles)
    changerDisplay('optionalCat', 'block'); // afficher articles (choses) optionnelles
  };
  
  const showImage = () => {
    document.getElementById("image").style.display ='block';
}
