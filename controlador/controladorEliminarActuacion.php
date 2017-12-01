<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actuaciones_model.php");
$pelicula = htmlspecialchars(trim($_POST['Pelicula']));
$actor = htmlspecialchars(trim($_POST['Actor']));
$listado = new actuaciones_model();
$listado->eliminar_actuacion($pelicula, $actor);

print($actor)
?>