<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Login - Registro</title>
    <script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js/index.js" type="text/javascript"></script>
</head>
<body>
    <h1>Login Peliculas</h1>
    
    <button id="login">Ya tengo cuenta</button>
    <button id="registrarse">Registrate</button>
    
    <section id="loguearse" >
    <h3>Login</h3>
    <form action="controlador/controladorLogin.php" method="POST">
        <p>Email:</p>
        <input type="email" name="email"/>
        <p>Contraseña:</p>
        <input type="password" name="password"/>
        <br>
        <p><input type="submit" value="Iniciar Sesion" /></p> 
    </form>
    </section>
    
    <section id="registro">
    	<h3>Registro</h3>
	    <form action="controlador/controladorRegistro.php" method="POST">
	        <p>Email:</p>
	        <input type="email" name="email" required/>
	        <p>Contraseña:</p>
	        <input type="password" name="password" required/>
	        <p>Nombre:</p>
	        <input type="text" name="nombre" required/>
	        <p>Apellido:</p>
	        <input type="text" name="apellido" required/>
	        <p>Fecha De Nacimiento:</p>
	        <input type="date" name="fechaNac" required/>
	        <p><input type="submit" value="Registrar" /> <input type="reset" value="resetear" /></p>
	    </form>
    </section>
</body>
</html>
