<?php
class actores_model{
    private $db;
    private $actores;
 
    public function __construct(){
        $this->actores = array();
        $this->db = conectar::conexion();
    }
    
    public function get_actores($orden){
    	$sql="SELECT * FROM `vactores` $orden";
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
    
    public function modificar_actor($nombre, $id){
        $sql="CALL modificarActor('$nombre', $id);";
        $this->db->query($sql);
    }
    
    public function eliminar_actor($id){
        $sql="DELETE FROM `actores` WHERE idPelicula='$id'";
        $this->db->query($sql);
    }
}

