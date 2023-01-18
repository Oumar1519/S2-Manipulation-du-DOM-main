const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
};


// Pour afficher le nombre de pommes dans la facture détaillée
//document.querySelector("#qtePommes").textContent = panier.pommes;
/**
 * fonction pour afficher les pommes
 */
function achatPomme(){
    document.querySelector('#qtePommes').textContent=String(++panier.pommes);
    document.querySelector('#poidsPommes').textContent=String(panier.pommes*10);
    document.querySelector('#prixPommes').textContent=String(panier.pommes * 13.5);
    totauxFruits()

}


document.querySelector('#btn_prunes').onclick=afficherPrunes;
document.querySelector("#btn_pommes").onclick= achatPomme;

//afficher les poires
document.querySelector('#btn_poires').onclick=()=>{
    document.querySelector('#qtePoires').textContent=String(++panier.poires);
    document.querySelector('#poidsPoires').textContent=String(panier.poires*12);
    document.querySelector('#prixPoires').textContent=String(panier.poires*20.00);
    totauxFruits()



}

/**
 * fonction pour afficher les prunes
 */
function afficherPrunes(){
    document.querySelector('#qtePrunes').textContent=String(++panier.prunes);
    document.querySelector('#poidsPrunes').textContent=String(panier.prunes*15);
    document.querySelector('#prixPrunes').textContent=String(panier.prunes*22);
    totauxFruits();

}

/**
 * fonction pour afficher les totaux
 */
function totauxFruits(){
    document.querySelector('#qteTotal').textContent=String(panier.pommes+panier.poires+panier.prunes);
    document.querySelector('#poidsTotal').textContent=String(panier.pommes*10+panier.prunes*12+panier.poires*15)
    document.querySelector('#prixTotal').textContent=String(panier.pommes*13.5+panier.prunes*20+panier.poires*22)

}



