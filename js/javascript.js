$(document).ready(function(){
   var opcion = "";
   
   //Al Cargar listadoPeliculas
   $("listadoPeliculas.php").ready(function(){
      mostrarPeliculas(); 
   });
    
   //Al Cargar listadoActores
   $("listadoActores.php").ready(function(){
      mostrarActores(); 
   });
 
    //al cargar Menu gestion
    $("menuGestion.php").ready(function(){
        ocultar();
        CargarComboPeliculas();
        CargarComboDirector();
        CargarComboActor();
        $("#gestion").show();
        
        $("#Insertar").click(function(){
            ocultar();
            $("#gestionInsertar").show();
        });
        
        $("#Modificar").click(function(){
            ocultar();
            $("#gestionModificar").show();
        });
        
        $("#InsertarPelicula").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaPelicula").show();
            $("#selectDirector").show();
            opcion = "InsertarPelicula";
        });
        
        $("#InsertarActores").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaDirectorActor").show();
            opcion = "InsertarActor";
        });
        
        $("#InsertarDirector").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaDirectorActor").show();
            opcion = "InsertarDirector";
        });
        
        $("#InsertarActuacion").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#selectPelicula").show();
            $("#selectActor").show();
            opcion = "InsertarActuacion";
            //$("#comboDirector").show();
        });
        
        ///AL hacer submit
        
        $('#Guardar').click(function(){
           switch(opcion){
            //Case Insertar
            case "InsertarPelicula":
                funcionInsertarPelicula();
                break;
            case "InsertarActor":
                 funcionInsertarActor();
                break;
            case "InsertarDirector":
                funcionInsertarDirector();
                break;
            case "ikasleGuardarBilatu":
                funcionIkasleBilatu();
                break;
                    }
    });
    
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
                nuevo += "<div id='"+dato.idPelicula+"'>";
	        nuevo += "<h3 class='titulo'>"+ dato.Titulo +"</h3>";
                nuevo+="<img src='../img/"+dato.Cartel+"' width='200px'>";
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
                    url:"../controlador/controladorListadoActores.php",
            success:function(datos) {
                var tabla="<table>";
               tabla+="<th>Nombre</th>\n\
               <th>Peliculas</th>\n\
               <th>Veces Protagonista</th>";
                midato=JSON.parse(datos);
                         
             $.each( midato, function(i,dato) {
                tabla+="<tr>";
                tabla+="<td class='actor'>"+dato.Nombre+"</td>";
		tabla+="<td class='peliculasActores'>"+dato.peliculas+"</td>";
                tabla+="<td class='protagonista'>"+dato.protagonista+"</td>";
                tabla+="</tr>";
            });
                tabla+="</table>";
                $('#Actores').append(tabla).hide().fadeIn('slow');
                return false;
            }, 
        error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
             }           
             });	
         };
         
         
         
//cargar combos
//cargar combo Peliculas
    function CargarComboPeliculas(){
               $('#comboPeliculas').html("");
               $.ajax({
                type:'POST',
                dstaType:'json',
                url:"../controlador/controladorListadoPeliculas.php",
              success:function(datos) {
                 //alert(datos)
                  midato=JSON.parse(datos);
                   micombo="";    
               $.each( midato, function(i,dato) {
	        micombo+="<option value='"+dato.idPelicula+"' data-titulo='"+dato.Titulo+"' data-anio='"+dato.Anyo+"''>"+dato.Titulo+"</option>";
		            });
            	//alert(micombo)
                $('#comboPeliculas').append(micombo);
                return false;
               }, 
             error: function(xhr){
                     alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                    }           
            });
             };

    
//cargar combo Actores
    function CargarComboActor(){
               $('#comboActores').html("");
               $.ajax({
                type:'POST',
                dstaType:'json',
                url:"../controlador/controladorListadoActores.php",
              success:function(datos) {
                 //alert(datos)
                  midato=JSON.parse(datos);
                   micombo="";    
               $.each( midato, function(i,dato) {
	        micombo+="<option value='"+dato.idActor+"' data-Nombre='"+dato.Nombre+"''>"+dato.Nombre+"</option>";
		            });
            	//alert(micombo)
                $('#comboActores').append(micombo);
                return false;
               }, 
             error: function(xhr){
                     alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                    }           
            });
             };
    
//cargar combo Directores
    function CargarComboDirector(){
               $('#comboDirector').html("");
               $.ajax({
                type:'POST',
                dstaType:'json',
                url:"../controlador/controladorConsultaDirector.php",
              success:function(datos) {
                 //alert(datos)
                  midato=JSON.parse(datos);
                   micombo="";    
               $.each( midato, function(i,dato) {
	        micombo+="<option value='"+dato.idDirector+"' data-Nombre='"+dato.Nombre+"''>"+dato.Nombre+"</option>";
		            });
            	//alert(micombo)
                $('#comboDirector').append(micombo);
                return false;
               }, 
             error: function(xhr){
                     alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                    }           
            });
             };
             
           
    
    
    
    
    
//Insertar
//insertar Peliculas

    function funcionInsertarPelicula(){
                  Titulo = $('#tituloPeli').val();
                  Anyo= $('#anyoPeli').val();
                  Director = $("#comboDirector").val();
                  $.ajax({
                   type:'POST',
                   data:"submit=&Titulo="+Titulo+"&Anyo="+Anyo+"&Director="+Director,
                   dstaType:'json',
                   url:"../controlador/controladorInsertarPelicula.php",
                success:function(datos) {
                    alert("Se ha insertado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
              };
          
//insertar Actor

    function funcionInsertarActor(){
                  nombre = $('#nombreDirectorActor').val();
                  $.ajax({
                   type:'POST',
                   data:"submit=&Nombre="+nombre,
                   dstaType:'json',
                   url:"../controlador/controladorInsertarActor.php",
                success:function(datos) {
                    alert("Se ha insertado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
              };
          
          
//insertar Actor

    function funcionInsertarDirector(){
                  nombre = $('#nombreDirectorActor').val();
                  $.ajax({
                   type:'POST',
                   data:"submit=&Nombre="+nombre,
                   dstaType:'json',
                   url:"../controlador/controladorInsertarDirector.php",
                success:function(datos) {
                    alert("Se ha insertado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
              };

    //funcion Ocultar div
        function ocultar(){
             $("#gestion").hide();
             $("#gestionInsertar").hide();
             $("#gestionModificar").hide();
             $("#gestionEliminar").hide();
             $("#fomu").hide();
         }
         
        //funcion Ocultar div del formu
        function ocultarFormu(){
             $("#zonaPelicula").hide();
             $("#zonaActuacion").hide();
             $("#zonaDirectorActor").hide();
             $("#selectDirector").hide();
             $("#selectActor").hide();
             $("#selectPelicula").hide();
         }
    
    //vaciar Input
    function vaciar(){
        $('input:text').val("");
        $(':input[type="number"]').val("");
    }
});


