<?php
require_once("../modelo/conectar.php");
require_once("../modelo/directores_model.php");
$nombre = htmlspecialchars(trim($_POST['Nombre']));
$idDirector = htmlspecialchars(trim($_POST['Id']));
$listado = new directores_model();
$listado->modificar_director($nombre, $idDirector);

print($nombre)
?>
