<?php

require_once("../modelo/conectar.php");
require_once("../modelo/peliculas_model.php");
$listado = new peliculas_model();
$datos = $listado->get_peliculas();

$peliculas= json_encode($datos); 
print $peliculas;


//require_once("../vista/listadoPeliculas.php");

