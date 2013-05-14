<?php
if($_SERVER['REQUEST_METHOD'] == "POST"){ // POST en majuscules !!!
    // JS ne dispense pas de faire les vérifs en PHP !!
    // Il faudra faire les 2 !
    $nb1 = $_POST['nb1'];
    $nb2 = $_POST['nb2'];
    $somme = $nb1 + $nb2;
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <link rel="stylesheet" media="screen" type="test/css" href="css/main.css">
        <title></title>
    </head>
    <body>
        <div id="result"><?php if(isset($somme)){echo "$nb1 + $nb2 = $somme";} ?></div>
        <form action="#" id="myform" name="myform" method="POST" onsubmit="return checkForm();">
        <!-- onsubmit pour créer un évènement à la soumission du formulaire -->
        <!-- return false = empêche la soumission du formulaire -->
        <!-- la méthode est en GET par défaut -->
            Nombre 1 : <input type="text" name="nb1" id="nb1"><br>
            Nombre 2 : <input type="text" name="nb2" id="nb2"><br>
            <!-- <input type="button" value="push" onclick="alert('ici');"> -->
            <!-- <input type="button" value="push" onclick="additionner();"> -->
            <input type="submit" value="Valider">
        </form>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
