<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Listado Actores</title>
    <script src="../js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="../js/javascript.js" type="text/javascript"></script>
<!--    <link href="../css/style.css" rel="stylesheet" type="text/css"/>-->
</head>
<body>
<?php
session_start();
?>
    <p>Hola, <?php echo $_SESSION['username']; ?> <a href='../controlador/logout.php'>salir</a></p>
    <h1>Actores</h1>

<!-- 	sirve para Ordenar la lista que van con cookies -->
	<fieldset>
      <legend>Ordenar por:</legend>


      <form id="orden">
        <label class="radio-inline">
          <input type="radio" name="orden"
          <?php if (isset($_COOKIE["orden"]) && $_COOKIE["orden"]=="nombre") echo "checked";?>
          value="nombre">Actor
        </label>
        <label class="radio-inline">
          <input type="radio" name="orden"
          <?php if (isset($_COOKIE["orden"]) && $_COOKIE["orden"]=="pelicula") echo "checked";?>
          value="pelicula">Pelicula
        </label>
        <button type="submit" class="btn btn-default">Buscar</button>
        <button type="submit" class="btn btn-default" name="borrarOrden">Borrar Orden</button>
      </form>
    </fieldset>
    <br>
    <div id="Actores">
        
    </div>
        
</body>
</html>
