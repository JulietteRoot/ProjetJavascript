var xhr = null;

function getFlavor(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
        // code lié au protocole HTTP. 200 = tout ok. Erreur 404, etc.
            document.getElementById("flavor").innerHTML = xhr.responseText;
        }else {
            document.getElementById("flavor").innerHTML = "En cours...";
        }
    }; // attention au point-virgule
    var allChoices = document.formAjax.choix;
    var choix;
    for(var i = 0 ; i < allChoices.length ; i++){
        if(allChoices[i].checked){
            choix = allChoices[i].value;
            break;
        }
    }
    xhr.open("GET", "ice_creamer.php?choix="+choix, true);
    // false = synchrone, true = asynchrone
    xhr.send(null); // on lui passe null puisque c'est une requête en GET
}


