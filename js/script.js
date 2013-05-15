//alert('coucou');
//var truc = "machin";
//alert(truc);

//function affiche(str){
//    for(var i = 0 ; i < str.length ; i++){
//    // on utilise 1 objet console. On log le résultat (visible ds console JS)
//    console.log(str.charAt(i)); // charAt(i) caractère à l'indice i
//    }
//}
//affiche(truc);
function checkForm(){
    var messages = []; // Ou var messages = new Array(); 
    var valid = true;
    var nb1Element = document.myform.nb1; // l'élément en lui-même
    var nb1 = nb1Element.value; // sa valeur
    // 2 options pour récupérer sa valeur en une ligne :
    // var nb1 = document.getElementById("nb1").value;
    // var nb1 = document.myform.nb1.value;
    nb1Element.classList.remove("badInput");
    // Appliquer un contour rouge :
    // nb1Element.style.bordercolor = "red";

    if(! /^\d+$/.test(nb1)){ // \d revient à [0-9]
        // push pour ajouter à la fin du tableau :
        messages.push("Le premier nombre est incorrect");
        valid = false;
        nb1Element.classList.add("badInput");
    }
    
    var nb2Element = document.myform.nb2; // l'élément en lui-même
    var nb2 = nb2Element.value; // sa valeur
    nb2Element.classList.remove("badInput");

    if(! /^\d+$/.test(nb2)){ // \d revient à [0-9]
        messages.push("Le deuxième nombre est incorrect");
        valid = false;
        nb2Element.classList.add("badInput");
    }
    var resultElement = document.getElementById("result");
    
    if(document.getElementById("messages")){
        resultElement.removeChild(document.getElementById("messages"));
    }
    
    // resultElement.innerHTML = ""; // pour vider les messages présents
    // Remarque : nb1 + nb2 CONCATÈNE les chiffres
    // var somme = parseInt(nb1) + parseInt(nb2); // pour pouvoir additionner
    // var somme = Number(nb1) + Number(nb2); // fonctionnerait aussi
    // var somme = parseInt(nb1) + parseInt('azerty'); // renvoie NaN
    // resultElement.innerHTML = nb1 +" + "+nb2+" = "+somme;
    // document.getElementById("result").innerHTML = nb1 +" + "+nb2+" = "+somme;
    
    if (!valid){
        //resultElement.innerHTML = "<ul>";
        var liste = document.createElement("ul");
        liste.setAttribute("id","messages");
        for (var i = 0 ; i < messages.length ; i++){
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