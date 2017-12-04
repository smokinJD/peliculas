<?php
class directores_model{
    private $db;
    private $director;
 
    public function __construct(){
        $this->director = array();
        $this->db = conectar::conexion();
    }
    
   public function get_director(){
        $sql="SELECT * FROM `directores`";
        foreach ($this->db->query($sql) as $res)
        {
            $this->director[]=$res;
        }
        return $this->director;
        $this->db=null;
    } 
    
    public function insertar_director($nombre){
        $sql="CALL insertarDirector('$nombre');";
        $this->db->query($sql);
    }
    
    public function modificar_director($nombre, $id){
        $sql="CALL modificarActor('$nombre', $id);";
        $this->db->query($sql);
    }
    
    public function eliminar_director($id){
        $sql="DELETE FROM `directores` WHERE idPelicula='$id'";
        $this->db->query($sql);
    }
}

