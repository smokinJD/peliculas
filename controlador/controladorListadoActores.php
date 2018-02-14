<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actores_model.php");

$ordenar = htmlspecialchars(trim($_POST['orden']));
$borrarOrden = htmlspecialchars(trim($_POST['borrarOrden']));
if ((!empty($ordenar)) && (empty($borrarOrden))) {
	$ordenRecogido = ($ordenar);
	Setcookie("orden", $ordenRecogido);
	echo "<meta http-equiv='refresh' content='0'>";
}
if (isset($borrarOrden)) {
	setcookie('orden');
	echo "<meta http-equiv='refresh' content='0'>";
}

$listado = new actores_model();
if (isset ($ordenar) ) {
	$orden = "order by " .$ordenar;
	$datos = $listado->get_actores($orden);
} else {
	$datos = $listado->get_actores();
}
$actores= json_encode($datos);
print $actores;
