$(document).ready(function(){
   var opcion = "";
   
   //Al Cargar listadoPeliculas
   $("listadoPeliculas.php").ready(function(){
      mostrarPeliculas(); 
   });
    
   //Al Cargar listadoPeliculas
   $("listadoActores.php").ready(function(){
      mostrarPeliculas(); 
   });
 
    
// Consultas
// Consulta de Peliculas
   function mostrarPeliculas(){
         $('#Peliculas').html(' ');
                $.ajax({
                     type:'POST',
                      dstaType:'json',
                       url:"../controlador/controladorListadoPeliculas.php",
            success:function(datos) {
                var nuevo = "";
                midato=JSON.parse(datos);
                         
             $.each( midato, function(i,dato) {
                nuevo += "<div id='"+dato.idPelicula+">";
	        nuevo += "<h3 class='titulo'>"+ dato.Titulo +"</h3>";
                nuevo+="<img src='"+dato.Cartel+"'>";
		nuevo+="<p class='anio'>"+dato.Anyo+"</p>";
                nuevo+="<p class='director'>"+dato.Director+"</p>";
                nuevo += "</div>";
            });
                $('#Peliculas').append(nuevo).hide().fadeIn('slow');
                return false;
            }, 
        error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
             }           
             });	
         };
         
         
// Consulta de Actores         
        function mostrarActores(){
         $('#Actores').html(' ');
                $.ajax({
                     type:'POST',
                      dstaType:'json',
                       url:"../controlador/controladorListadoPeliculas.php",
            success:function(datos) {
                var nuevo = "";
                midato=JSON.parse(datos);
                         
             $.each( midato, function(i,dato) {
                nuevo += "<div id='"+dato.idActor+">";
	        nuevo += "<h3 class='titulo'>"+ dato.Titulo +"</h3>";
                nuevo+="<img src='"+dato.Cartel+"'>";
		nuevo+="<p class='anio'>"+dato.Anyo+"</p>";
                nuevo+="<p class='director'>"+dato.Director+"</p>";
                nuevo += "</div>";
            });
                $('#Actores').append(nuevo).hide().fadeIn('slow');
                return false;
            }, 
        error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
             }           
             });	
         };
});


