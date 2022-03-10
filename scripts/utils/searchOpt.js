var searchOpt = "";
let recipeIngredientsList = [];
let recipeApplianceList = [];
let recipeUstensilsList = [];

function filtering() {
  recipeIngredientsList = [];
  recipeApplianceList = [];
  recipeUstensilsList = [];
  ingOpt = document.querySelectorAll(".IngOpt");
  applOpt = document.querySelectorAll(".ApplOpt");
  ustOpt = document.querySelectorAll(".UstOpt");

  if (searchBar.value.length > 2) {
    if (ingOpt.length == 0) {
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipeList);
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0) {
        if (ustOpt.length > 0) {
          SearchApplianceOptions(recipeBuild);
        }
      }
    }
    if (ingOpt.length > 0) {
      SearchIngredientOptions(recipeList);
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipeIngredientsList);
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0) {
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeIngredientsList);
        }
      }
    }
  } else {
    if (ingOpt.length == 0) {
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipes);
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0 && ustOpt.length > 0) {
        SearchUstensilsOptions(recipes);
      }
    }
    if (ingOpt.length > 0) {
      SearchIngredientOptions(recipes);
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipeIngredientsList);
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0 && ustOpt.length > 0) {
        SearchUstensilsOptions(recipeIngredientsList);
      }
    }
  }
  itemList();
  globalGoodListing()
  widthcss("#ingredientList","#ingredientList li")
widthcss("#applianceList","#applianceList li")
widthcss("#ustensilList","#ustensilList li")
}

function itemList() {
  if (recipeUstensilsList.length > 0) {
    globalList(recipeUstensilsList);
    return;
  }
  if (recipeApplianceList.length > 0) {
    globalList(recipeApplianceList);
    return;
  }
  if (recipeIngredientsList.length > 0) {
    globalList(recipeIngredientsList);
    return;
  }
  if (searchBar.value.length > 2) {
    globalList(recipeList);
    if (recipeList.length > 0) {
      return;
    }
    else {
      const noRecipeFound = document.createElement("div")
      noRecipeFound.setAttribute("class", "noRecipeFound")
      noRecipeFound.textContent = "Aucune recette ne correspond à votre critère";
      document.querySelector(".menuArticles").appendChild(noRecipeFound)
      return
    }
  } else {
    globalList(recipes)
    return;
  }
}

document.querySelector("#ingredientList").addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    filtering();
    document.querySelectorAll(".IngOpt").forEach(element => element.addEventListener("click", removeOpt))
  }
});

function SearchIngredientOptions(recipeBuild) {
  recipeBuild.forEach(recipe =>
    recipe.ingredients.forEach(function (ingred) {
      ingOpt.forEach(function (ing) {
        if (ingred.ingredient == ing.innerText) {
          recipeIngredientsList.push(recipe);
        }
      })
    })
  )
  if (ingOpt.length > 1) {
    for (i = 0; i < recipeIngredientsList.length; i++) {
      let isIn = 0;
      recipeIngredientsList[i].ingredients.forEach(function (ingred) {
        ingOpt.forEach(function (ing) {
          if (ingred.ingredient == ing.innerText) {
            isIn++;
          }
        })
      })
      if (ingOpt.length == isIn) {
      } else {
        recipeIngredientsList.splice(i, 1);
        i--;
      }
    }
  }

  for (i = 0; i < recipeIngredientsList.length; i++) {
    if (recipeIngredientsList[i] == recipeIngredientsList[i - 1] ||recipeIngredientsList[i] == recipeIngredientsList[i + 1]) {
      recipeIngredientsList.splice(i, 1);
      i--;
    }
  }
}

document.querySelector("#applianceList").addEventListener("click", function (event) {
  if (event.target.tagName == "LI"){
    filtering();
    document.querySelectorAll(".ApplOpt").forEach(element => element.addEventListener("click", removeOpt))
  }
});
function SearchApplianceOptions(recipeBuild) {
  recipeBuild.forEach(recipe => applOpt.forEach(function (appl) {
    if (recipe.appliance == appl.innerText) {
      recipeApplianceList.push(recipe)
    }
  }))
  for (i = 0; i < recipeApplianceList.length; i++) {
    if (recipeApplianceList[i] == recipeApplianceList[i - 1] || recipeApplianceList[i] == recipeApplianceList[i + 1]) {
      recipeApplianceList.splice(i, 1);
      i--
    }
  }
}

document.querySelector("#ustensilList").addEventListener("click", function (event) {
  if (event.target.tagName == "LI"){
    filtering();
    document.querySelectorAll(".UstOpt").forEach(element => element.addEventListener("click", removeOpt))
  }
});
function SearchUstensilsOptions(recipeBuild) {
  recipeBuild.forEach(recipe => recipe.ustensils.forEach(function (ustensil) {
    ustOpt.forEach(function (ust) {
      if (ustensil == ust.innerText) {
        recipeUstensilsList.push(recipe);
      }
    })
  })
);
  if (ustOpt.length > 1){
    for (i = 0; i < recipeUstensilsList.length; i++) {
      let ustIn = 0
      recipeUstensilsList[i].ustensils.forEach(function (ustensil) {
        ustOpt.forEach(function (ust) {
          if (ustensil == ust.innerText) {
            ustIn++
          }
        })
      })
      if (ustOpt.length != ustIn) {
        recipeUstensilsList.splice(i, 1);
        i--;
      }
    }
  }
  for (i = 0; i < recipeUstensilsList.length; i++) {
    if (
      recipeUstensilsList[i] == recipeUstensilsList[i - 1] ||
      recipeUstensilsList[i] == recipeUstensilsList[i + 1]
    ) {
      recipeUstensilsList.splice(i, 1);
      i--;
    }
  }
}

function removeOpt(event) {
  if(event.target.tagName == "IMG"){
  event.target.parentNode.remove()
  }
  filtering();
}

function globalGoodListing() {
  goodListing("#ingredientList", ingOpt);
  goodListing("#applianceList", applOpt);
  goodListing("#ustensilList", ustOpt);
}

function goodListing(querySelector1, Opt) {
  let optionList = [];
  const sel = document.querySelector(querySelector1);
  for (i = 0; i < sel.children.length; i++) {
    optionList.push(sel.children[i].innerText);
  }
  for (i = 0; i < Opt.length; i++) {
    let index = optionList.indexOf(Opt[i].innerText);
    if (index >= 0) {
      sel.removeChild(sel.children[index]);
      optionList.splice(index, 1);
    }
  }
  if (document.querySelector("#ingInputField") != null) {
    inputSearch(document.querySelectorAll("#ingredientList li"), document.querySelector("#ingInputField").value.trim().toLowerCase());
  }
  if (document.querySelector("#applInputField") != null) {
    inputSearch(document.querySelectorAll("#applianceList li"), document.querySelector("#applInputField").value.trim().toLowerCase());
  }
  if (document.querySelector("#ustInputField") != null) {
    inputSearch(document.querySelectorAll("#ustensilList li"), document.querySelector("#ustInputField").value.trim().toLowerCase());
  }
}