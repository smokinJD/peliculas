<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Listado Peliculas</title>
    <script src="../js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="../js/javascript.js" type="text/javascript"></script>
    <link href="../css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<?php
session_start();
?>
    <header>
    <p>Hola, <?php echo $_SESSION['username']; ?> <a href='../controlador/logout.php'>salir</a></p>
    <h1>Peliculas</h1>
    <img src="../img/logo.jpg"/>
    </header>
    <div id="Peliculas">
        
    </div>
        
</body>
</html>

