<?php
session_start();
if ((isset($_POST['email'])) && (isset($_POST['password']))){
	require_once("../modelo/conectar.php");
	$usuario = $_POST['email'];
	$contrasena = $_POST['password'];
	
	
	require_once '../modelo/login_model.php';
	
	$cont=new login_model();
	$datos=$cont->get_login($usuario, $contrasena);
	$id= $datos['idUsuario'];
	if ($datos != null){
		if (password_verify($contrasena, $datos["Password"])) {
			$_SESSION['loggedin'] = true;
			$_SESSION['id'] = $id;
			$_SESSION['username'] = $usuario;
			$_SESSION['start'] = time();
			$_SESSION['expire'] = $_SESSION['start'] + (30 * 60);
			
			header('location: ../vista/menu.php');
			return true;
		} else{
			echo '<script>alert ("contrase�a incorrecta");</script><meta http-equiv="refresh" content="0; url=../index.php">';
			return false;
		}
	}else {
		echo '<script>alert ("Usuario incorrecto");</script><meta http-equiv="refresh" content="0; url=../index.php">';
	}
}
?>

