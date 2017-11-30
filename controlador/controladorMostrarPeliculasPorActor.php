<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actuaciones_model.php");
$actor = htmlspecialchars(trim($_POST['data']));
$listado = new actuaciones_model();
$datos = $listado->get_ActuacionActor($actor);

$peliculaActor= json_encode($datos); 
print $peliculaActor;

