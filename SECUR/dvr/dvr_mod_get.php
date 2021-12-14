<?php 
    require '../db/con_metodos.php';

    $pag_num = $_POST['pag_num'];
    $lim_sup = $pag_num * 4;
    $lim_inf = $lim_sup - 3;

    $sql = "CALL shwMod('$lim_inf', '$lim_sup')";

    $shw = get_ary($sql, 3);
    $dta = json_encode($shw);

    if(isset($dta)){
        echo $dta;
    } else {
        echo 'Ha ocurrido un error';
    }
?>