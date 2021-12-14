<?PHP
    class conector {
        function conectar(){
            $host ="127.0.0.1";
            $db ="cur_seg";
            $user ="root";
            $password ="";
            //realiza conexion
            $con = mysqli_connect($host, $user, $password, $db) or die ("Error al conectar a la base de datos: ".mysql_error());
            return $con;
        }

        function logging($con, $sql) {
            $data = array();
            $search = mysqli_query($con, $sql);
            while ($array = mysqli_fetch_array($search)) {
                $data[] = $array;
            }
            return $data;
        }

        function insercion($con, $sql) {
            $ins = mysqli_query($con, $sql);

            if ($ins) {
                echo "Registro almacenado.";
            } else {
                echo "Error en la ejecución del registro.";
            }
        }

        function bringMe($con, $sql) {
            $search = mysqli_query($con, $sql);

            while ($data[] = mysqli_fetch_array($search));
            echo json_encode($data);
        }

        function consulta($con, $sql, $cls){
            $result = mysqli_query($con, $sql);
            $arreglo = array();
            
            if ($con){
                
                $y = 0;
                while($registro = mysqli_fetch_array($result)){
                    for ($x = 0; $x < $cls; $x++){
                        $arreglo[$y][$x] = $registro[$x];
                    }
                    $y++;
                }
            } else {
                echo "error";
            }
            return $arreglo;
        }

        function desconectar($con){
            mysqli_close($con);
        }
    }
?>