<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actores_model.php");
$listado = new actores_model();
$datos = $listado->get_actores();

$actores= json_encode($datos); 
print $actores;

