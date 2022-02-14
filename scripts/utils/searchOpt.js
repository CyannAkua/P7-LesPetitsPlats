var searchOpt = "";
let recipeIngredientsList = [];
let recipeApplianceList = [];
let recipeUstensilsList = [];
let isIn = 0;
let ustIn = 0;

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
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0) {
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchApplianceOptions(recipeBuild);
        }
      }
    }
    if (ingOpt.length > 0) {
      SearchIngredientOptions(recipeList);
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipeIngredientsList);
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0) {
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeIngredientsList);
        }
      }
    }
  } else {
    if (ingOpt.length == 0) {
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipes);
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0) {
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipes);
        }
      }
    }
    if (ingOpt.length > 0) {
      SearchIngredientOptions(recipes);
      if (applOpt.length > 0) {
        SearchApplianceOptions(recipeIngredientsList);
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeApplianceList);
        }
      }
      if (applOpt.length == 0) {
        if (ustOpt.length == 0) {
        }
        if (ustOpt.length > 0) {
          SearchUstensilsOptions(recipeIngredientsList);
        }
      }
    }
  }
  itemList();
  globalGoodListing()
}

function itemList() {
  if (recipeUstensilsList.length > 0) {
    allIngList(recipeUstensilsList);
    allApplList(recipeUstensilsList);
    allUstList(recipeUstensilsList);
    displayMenu(recipeUstensilsList);
    return;
  }
  if (recipeApplianceList.length > 0) {
    allIngList(recipeApplianceList);
    allApplList(recipeApplianceList);
    allUstList(recipeApplianceList);
    displayMenu(recipeApplianceList);
    return;
  }
  if (recipeIngredientsList.length > 0) {
    allIngList(recipeIngredientsList);
    allApplList(recipeIngredientsList);
    allUstList(recipeIngredientsList);
    displayMenu(recipeIngredientsList);
    return;
  }
  if (searchBar.value.length > 2) {
    allIngList(recipeList);
    allApplList(recipeList);
    allUstList(recipeList);
    displayMenu(recipeList);
    return;
  } else {
    allIngList(recipes);
    allApplList(recipes);
    allUstList(recipes);
    displayMenu(recipes);
    return;
  }
}

document.querySelector("#ingredientList").addEventListener("click", function (event) {
  if (
    event.target.innerText.match(/(\n)/g) == null &&
    event.target.innerText != "Ingredients"
  ) {
    filtering();
    document.querySelectorAll(".IngOpt").forEach(element => element.addEventListener("click", removeOpt))
  }
}
);

function SearchIngredientOptions(recipeBuild) {
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < recipeBuild[i].ingredients.length; i2++) {
      for (i3 = 0; i3 < ingOpt.length; i3++) {
        if (
          recipeBuild[i].ingredients[i2].ingredient
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") == ingOpt[i3].innerText
        ) {
          recipeIngredientsList.push(recipeBuild[i]);
        }
      }
    }
  }
  if (ingOpt.length > 1) {
    for (i = 0; i < recipeIngredientsList.length; i++) {
      isIn = 0;
      for (i2 = 0; i2 < recipeIngredientsList[i].ingredients.length; i2++) {
        for (i3 = 0; i3 < ingOpt.length; i3++) {
          if (
            recipeIngredientsList[i].ingredients[i2].ingredient
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") == ingOpt[i3].innerText
          ) {
            isIn = isIn + 1;
          }
        }
      }
      if (ingOpt.length == isIn) {
      } else {
        recipeIngredientsList.splice(i, 1);
        i = i - 1;
      }
    }
  }
  for (i = 0; i < recipeIngredientsList.length; i++) {
    if (
      recipeIngredientsList[i] == recipeIngredientsList[i - 1] ||
      recipeIngredientsList[i] == recipeIngredientsList[i + 1]
    ) {
      recipeIngredientsList.splice(i, 1);
      i = i - 1;
    }
  }
}

document.querySelector("#applianceList").addEventListener("click", function (event) {
  if (
    event.target.innerText.match(/(\n)/g) == null &&
    event.target.innerText != "Appareils"
  ) {
    filtering();
    document.querySelectorAll(".ApplOpt").forEach(element => element.addEventListener("click", removeOpt))
  }
}
);
function SearchApplianceOptions(recipeBuild) {
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < applOpt.length; i2++) {
      if (
        recipeBuild[i].appliance
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") == applOpt[i2].innerText
      ) {
        recipeApplianceList.push(recipeBuild[i]);
      }
    }
  }
  for (i = 0; i < recipeApplianceList.length; i++) {
    if (recipeApplianceList[i] == recipeApplianceList[i - 1]) {
      recipeApplianceList.splice(i, 1);
    }
    if (recipeApplianceList[i] == recipeApplianceList[i + 1]) {
      recipeApplianceList.splice(i, 1);
    }
  }
}

document.querySelector("#ustensilList").addEventListener("click", function (event) {
  if (
    event.target.innerText.match(/(\n)/g) == null &&
    event.target.innerText != "Ustensiles"
  ) {
    filtering();
    document.querySelectorAll(".UstOpt").forEach(element => element.addEventListener("click", removeOpt))
  }
}
);
function SearchUstensilsOptions(recipeBuild) {
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < recipeBuild[i].ustensils.length; i2++) {
      for (i3 = 0; i3 < ustOpt.length; i3++) {
        if (
          recipeBuild[i].ustensils[i2]
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") == ustOpt[i3].innerText
        ) {
          recipeUstensilsList.push(recipeBuild[i]);
        }
      }
    }
  }
  if (ustOpt.length > 1)
    for (i = 0; i < recipeUstensilsList.length; i++) {
      ustIn = 0;
      for (i2 = 0; i2 < recipeUstensilsList[i].ustensils.length; i2++) {
        for (i3 = 0; i3 < ustOpt.length; i3++) {
          if (
            recipeUstensilsList[i].ustensils[i2]
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") == ustOpt[i3].innerText
          ) {
            ustIn = ustIn + 1;
          }
        }
      }
      if (ustOpt.length == ustIn) {
      } else {
        recipeUstensilsList.splice(i, 1);
        i = i - 1;
      }
    }
  for (i = 0; i < recipeUstensilsList.length; i++) {
    if (
      recipeUstensilsList[i] == recipeUstensilsList[i - 1] ||
      recipeUstensilsList[i] == recipeUstensilsList[i + 1]
    ) {
      recipeUstensilsList.splice(i, 1);
      i = i - 1;
    }
  }
}

function removeOpt(event) {
  event.target.outerHTML = "";
  filtering()
}

function globalGoodListing() {
  goodListing("#ingredientList", ingOpt)
  goodListing("#applianceList", applOpt)
  goodListing("#ustensilList", ustOpt)
}

function goodListing(querySelector1, Opt) {
  let optionList = [];
  for (i2 = 0; i2 < document.querySelector(querySelector1).children.length; i2++) {
    optionList.push(document.querySelector(querySelector1).children[i2].innerText)
  }
  for (i = 0; i < Opt.length; i++) {
    index = optionList.indexOf(Opt[i].innerText);
    index = index - i;
    document.querySelector(querySelector1).children[index].outerHTML = "";
  }
}