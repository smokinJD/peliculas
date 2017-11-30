<?php
require_once("../modelo/conectar.php");
require_once("../modelo/peliculas_model.php");
$idPelicula = $_POST['data'];
$listado = new peliculas_model();
$listado->eliminar_pelicula($idPelicula);

print($idPelicula)
?>
