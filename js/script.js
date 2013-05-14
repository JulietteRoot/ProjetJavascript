//alert('coucou');
//var truc = "machin";
//alert(truc);

//function affiche(str){
//    for(var i = 0 ; i < str.length ; i++){
//    // on utilise un objet console, et on log le résultat de i
//    //console.log(i);
//    // c'est dans la console JS qu'on la verra
//    //console.log(truc.charAt(i)); // charAt caractère à l'indice i
//    console.log(str.charAt(i));
//    }
//}
//
//affiche(truc);
//var nb1Element = document.getElementById("nb1");
function additionner(){
    var nb1 = document.getElementById("nb1").value; // on récupère directement sa valeur
    var nb2 = document.getElementById("nb2").value;
    var somme = nb1 + nb2; // comme cela, ça concatène les chiffres, ne les additionne pas.
    console.log(somme);
}