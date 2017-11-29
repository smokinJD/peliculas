<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actores_model.php");
$nombre = htmlspecialchars(trim($_POST['Nombre']));
$listado = new actores_model();
$listado->insertar_actor($nombre);

print($nombre)
?>