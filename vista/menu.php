<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <script src="../js/jquery-3.2.1.min.js" type="text/javascript"></script>
        <script src="../js/javascript.js" type="text/javascript"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <?php
    session_start();
    ?>
    <p>Hola, <?php echo $_SESSION['username']; ?> <a href='../controlador/logout.php'>salir</a></p>
        <h1>Menu Peliculas</h1>
        
        <section>
            <p id="mostrarPelis"><a href="../vista/listadoPeliculas.php">Ver Peliculas</a></p>
            <p><a href="../controlador/controladorListadoActores.php">Ver Actores</a></p>
        </section>
    </body>
</html>

