<?php
class actores_model{
    private $db;
    private $actores;
 
    public function __construct(){
        $this->actores = array();
        $this->db = conectar::conexion();
    }
    
   public function get_actores(){
        $sql="SELECT * FROM `vpeliculasdirector`";
        foreach ($this->db->query($sql) as $res)
        {
            $this->actores[]=$res;
        }
        return $this->actores;
        $this->db=null;
    } 
}

