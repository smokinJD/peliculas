<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Login</title>
</head>
<body>
    <h1>Login Peliculas</h1>
    <form action="controlador/controladorLogin.php" method="POST">
        <p>Nombre:</p>
        <input type="text" name="username" required/>
        <p>Contraseña:</p>
        <input type="password" name="password" required/>
        <p><input type="submit" value="Iniciar Sesion" /></p>
    </form>
</body>
</html>
