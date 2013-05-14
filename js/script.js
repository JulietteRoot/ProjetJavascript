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
//function additionner(){
function checkForm(){
    var messages = [];
    // Ou :
    //var messages = new Array(); 
    var valid = true;
    var nb1Element = document.myform.nb1; // l'élément en lui-même
    var nb1 = nb1Element.value; // sa valeur
    nb1Element.classList.remove("badInput");
    //nb1Element.style.bordercolor = "red";
    // on récupère directement sa valeur :
    // var nb1 = document.getElementById("nb1").value;
    // var nb2 = document.getElementById("nb2").value;
    // Ou :
    //var nb1 = document.myform.nb1.value;
    
    //var nb1 = document.myform.nb1.value;
    if(! /^\d+$/.test(nb1)){ // \d revient à [0-9]
        messages.push("Le premier nombre est incorrect");
        // push pour ajouter à la fin du tableau
        valid = false;
        //nb1Element.style.borderColor = "red"; // modifie le contour
        //nb1Element.style.backgroundColor = "red"; // modifie le fond
        nb1Element.classList.add("badInput");
    }
    //var valid = true;
    var nb2Element = document.myform.nb2; // l'élément en lui-même
    var nb2 = nb2Element.value; // sa valeur
    nb2Element.classList.remove("badInput");
    //nb2Element.style.bordercolor = "red";
    
    //var nb2 = document.myform.nb2.value;
    // \d revient à [0-9]
    //var nb2 = document.myform.nb2.value;
    if(! /^\d+$/.test(nb2)){ // \d revient à [0-9]
        messages.push("Le deuxième nombre est incorrect");
        valid = false;
        //nb2Element.style.borderColor = "red";
        nb2Element.classList.add("badInput");
    }
    var resultElement = document.getElementById("result");
    
    if(document.getElementById("messages")){
        resultElement.removeChild(document.getElementById("messages"));
    }
    
    //resultElement.innerHTML = "";
    // nettoie la place avant d'écrire autre chose, on vide ce qui était présent.
    // sans cela, les précédents messages restent inscrits.
//    if(valid){
        //var somme = nb1 + nb2;
        // comme cela, ça concatène les chiffres, ne les additionne pas.
//        var somme = parseInt(nb1) + parseInt(nb2);
        // fonctionne, les nbs sont considérés maintenant comme des nombres
        // et non des chaînes de caractères.
//        resultElement.innerHTML =
//                nb1 +" + "+nb2+" = "+somme;
        //var somme = Number(nb1) + Number(nb2); // fonctionnerait aussi
        //var somme = parseInt(nb1) + parseInt('azerty'); // renvoie NaN
        //console.log(somme);
        //document.getElementById("result").innerHTML = nb1 +" + "+nb2+" = "+somme;
    if (!valid){
        //resultElement.innerHTML = "<ul>";
        var liste = document.createElement("ul");
        liste.setAttribute("id","messages");
        for (var i = 0 ; i < messages.length ; i++){
//            resultElement.innerHTML=
//            resultElement.innerHTML+
//            messages[i];
              //resultElement.innerHTML += "<li>"+messages[i]+"</li>";
              var item = document.createElement("li");
              item.innerHTML = messages[i];
              liste.appendChild(item);
        }
        //resultElement.innerHTML += "</ul>";
        resultElement.appendChild(liste);
    }
    return valid;
}