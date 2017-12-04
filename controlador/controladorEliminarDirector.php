<?php
require_once("../modelo/conectar.php");
require_once("../modelo/directores_model.php");
$idDirector = $_POST['data'];
$listado = new directores_model();
$listado->eliminar_director($idDirector);

print($idDirector)
?>
