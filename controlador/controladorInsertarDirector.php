<?php
require_once("../modelo/conectar.php");
require_once("../modelo/directores_model.php");
$nombre = htmlspecialchars(trim($_POST['Nombre']));
$listado = new directores_model();
$listado->insertar_director($nombre);

print($nombre)
?>