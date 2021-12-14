<?php 
    require '../db/con_metodos.php';

    SESSION_START();

    $usuario = $_POST['user'];
    $password = $_POST['pass'];

    $sql= "CALL logUsr('$usuario','$password')";

    $autent = aut_rgs($sql);
    $datos = json_encode($autent);

    if(count($autent>0)) {
        echo $datos;
    } else {
        echo '0';
    }
?>