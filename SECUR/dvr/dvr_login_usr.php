<?php 
    $ide_usr = $_POST['ide_usr'];
    $nom_usr = $_POST['nom_usr'];
    $pro_usr = $_POST['pnt_usr'];

    SESSION_START();
    $_SESSION['ide_usr'] = $ide_usr;
    $_SESSION['nom_usr'] = $nom_usr;
    $_SESSION['pro_usr'] = $pro_usr;
?>