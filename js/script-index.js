$(document).ready( function(){
	
	$(".js-back").hide(); 
	printNews ();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(renderActivity);

});

function printNews () {
	$(".callout-news p").append("Nuevas Recetas");
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i<recipesArray.length;i++) {
		if (recipesArray[i].highlighted==true) {
			renderRecipe(recipesArray[i]);
		}
	}
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	//<a class="item-recipe" href="#">
	var a = $("<a></a>");
	a.addClass('item-recipe');
	//<span class="attribution">
	var attribution = $("<span></span>");
	attribution.addClass("attribution");
	//<span class="title-recipe">
	var titlerecipe = $("<span></span>");
	titlerecipe.addClass("title-recipe");
	titlerecipe.text(recipe.title);
	//<span class="metadata-recipe">
	var metadatarecipe = $("<span></span>");
	metadatarecipe.addClass("metadata-recipe");
	//<span class="author-recipe">
	var authorrecipe = $("<span></span>");
	authorrecipe.addClass("author-recipe");
	authorrecipe.text(recipe.source.name);
	// <span class="bookmarks-recipe">
	var bookmarks = $("<span></span>");
	bookmarks.addClass("bookmarks-recipe");
	// <span class="icon-bookmark"></span>
	var iconbookmark = $("<span></span>");
	iconbookmark.addClass("icon-bookmark");
	// img src
	var img = $("<img/>");
	img.attr("src", "img/recipes/320x350/" + recipe.name + ".jpg");

	bookmarks.append(iconbookmark);
	metadatarecipe.append(bookmarks);
	metadatarecipe.append(authorrecipe);
	attribution.append(metadatarecipe);
	attribution.append(titlerecipe);
	a.append(img);
	a.append(attribution);

	$(".list-recipes").append(a);
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if (activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
	for (var i=0; i < activitiesArray.length; i++){
		renderActivity(activitiesArray[i]);
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var template =
	'<a href="#" class = "item-activity">' + 
		'<span class = "attribution">' + 
			'<span class = "avatar">' +
				'<img src = "<%= userAvatar%>" class = "image-avatar">' +
			'</span>'
			'<span class="meta">' +
				'<span class="author"><%= userName %></span>' +
				'<span class="recipe"><%= recipeName %></span>' +
				'<span class="location"><%= place%></span>' +
			'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(<% = image%>)"></div>' + 
	'</a>';

	var compiled = _.template(template);
	var a = compiled(recipe);
	console.log(a);
	var element = $(a);
	$(".list-activities").append(element);
};


