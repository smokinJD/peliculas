<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actores_model.php");
$nombre = htmlspecialchars(trim($_POST['Nombre']));
$idActor = htmlspecialchars(trim($_POST['Id']));
$listado = new actores_model();
$listado->modificar_actor($nombre, $idActor);

print($nombre)
?>
