$(document).ready(function(){
	$("#registro").hide();
	
	$("body").on("click", "#registrarse", function () {
		$("#registro").show();
		$("#loguearse").hide();
	});
	
	$("body").on("click", "#login", function () {
		$("#loguearse").show();
		$("#registro").hide();
	});
});