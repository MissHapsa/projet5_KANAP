//------------------------------------------------------------------------
// Récupération des produits via l'api //
fetch("http://localhost:3000/api/products")
  // réponse => résultat en json.
  .then((res) => res.json())
  //  resulat json = objectProducts
  .then((objectProducts) => {
    //console => les donnees récupérées dans un tableau.
    console.table(objectProducts);
    // appel de la fonction d'affichage des produits
    lesKanaps(objectProducts);
  })
  // si erreur => h1 "erreur 404" et l'affiche dans la console.
  .catch((err) => {
    document.querySelector(".titles").innerHTML = "<h1>erreur 404</h1>";
    console.log("erreur 404, sur ressource api:" + err);
  });
//----------------------------------------------------------------------

// fonction d'affichage des produits de l'api dans l index.html
//----------------------------------------------------------------------
function lesKanaps(index) {
    // variable de la zone d'article
    let zoneArticle = document.querySelector("#items");
    // boucle pour chaque indice('article') dans index.html
    for (let article of index) {
      /* création et ajout des zones d'articles, insertion de l'adresse produit via chemin produit + paramètres(son id);
      la page index est http://127.0.0.1:5500/front/html/index.html donc la page du produit sera http://127.0.0.1:5500/front/html/product.html 
      (d'ou le ./product.html) pour rajouter son paramètre on met ? puis la clé (ici _id) associé (=) à sa valeur dynamique ${article._id} */
      zoneArticle.innerHTML += `<a href="./product.html?_id=${article._id}">
      <article>
        <img src="${article.imageUrl}" alt="${article.altTxt}">
        <h3 class="productName">${article.name}</h3>
        <p class="productDescription">${article.description}</p>
      </article>
    </a>`;
    }
  }