<?php
    require '../db/con_metodos.php';

    $nom = $_POST['nom'];
    $app = $_POST['app'];
    $apm = $_POST['apm'];
    $hbd = $_POST['hbd'];
    $eml = $_POST['eml'];
    $pwd = $_POST['pwd'];

    $id_calc = array(substr($nom, 0, 2), substr($app, strlen($app) - 2), substr($apm, 0, 2), substr($hbd, 2, 4), substr($hbd, strlen($hbd) - 2));
    $id1 = $id_calc[4].$id_calc[2].$id_calc[1].$id_calc[3];
    $id2 = $id_calc[0];

    $sql= "CALL addUsr('$nom', '$app', '$apm', '$eml', '$id1', '$id2', '$pwd')";

    $autent = add_rgs($sql);
?>