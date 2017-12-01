<?php
class actuaciones_model{
    
    private $db;
    private $peliculas;
 
    public function __construct(){
        $this->peliculas = array();
        $this->db = conectar::conexion();
    }
    
    public function get_ActuacionActor($idActor){
        $sql="CALL `mostrarPeliculaActor`($idActor);";
        foreach ($this->db->query($sql) as $res)
        {
            $this->peliculas[]=$res;
        }
        return $this->peliculas;
        $this->db=null;
    }
    
    public function insertar_actuacion($pelicula, $actor, $protagonista){
        $sql="CALL insertarActuaciones('$pelicula', $actor, $protagonista);";
        $this->db->query($sql);
    }
    
    public function modificar_actuacion($pelicula, $actor, $protagonista){
        $sql="CALL modificarActuacion('$pelicula', $actor, $protagonista);";
        $this->db->query($sql);
    }
    
    public function eliminar_actuacion($pelicula, $actor){
        $sql="CALL eliminarActuacion('$pelicula', $actor);";
        $this->db->query($sql);
    }
}
?>

