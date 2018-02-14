<?php
class login_model{
	private $link;
	private $usuario;
	
	public function __construct(){
		$this->link=Conectar::conexion();
		$this->usuario=array();
	}
	
	public function get_login($usuario){
		$sql=$this->link->query("SELECT * FROM usuarios WHERE email='$usuario'");
		
		$usuario = mysqli_fetch_array($sql);
		return $usuario;
		$this->link=null;
	}
	
	public function insertarUsuario($usuario, $contrasena, $nombre, $apellido, $fechaNac){
		$sql="INSERT INTO `usuarios`(`email`, `Password`, `nombre`, `apellido`, `fechaNac`) VALUES ('$usuario','$contrasena','$nombre','$apellido','$fechaNac')";
		$this->link->query($sql);
	}
}

?>
