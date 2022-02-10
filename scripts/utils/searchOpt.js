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
  goodListing()
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

document
  .querySelector("#ingredientList")
  .addEventListener("click", function (event) {
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Ingredients"
    ) {
      filtering();
      console.log(document.querySelectorAll(".IngOpt"))
      document.querySelectorAll(".IngOpt").forEach(element => element.addEventListener("click", removeOpt))
    }
  });
function SearchIngredientOptions(recipeBuild) {
  console.log(ingOpt[0].innerText);
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
          console.log("YES");
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
        console.log("Both In");
      } else {
        console.log("Not Both In");
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
  console.log(recipeIngredientsList);
}

document
  .querySelector("#applianceList")
  .addEventListener("click", function (event) {
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Appareils"
    ) {
      filtering();
    }
  });
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

  console.log(recipeApplianceList);
}

document
  .querySelector("#ustensilList")
  .addEventListener("click", function (event) {
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Ustensiles"
    ) {
      filtering();
    }
  });
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
        console.log("Ust in");
      } else {
        console.log("absolute fail");
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
  console.log(recipeUstensilsList);

}

function removeOpt(event) {
  console.log(event.target.innerHTML);
  event.target.outerHTML = "";
  filtering()
}

function goodListing() {
let ingredientList = []
  for (i2 = 0; i2 < document.querySelector("#ingredientList").children.length; i2++) {
    ingredientList.push(document.querySelector("#ingredientList").children[i2].innerText)
  }
  for (i = 0; i < ingOpt.length; i++) {
    index = ingredientList.indexOf(ingOpt[i].innerText);
    index = index - i
    document.querySelector("#ingredientList").children[index].outerHTML = ""
  }
let ApplianceList = []
  for (i2 = 0; i2 < document.querySelector("#applianceList").children.length; i2++) {
    ApplianceList.push(document.querySelector("#applianceList").children[i2].innerText)
  }
  for (i = 0; i < applOpt.length; i++) {
    index = ApplianceList.indexOf(ingOpt[i].innerText);
    index = index - i
    document.querySelector("#applianceList").children[index].outerHTML = ""
  }
let UstensilsList = []
  for (i2 = 0; i2 < document.querySelector("#ustensilList").children.length; i2++) {
    UstensilsList.push(document.querySelector("#ustensilList").children[i2].innerText)
  }
  for (i = 0; i < ustOpt.length; i++) {
    index = ingredUstensilsListientList.indexOf(ingOpt[i].innerText);
    index = index - i
    document.querySelector("#ustensilList").children[index].outerHTML = ""
  }
}