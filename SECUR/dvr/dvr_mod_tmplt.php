<?php 
    if(isset($_POST['array'])) {
        $arr = $_POST['array'];
        $dta = json_decode($arr);

        for($i = 0; $i < 4; $i++) {
            echo "<div class='act__grp'>";
            echo "<button class='unt__btn' value='".$dta[$i][0]."'>";
            echo "<h4>Unidad ".$dta[$i][0]."</h4>";
            echo "<h5>".$dta[$i][1]."</h5>";
            echo "<h6>".$dta[$i][2]."</h6>";
            echo "</button></div>";
        }
    }
?>