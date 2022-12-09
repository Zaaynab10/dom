//Declaration des variables
var btnAdd=document.body.getElementsByClassName("add");
var sumItem=document.body.getElementsByClassName("sum");
var btnReduce=document.body.getElementsByClassName("reduce");
var btnPanierFinal=document.getElementsByClassName("panierFinal");
var monPanier=document.body.getElementsByClassName("panier");
var btnRemove=document.body.getElementsByClassName("remove");
var tArticle=document.body.getElementsByClassName("prixTotalArticle");
var tPanier=document.body.getElementsByClassName("totalPanier");
var montantTotal=document.body.querySelector("section");
var validation=document.body.querySelector("#val");
var heartBtn=document.body.getElementsByClassName("heart");
//Declaration des constantes
const prixArticle=400000; 
const l="Modal Lace Back Cami Set";
const d="Sheer Lace Robe";
const i="Wicked Ruched Slip";
const p="Sheer Lace Slip";
var constante=[l,d,i,p];
//Boucle pour parcourir tous les articles et leur attribuer les memes fonctionnalites 
for (let i=0;i<btnAdd.length;i++){
  //Fonction pour ajouter 
function addMyItem(){
   sumItem[i].value=parseInt(sumItem[i].value)+1; 
}
   btnAdd[i].addEventListener("click",addMyItem);
  //fonction pour reduire 
function reduceMyItem(){
   if(sumItem[i].value==0){
       return;
   }else{sumItem[i].value=parseInt(sumItem[i].value) -1;
  }
}
   btnReduce[i].addEventListener("click",reduceMyItem);
 
//Fonction pour ajouter au panier 
function notrePanier (){
  monPanier[i].innerHTML=  sumItem[i].value +"*"+"   " +constante[i];
}
btnPanierFinal[i].addEventListener("click",notrePanier);
//Fonction pour retirer au niveau du panier
function removeElement(){
  monPanier[i].innerHTML=" ";
  tArticle[i].innerHTML=" ";
  sumItem[i].value="0";
}
btnRemove[i].addEventListener("click",removeElement);
//Fonction pour calculer le prix total des articles
function prixTotalArticle(){ 
tArticle[i].innerHTML=sumItem[i].value*parseInt(prixArticle);
}
btnPanierFinal[i].addEventListener("click",prixTotalArticle);
//Fonction pour calculer le montant total de notre commande
var total=0;
function getMonTotal(){
total=parseInt(total)+parseInt(tArticle[i].innerHTML);
montantTotal.innerHTML= "le montant total de votre commande est de :  " +total;
}
validation.addEventListener("click",getMonTotal);
//Fonction pour pouvoir mettre un j'aime et le retirer 
function clickMyHeart(){
   if(this.style.backgroundColor!="red"){
     this.style.backgroundColor="red";
   }else{
     this.style.backgroundColor="rgba(254, 250, 250, 0)";
   }
}
heartBtn[i].addEventListener("click",clickMyHeart);
} 