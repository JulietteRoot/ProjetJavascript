<?php
sleep(5);
$choix = $_GET['choix']; // c'est la requête Ajax qui détermine la méthode utilisée
switch ($choix) {
    case 1:echo "chocolat";
        break;
    case 2:echo "vanille";
        break;
    case 3:echo "pistache";
        break;
}
?>
