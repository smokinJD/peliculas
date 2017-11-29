<?php
require_once("../modelo/conectar.php");
require_once("../modelo/peliculas_model.php");
$titulo = htmlspecialchars(trim($_POST['Titulo']));
$anio = htmlspecialchars(trim($_POST['Anyo']));
$director = htmlspecialchars(trim($_POST['Director']));
$listado = new peliculas_model();
$listado->insertar_pelicula($titulo, $anio, $director);

print($titulo)
?>