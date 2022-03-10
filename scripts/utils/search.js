const searchBar = document.getElementById("searchBar");
var recipeList = [];
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  recipeList = [];
  if (searchString.length >= 3) {
    recipes.forEach(function(recipe){
      if(recipe.name.toLowerCase().search('\\b' +searchString) > -1){
        addUnique(recipeList,recipe);
      }
      recipe.ingredients.forEach(function(element){
        if(element.ingredient.toLowerCase().search('\\b' +searchString) > -1){
          addUnique(recipeList,recipe);
      }
      });
      if (recipe.description.toLowerCase().match(searchString) == true) {
        addUnique(recipeList,recipe);
      }
      if (recipe.appliance.toLowerCase().match(searchString) == true){
        addUnique(recipeList,recipe);
      }
      recipe.ustensils.forEach(function(element){
        if(element.toLowerCase().match(searchString) == true){
          addUnique(recipeList,recipe);
      }});
    });
  }
  filtering();
});

function addUnique(recipeList,recipe){
  if(!recipeList.find(recipefind => recipefind.id == recipe.id)){
    recipeList.push(recipe);
  }
}