<?php
require_once("../modelo/conectar.php");
require_once("../modelo/actuaciones_model.php");
$json = $_POST['data'];

$datos = json_decode($json);

$pelicula =$datos->Pelicula;
$actores = $datos->arrayActores;
$protagonista = $datos->arrayProtagonista;



for ($i=0; $i<count($actores); $i++){
    $listado = new actuaciones_model();
    print "actor " . ($actores[$i]->Actor);
    print "prota " .($protagonista[$i]->Protagonista);
    $listado->insertar_actuacion($pelicula, $actores[$i]->Actor, $protagonista[$i]->Protagonista);
}
print($pelicula)
?>