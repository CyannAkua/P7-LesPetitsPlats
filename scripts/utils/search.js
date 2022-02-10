const searchBar = document.getElementById("searchBar");
var recipeList = [];
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  recipeList = [];
  if (searchString.length >= 3) {
    for (i = 0; i < recipes.length; i++) {
      if (recipes[i].name.toLowerCase().indexOf(searchString) > -1) {
        recipeList.push(recipes[i]);
      }
      for (i2 = 0; i2 < recipes[i].ingredients.length; i2++) {
        if (
          recipes[i].ingredients[i2].ingredient
            .toLowerCase()
            .indexOf(searchString) > -1
        ) {
          recipeList.push(recipes[i]);
        }
      }
      if (recipes[i].description.toLowerCase().match(searchString) == true) {
        recipeList.push(recipes[i]);
      }
    }
    for (i = 0; i < recipeList.length; i++) {
      if (recipeList[i] == recipeList[i - 1]) {
        recipeList.splice(i, 1);
      }
      if (recipeList[i] == recipeList[i + 1]) {
        recipeList.splice(i, 1);
      }
    }    
  } else {
    
  }
  filtering()
});
