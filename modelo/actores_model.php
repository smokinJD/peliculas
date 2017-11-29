<?php
class actores_model{
    private $db;
    private $actores;
 
    public function __construct(){
        $this->actores = array();
        $this->db = conectar::conexion();
    }
    
   public function get_actores(){
        $sql="SELECT * FROM `vactores`";
        foreach ($this->db->query($sql) as $res)
        {
            $this->actores[]=$res;
        }
        return $this->actores;
        $this->db=null;
    } 
    
    public function insertar_actor($nombre){
        $sql="CALL insrtarActor('$nombre');";
        $this->db->query($sql);
    }
}

