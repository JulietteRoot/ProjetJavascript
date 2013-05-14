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
    var messages = new Array();
    var valid = true;
    // on récupère directement sa valeur :
    // var nb1 = document.getElementById("nb1").value;
    // var nb2 = document.getElementById("nb2").value;
    // Ou :
    var nb1 = document.myform.nb1.value;
    if(! /^\d+$/.test(nb1)){ // \d revient à [0-9]
        messages.push("Le premier nombre est incorrect");
        // push pour ajouter à la fin du tableau
        valid = false;
    }
    // \d revient à [0-9]
    var nb2 = document.myform.nb2.value;
    if(! /^\d+$/.test(nb2)){ // \d revient à [0-9]
        messages.push("Le deuxième nombre est incorrect");
        valid = false;
    }
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    // nettoie la place avant d'écrire autre chose, on vide ce qui était présent.
    // sans cela, les précédents messages restent inscrits.
    if(valid){
        //var somme = nb1 + nb2;
        // comme cela, ça concatène les chiffres, ne les additionne pas.
        var somme = parseInt(nb1) + parseInt(nb2);
        // fonctionne, les nbs sont considérés maintenant comme des nombres
        // et non des chaînes de caractères.
        resultElement.innerHTML =
                nb1 +" + "+nb2+" = "+somme;
        //var somme = Number(nb1) + Number(nb2); // fonctionnerait aussi
        //var somme = parseInt(nb1) + parseInt('azerty'); // renvoie NaN
        //console.log(somme);
        //document.getElementById("result").innerHTML = nb1 +" + "+nb2+" = "+somme;
        
    }else {
        for (var i = 0 ; i < messages.length ; i++){
            resultElement.innerHTML=
            resultElement.innerHTML+
            messages[i];
        }
    }
}