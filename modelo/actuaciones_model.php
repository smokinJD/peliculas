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
}
?>

