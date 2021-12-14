<?PHP 
    include 'con_db.php';

    function aut_rgs($sql){
        $con = new conector();
        $conexion = $con->conectar();
        $resp = $con->logging($conexion, $sql);
        $con->desconectar($conexion);
        return $resp;
    }

    function add_rgs($sql){
        $con = new conector();
        $conexion = $con->conectar();
        $con->insercion($conexion, $sql);
        $con->desconectar($conexion);  
    }

    function get_ary($sql, $clm){
        $con = new conector();
        $conexion = $con->conectar();
        $resp = $con->consulta($conexion, $sql, $clm);
        $con->desconectar($conexion);
        return $resp;
    }

    function shw_dta($sql, $col){
        $json = array();
        $con = new conector();
        $conexion = $con->conectar();
        $registro = $con->consulta($conexion, $sql, $col);

        for($x = 0; $x<count($registro);$x++){
            echo "<tr>";
            for($y = 0; $y<$col;$y++){
                echo "<td>".$registro[$x][$y]." </td>";
            }
            echo "</tr>";
            $json['Clasificador'][]=$registro[$x];
        }
                                    
        echo "</table>";
                            
        $json = json_encode($registro);
        $con->desconectar($conexion);
    }
?>