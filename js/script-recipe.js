$(document).ready( function(){
	$(".js-menu").hide();
	console.log("READY!");
	//Etapa 8 y 9 
	$(".js-show-make").click(function(){
	    $(".page").addClass("make");
	    $(".js-show-make").addClass("active");
	   	$(".js-show-recipe").removeClass("active");
	});

	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
		$(".js-show-recipe").addClass("active");
		$(".js-show-make").removeClass("active");
	});
	//Etapa 10
	$(".js-back").click(function(){
		window.location.href = "index.html";
	});

});
