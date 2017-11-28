<?php
class peliculas_model{
    
    private $db;
    private $peliculas;
 
    public function __construct()
    {
        $this->peliculas = array();
        $this->db = conectar::conexion();
    }
    
    public function get_peliculas(){
        $sql="SELECT * FROM `vpeliculasdirector`";
        foreach ($this->db->query($sql) as $res)
        {
            $this->peliculas[]=$res;
        }
        return $this->peliculas;
        $this->db=null;
    }
    
    public function insertar_pelicula($titulo, $anio, $director){
        $sql="CALL `insertarPelicula`('$titulo', $anio, $director);";
        $this->db->query($sql);
    }
}
