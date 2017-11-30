<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actuaciones_model.php");
$pelicula = htmlspecialchars(trim($_POST['Pelicula']));
$actor = htmlspecialchars(trim($_POST['Actor']));
$protagonista = htmlspecialchars(trim($_POST['protagonista']));
$listado = new actuaciones_model();
$listado->insertar_actuacion($pelicula, $actor, $protagonista);

print($protagonista)
?>