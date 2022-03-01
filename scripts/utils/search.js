const searchBar = document.getElementById("searchBar");
var recipeList = [];
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  recipeList = [];
  if (searchString.length >= 3) {
    recipes.forEach(function(recipe){
      if(recipe.name.toLowerCase().search('\\b' +searchString) > -1){
        recipeList.push(recipe);
      }
      recipe.ingredients.forEach(function(element){
        if(element.ingredient.toLowerCase().search('\\b' +searchString) > -1){
        recipeList.push(recipe);
      }
      })
      if (recipe.description.toLowerCase().match(searchString) == true) {
        recipeList.push(recipe);
      }
      if (recipe.appliance.toLowerCase().match(searchString) == true){
        recipeList.push(recipe);
      }
      recipe.ustensils.forEach(function(element){
        if(element.toLowerCase().match(searchString) == true){
        recipeList.push(recipe);
      }})
    });
    for (i = 0; i < recipeList.length; i++) {
      if (recipeList[i] == recipeList[i - 1]||recipeList[i] == recipeList[i + 1]) {
        recipeList.splice(i, 1);
        i--;
      }
    }
  }
  filtering();
});
