$(document).ready(function(){
   var opcion = "";
   var vueltas = 1;
   
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
        
        
        $("#Insertar").click(function(){
            ocultar();
            $("#gestionInsertar").show();
            $('.valores').attr("disabled", false);
        });
        
        $("#Modificar").click(function(){
            ocultar();
            $("#gestionModificar").show();
            $('.valores').attr("disabled", false);
        });
        
        $("#Eliminar").click(function(){
            ocultar();
            $("#gestionEliminar").show();
        });
        
        // Botones Pelicula
        $("#InsertarPelicula").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaPelicula").show();
            $("#selectDirector").show();
            $('#selectDirector').appendTo('#zonaPelicula');
            opcion = "InsertarPelicula";
        });
        
        $("#ModificarPelicula").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaPelicula").show();
            $("#selectDirector").show();
            $("#selectPelicula").show();
            $('#selectDirector').appendTo('#zonaPelicula');
            opcion = "ModificarPelicula";
        });
        
        $("#EliminarPelicula").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaPelicula").show();
            $("#selectDirector").show();
            $("#selectPelicula").show();
            $('#selectDirector').appendTo('#zonaPelicula');
            $('.valores').attr("disabled", true);
            opcion = "EliminarPelicula";
        });
        
        //BOTONES ACTORES
        $("#InsertarActores").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaDirectorActor").show();
            opcion = "InsertarActor";
        });
        
        $("#ModificarActor").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#selectActor").show();
            $("#zonaDirectorActor").show();
            opcion = "ModificarActor";
        });
        
        $("#EliminarActor").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#selectActor").show();
            $("#zonaDirectorActor").show();
            opcion = "EliminarActor";
        });
        
        //BOTONES DIRECTOR
        $("#InsertarDirector").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaDirectorActor").show();
            opcion = "InsertarDirector";
        });
        
        $("#ModificarDirector").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaDirectorActor").show();
            $('#selectDirector').appendTo('#combos');
            $('#selectDirector').show();
            opcion = "ModificarDirector";
        });
        
        $("#ElminarDirector").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#zonaDirectorActor").show();
            $('#selectDirector').appendTo('#combos');
            $('#selectDirector').show();
            $('.valores').attr("disabled", true);
            $('#comboDirector').attr("disabled", false);
            opcion = "ElminarDirector";
        });
        
        //Botones Actuaciones
        $("#InsertarActuacion").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#selectPelicula").show();
            $("#selectActor").show();
            $("#zonaActuacion").show();
            $("#anadirActuacion").show();
            opcion = "InsertarActuacion";
        });
        
        $("#ModificarActuacion").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#selectPeliculaActuacion").show();
            $("#selectActor").show();
            $("#zonaActuacion").show();
            opcion = "ModificarActuacion";
        });
        
        $("#ElminarActuacion").click(function(){
            ocultarFormu();
            $("#fomu").show();
            $("#selectPeliculaActuacion").show();
            $("#selectActor").show();
            $("#zonaActuacion").show();
            $('.valores').attr("disabled", true);
            opcion = "ElminarActuacion";
        });
        
        //Boton Añadir Actores en actuacion
        $("#anadirActuacion").click(function(){
            $("#mas").show();
            anadirActorActuacion();
            
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
            case "InsertarActuacion":
                funcionInsertarActuacion();
                break;
            //Case modificar
            case "ModificarPelicula":
                funcionModificarPelicula();
                break;
            case "ModificarActor":
                funcionModificarActor();
                break;
            case "ModificarDirector":
                
                break;
            case "ModificarActuacion":
                funcionModificarActuaciones();
                break;
            
            //case Borrrar
            case "EliminarPelicula":
                funcionEliminarPelicula();
                break;
            case "EliminarActor":
                funcionEliminarActor();
                break;
            case "ElminarDirector":
                funcionEliminarDirector();
                break;
            case "ElminarActuacion":
                funcionEliminarActuacion();
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
                nuevo += "<div class='peli'>";
	        nuevo += "<h3 class='titulo'>"+ dato.Titulo +"</h3>";
                nuevo+="<img src='../img/"+dato.Cartel+"' width='200px'>";
                nuevo += "<div class='informacion'>";
		nuevo+="<p class='anio'>Año: "+dato.Anyo+"</p>";
                nuevo+="<p class='director'>Director: "+dato.Director+"</p>";
                nuevo+="<p class='actores'>Actores: "+dato.actores+"</p>";
                nuevo+="<p class='sipnosis'>Sipnosis: <br><br>"+dato.sipnosis+"</p>";
                nuevo += "</div>";
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
             //orden = $("input:radio[name=orden]:checked").val();
             borrarOrden = $("input:submit[name=borrarOrden]").val();
             alert(orden);
              $('#Actores').html(' ');
                     $.ajax({
                         type:'POST',
                         data:"submit=&orede="+orden+"&borrarOrden="+borrarOrden,
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
	        micombo+="<option value='"+dato.idPelicula+"' data-director='"+dato.idDirector+"' data-anio='"+dato.Anyo+"''>"+dato.Titulo+"</option>";
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

    $('#comboPeliculas').change(function(){
         
            MiId=$('#comboPeliculas').val();
            Titulo=$('#comboPeliculas option:selected').html();
            Anyo=$('#comboPeliculas option:selected').attr('data-anio');
            Director=$('#comboPeliculas option:selected').attr('data-director');
              
            $('#idPeli').val(MiId);
            $('.clonePeliculas').val(MiId);
            $('#tituloPeli').val(Titulo);
            $('#anyoPeli').val(Anyo);
            $('#comboDirector').val(Director);
    });
    
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
             
    $('#comboActores').change(function(){
         
            MiId=$('#comboActores').val();
            NombreActor=$('#comboActores option:selected').html();
              
            $('#idDirectorActor').val(MiId);
            $('#nombreDirectorActor').val(NombreActor);
            CargarComboPeliculasActuacion(MiId);
            $("input:radio").attr('checked', false);
    });    
            
    
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
	        micombo+="<option value='"+dato.idDirector+"' data-Nombre='"+dato.Nombre+"'>"+dato.Nombre+"</option>";
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
             
           
    
//cargar Combo Peliculas Actuacion por Actor

    function CargarComboPeliculasActuacion(id){
               $('#comboPeliculasActuacion').html("");
               $.ajax({
                type:'POST',
                data:{data:id},
                dstaType:'json',
                url:"../controlador/controladorMostrarPeliculasPorActor.php",
              success:function(datos) {
                 //alert(datos)
                  midato=JSON.parse(datos);
                   micombo="";    
               $.each( midato, function(i,dato) {
	        micombo+="<option value='"+dato.idPelicula+"' data-protagonista='"+dato.esProtagonista+"''>"+dato.Titulo+"</option>";
		            });
            	//alert(micombo)
                $('#comboPeliculasActuacion').append(micombo);
                return false;
               }, 
             error: function(xhr){
                     alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                    }           
            });
             };
    
    $('#comboPeliculasActuacion').change(function(){
            
            MiId=$('#comboPeliculasActuacion').val();
            protagonista=$('#comboPeliculasActuacion option:selected').attr('data-protagonista');
            if (protagonista==='1'){
                $("input:radio[value=1]").attr('checked', true);
            }else{
                $("input:radio[value=0]").attr('checked', true);
            }
            
            
    });
    
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
          
          
//insertar Director

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

//Insertar Actuaciones
    function funcionInsertarActuacion(){
                pelicula = $('#comboPeliculas').val();
                protagonista = $("input:radio[name=protagonista0]:checked").val();
                
                arrayActores = [];
              $('.actorActu').each(function(index){
                  actor = $(this).val();
                  item = {};
                  item ['Actor'] = actor;
                  arrayActores.push(item);
                  
              });
              
               arrayProtagonista= [];
              $('.protagonista').each(function(i,index){
                  prota = $("input:radio[name=protagonista"+i+"]:checked").val();
                  item = {};
                  item ['Protagonista'] = prota;
                  arrayProtagonista.push(item);
                  
              });
              
              var json = {"Pelicula":pelicula,arrayActores, arrayProtagonista};
              var jsonModulos = JSON.stringify(json);
              
              alert (jsonModulos);
              
                  $.ajax({
                   type:'POST',
                   data:{data:jsonModulos},
                   dstaType:'json',
                   url:"../controlador/controladorInsertarActuacion.php",
                success:function(datos) {
                    alert("Se ha insertado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
                    CargarComboPeliculas();
                    CargarComboActor();
                    vueltas=1;
              };
              
//MODIFICAR
//Modificar Pelicula

function funcionModificarPelicula(){
                id = $('#comboPeliculas').val();
                Titulo = $('#tituloPeli').val();
                Anyo= $('#anyoPeli').val();
                Director = $("#comboDirector").val();
                $.ajax({
                   type:'POST',
                   data:"submit=&Titulo="+Titulo+"&Anyo="+Anyo+"&Director="+Director+ "&Id="+id,
                   dstaType:'json',
                   url:"../controlador/controladorModificarPelicula.php",
                success:function(datos) {
                    alert("Se ha modificado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
              };
              
//Modificar Actor

function funcionModificarActor(){
                id = $('#idDirectorActor').val();
                nombre = $('#nombreDirectorActor').val();
                
                $.ajax({
                   type:'POST',
                   data:"submit=&Nombre="+nombre+"&Id="+id,
                   dstaType:'json',
                   url:"../controlador/controladorModificarActor.php",
                success:function(datos) {
                    alert("Se ha modificado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
              };
              
//Modificar Director

function funcionModificarDirector(){
                id = $('#idDirectorActor').val();
                nombre = $('#nombreDirectorActor').val();
                
                $.ajax({
                   type:'POST',
                   data:"submit=&Nombre="+nombre+"&Id="+id,
                   dstaType:'json',
                   url:"../controlador/controladorModificarDirector.php",
                success:function(datos) {
                    alert("Se ha modificado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
              };


//Modificar Actuaciones

function funcionModificarActuaciones(){
                pelicula = $('#comboPeliculasActuacion').val();
                actores= $('#comboActores').val();
                protagonista = $("input:radio[name=protagonista0]:checked").val();
                  $.ajax({
                   type:'POST',
                   data:"submit=&Pelicula="+pelicula+"&Actor="+actores+"&protagonista="+protagonista,
                   dstaType:'json',
                   url:"../controlador/controladorModificarActuacion.php",
                success:function(datos) {
                    alert("Se ha Modificado con exito");
                    alert(datos);
                    }, 
                    error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                 }  
                 });                 
                    vaciar();
                    CargarComboActor();
              };


//BORRAR
//BORRAR PELICULA

function funcionEliminarPelicula(){
              
              id = $('#comboPeliculas').val();
              confirmar = confirm("Seguro que desea borrar el registro? ");
              if(!confirmar){ return false}
               $.ajax({
               type:'POST',
              data:{data:id},
              dstaType:'json',
              url:"../controlador/controladorEliminarPelicula.php",
            success:function(datos) {
               alert("Se ha eliminado con exito");
               
                }, 
                error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
             }  
             });                 
                $('.valores').attr("disabled", false);
                ocultar();
                vaciar();   
           };

    
//BORRAR Actor
function funcionEliminarActor(){
              
              id = $('#idDirectorActor').val();
              confirmar = confirm("Seguro que desea borrar el registro? ");
              if(!confirmar){ return false}
               $.ajax({
               type:'POST',
              data:{data:id},
              dstaType:'json',
              url:"../controlador/controladorEliminarActor.php",
            success:function(datos) {
               alert("Se ha eliminado con exito");
               
                }, 
                error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
             }  
             });                 
                $('.valores').attr("disabled", false);
                ocultar();
                vaciar();   
           };


//BORRAR DIRECTOR
function funcionEliminarDirector(){
              
              id = $('#idDirectorActor').val();
              confirmar = confirm("Seguro que desea borrar el registro? ");
              if(!confirmar){ return false}
               $.ajax({
               type:'POST',
              data:{data:id},
              dstaType:'json',
              url:"../controlador/controladorEliminarDirector.php",
            success:function(datos) {
               alert("Se ha eliminado con exito");
               
                }, 
                error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
             }  
             });                 
                $('.valores').attr("disabled", false);
                ocultar();
                vaciar();   
           };

//Modificar Actuaciones

function funcionEliminarActuacion(){
                pelicula = $('#comboPeliculasActuacion').val();
                actores= $('#comboActores').val();
                  $.ajax({
                   type:'POST',
                   data:"submit=&Pelicula="+pelicula+"&Actor="+actores,
                   dstaType:'json',
                   url:"../controlador/controladorEliminarActuacion.php",
                success:function(datos) {
                alert("Se ha eliminado con exito");
               
                }, 
                error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);  
                }  
                });                 
                $('.valores').attr("disabled", false);
                ocultar();
                vaciar();   
            };
              


//Funcion Añadir Actores en Actuacion

    function anadirActorActuacion(){
        MiId=$('#comboPeliculas').val();
        protagonista= "<p class='protagonista'> Protagonista <input type='radio' name='protagonista"+vueltas+"' value='1' class='valores'> Si <input type='radio' name='protagonista"+vueltas+"' value='0' class='valores'> No</p>";
        $("#selectPelicula").clone().appendTo("#mas");
        $("#selectActor").clone().appendTo("#mas");
        $("#mas #comboPeliculas").attr("class", "clonePeliculas");
        $(".clonePeliculas").attr("disabled", true);
        $('.clonePeliculas').val(MiId);
        $(protagonista).appendTo("#mas");
        vueltas++;
    }
    
    
    //funcion Ocultar div
        function ocultar(){
             //$("#gestion").hide();
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
             $("#selectPeliculaActuacion").hide();
             $("#anadirActuacion").hide();
             $("#mas").hide();
         }
    
    //vaciar Input
    function vaciar(){
        $('input:text').val("");
        $(':input[type="number"]').val("");
        $("#mas").html("");
    }
});


