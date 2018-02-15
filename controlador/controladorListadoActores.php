<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actores_model.php");

//$ordenar = htmlspecialchars(trim($_POST['orden']));
//$borrarOrden = htmlspecialchars(trim($_POST['borrarOrden']));
//if ((!empty($ordenar)) && (empty($borrarOrden))) {
//	$ordenRecogido = ($ordenar);
//	Setcookie("orden", $ordenRecogido);
//	echo "<meta http-equiv='refresh' content='0'>";
//}
//if (isset($borrarOrden)) {
//	setcookie('orden');
//	echo "<meta http-equiv='refresh' content='0'>";
//}
//
//
//if (isset ($_COOKIE["orden"]) ) {
//	$orden = "order by " .$_COOKIE["orden"];
//        $listado = new actores_model();
//	$datos = $listado->get_actores($orden);
//} else {
        $orden = "";
        $listado = new actores_model();
	$datos = $listado->get_actores($orden);
//}

$actores= json_encode($datos);
print $actores;
