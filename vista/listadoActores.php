<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Listado Actores</title>
    <script src="../js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="../js/javascript.js" type="text/javascript"></script>
</head>
<body>
<?php
session_start();
?>
    <p>Hola, <?php echo $_SESSION['username']; ?> <a href='../controlador/logout.php'>salir</a></p>
    <h1>Actores</h1>

    <div id="Actores">
        
    </div>
        
</body>
</html>
