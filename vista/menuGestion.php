<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Menu Gestion</title>
    <script src="../js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="../js/javascript.js" type="text/javascript"></script>
</head>
<body>
<?php
session_start();
?>
    <p>Hola, <?php echo $_SESSION['username']; ?> <a href='../controlador/logout.php'>salir</a></p>
    <h1>Gestion</h1>

    <div id="gestion">
        <button id="Insertar">Insertar</button>
        <button id="Modificar">Modificar</button>
        <button id="Eliminar">Eliminar</button>
    </div>
    
    <div id="gestionInsertar">
        <button id="InsertarPelicula">Insertar Pelicula</button>
        <button id="InsertarActores">Insertar Actores</button>
        <button id="InsertarDirector">Insertar Director</button>
        <button id="InsertarActuacion">Insertar Actuaciones</button>
    </div>
    
    <div id="gestionModificar">
        <button id="ModificarPelicula">Modificar Pelicula</button>
        <button id="ModificarActor">Modificar Actor</button>
        <button id="ModificarDirector">Modificar Director</button>
        <button id="ModificarActuacion">Modificar Actuaciones</button>
    </div>
    
    <div id="gestionEliminar">
        <button id="EliminarPelicula">Eliminar Pelicula</button>
        <button id="EliminarActor">Eliminar Actor</button>
        <button id="ElminarDirector">Eliminar Director</button>
        <button id="ElminarActuacion">Eliminar Actuacion</button>
    </div>
    
    <div id="fomu">
        <div id="combos">
            <p id="selectPelicula"><label>Pelicula</label><select id="comboPeliculas"></select></p>
            <p id="selectActor"><label>Actores</label><select id="comboActores"></select></p>
            <p id="selectDirector"><label>Director</label><select id="comboDirector" class="valores"></select></p>
        </div>
        
        <div id="zonaPelicula">
            <p><label>ID</label><input type="text" id="idPeli"  disabled></p>
            <p><label>TITULO</label><input type="text" id="tituloPeli" class="valores"></p>
            <p><label >Anyo</label><input type="number" id="anyoPeli" class="valores" maxlength="4"></p>
        </div>
        
        <div id="zonaDirectorActor">
            <p><label>ID: </label><input type="text" id="idDirectorActor"  disabled></p>
            <p><label>NOMBRE: </label><input type="text" id="nombreDirectorActor" class="valores"></p>
        </div>
        
        <div id="zonaActuacion">
            <p id="selectPeliculaActuacion"><label>Pelicula</label><select id="comboPeliculasActuacion"></select></p>
            <p>
                Protagonista 
                <input type="radio" name="protagonista" value="1" class="valores"> Si
                <input type="radio" name="protagonista" value="0" class="valores"> No
                <button id="anadirActuacion">Añadir Otro</button>
            </p>
        </div>
        
        <input type="button" value="aceptar" id="Guardar">
        <input type="button" value="cancelar" id="Cancelar">
    </div>
        
</body>
</html>


