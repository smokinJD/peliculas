<?php
class login_model{
	private $link;
	private $usuario;
	
	public function __construct(){
		$this->link=Conectar::conexion();
		$this->usuario=array();
	}
	
	public function get_login($usuario, $contrasena){
		$sql=$this->link->query("SELECT * FROM usuarios WHERE Nombre='$usuario' AND Password='$contrasena'");
		
		$usuario = mysqli_fetch_array($sql);
		return $usuario;
		$this->link=null;
	}
}

?>
