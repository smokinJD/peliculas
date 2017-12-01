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
        $sql="SELECT vista1.*, vista2.actores FROM `vpeliculasdirector` vista1 LEFT JOIN `vpeliculasactores` vista2 ON vista1.Titulo=vista2.Titulo";
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
    
    public function modificar_pelicula($titulo, $anio, $director, $idPelicula){
        $sql="CALL `modificarPelicula`('$titulo', $anio, $director, $idPelicula);";
        $this->db->query($sql);
    }
    
    public function eliminar_pelicula($idPelicula){
        $sql="DELETE FROM `pelicula` WHERE idPelicula='$idPelicula'";
        $this->db->query($sql);
    }
}
