<?php
session_start();
require_once("../modelo/conectar.php");
$usuario = $_POST['username'];
$contrasena = $_POST['password'];


require_once '../modelo/login_model.php';

$cont=new login_model();
$datos=$cont->get_login($usuario, $contrasena);
$id= $datos['idUsuario'];
if ($datos != null){
    $_SESSION['loggedin'] = true;
    $_SESSION['id'] = $id;
    $_SESSION['username'] = $usuario;
    $_SESSION['start'] = time();
    $_SESSION['expire'] = $_SESSION['start'] + (30 * 60);

    header('location: ../vista/menu.php');
}else{
    echo '<script>alert ("Usuario o contrase�a incorrectos");</script><meta http-equiv="refresh" content="0; url=../index.php">';
}
?>
