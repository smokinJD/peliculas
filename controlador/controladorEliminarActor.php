<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actores_model.php");
$idActor = $_POST['data'];
$listado = new actores_model();
$listado->eliminar_actor($idActor);

print($idActor)
?>
