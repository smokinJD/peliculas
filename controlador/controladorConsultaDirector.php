<?php
require_once("../modelo/conectar.php");
require_once("../modelo/directores_model.php");
$listado = new directores_model();
$datos = $listado->get_director();

$directores= json_encode($datos); 
print $directores;