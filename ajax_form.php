<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <form action="#" name="formAjax" id="formAjax">
            Choix 1 : <input type="radio" name="choix" value="1" checked><br>
            Choix 2 : <input type="radio" name="choix" value="2"><br>
            Choix 3 : <input type="radio" name="choix" value="3"><br>
            <input type="button" value="valider" onclick="getFlavor();">
            <input type="button" value="coucou" onclick="alert('coucou');"
        </form>
        <h4 id="flavor"></h4>
        <script type="text/javascript" src="js/scriptAjax.js"></script>
    </body>
</html>
