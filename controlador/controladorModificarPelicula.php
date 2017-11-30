<?php
require_once("../modelo/conectar.php");
require_once("../modelo/peliculas_model.php");
$titulo = htmlspecialchars(trim($_POST['Titulo']));
$anio = htmlspecialchars(trim($_POST['Anyo']));
$director = htmlspecialchars(trim($_POST['Director']));
$idPelicula = htmlspecialchars(trim($_POST['Id']));
$listado = new peliculas_model();
$listado->modificar_pelicula($titulo, $anio, $director, $idPelicula);

print($titulo)
?>
