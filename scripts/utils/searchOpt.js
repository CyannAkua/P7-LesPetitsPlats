var searchOpt = "";
let recipeOptList = [];
let recipeOptList2 = [];
let recipeOptList3 = [];

let ingOpt = [];
let isIn = 0;
let ustIn = 0;
document
  .querySelector("#ingredientList")
  .addEventListener("click", function (event) {
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Ingredients"
    ) {if(searchBar.value.length > 2){
      SearchIngredientOptions(recipeList)
    }
     else{ SearchIngredientOptions(recipes);
    }}
  });
function SearchIngredientOptions(recipeBuild) {
  ingOpt = document.querySelectorAll(".IngOpt");
  console.log(ingOpt[0].innerText);
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < recipeBuild[i].ingredients.length; i2++) {
      for (i3 = 0; i3 < ingOpt.length; i3++) {
        if (
          recipeBuild[i].ingredients[i2].ingredient
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            == ingOpt[i3].innerText
        ) {
          recipeOptList.push(recipeBuild[i]);
          console.log("YES");
        }
      }
    }
  }
  if (ingOpt.length > 1) {
    for (i = 0; i < recipeOptList.length; i++) {
      isIn = 0;
      for (i2 = 0; i2 < recipeOptList[i].ingredients.length; i2++) {
        for (i3 = 0; i3 < ingOpt.length; i3++) {
          if (
            recipeOptList[i].ingredients[i2].ingredient
              .toLowerCase().normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              == ingOpt[i3].innerText
          ) {
            isIn = isIn + 1;
          }
        }
      }
      if (ingOpt.length == isIn) {
        console.log("Both In");
      } else {
        console.log("Not Both In");
        recipeOptList.splice(i, 1);
        i = i - 1;
      }
    }
  }
  for (i = 0; i < recipeOptList.length; i++) {
    if (recipeOptList[i] == recipeOptList[i - 1]||recipeOptList[i] == recipeOptList[i + 1]) {
      recipeOptList.splice(i, 1);
      i = i-1
    }
  }
  console.log(recipeOptList);
  displayMenu(recipeOptList);
}

document
  .querySelector("#applianceList")
  .addEventListener("click", function (event) {
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Appareils"
    ) {
      SearchApplianceOptions(recipes);
    }
  });
function SearchApplianceOptions(recipeBuild) {
  applOpt = document.querySelectorAll(".ApplOpt");
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < applOpt.length; i2++) {
      if (
        recipeBuild[i].appliance
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          == applOpt[i2].innerText
      ) {
        recipeOptList2.push(recipeBuild[i]);
      }
    }
  }
  for (i = 0; i < recipeOptList2.length; i++) {
    if (recipeOptList2[i] == recipeOptList2[i - 1]) {
      recipeOptList2.splice(i, 1);
    }
    if (recipeOptList2[i] == recipeOptList2[i + 1]) {
      recipeOptList2.splice(i, 1);
    }
  }
  displayMenu(recipeOptList2);
  console.log(recipeOptList2);
}

document
  .querySelector("#ustensilList")
  .addEventListener("click", function (event) {
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Ustensiles"
    ) {
      SearchUstensilsOptions(recipes);
    }
  });
function SearchUstensilsOptions(recipeBuild) {
  ustOpt = document.querySelectorAll(".UstOpt");
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < recipeBuild[i].ustensils.length; i2++) {
      for (i3 = 0; i3 < ustOpt.length; i3++) {
        if (
          recipeBuild[i].ustensils[i2]
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            == ustOpt[i3].innerText
        ) {
          recipeOptList3.push(recipeBuild[i]);
        }
      }
    }
  }
  if (ustOpt.length > 1)
    for (i = 0; i < recipeOptList3.length; i++) {
      ustIn = 0;
      for (i2 = 0; i2 < recipeOptList3[i].ustensils.length; i2++) {
        for (i3 = 0; i3 < ustOpt.length; i3++) {
          if (
            recipeOptList3[i].ustensils[i2]
              .toLowerCase().normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              == ustOpt[i3].innerText
          ) {
            ustIn = ustIn + 1;
          }
        }
      }
      if (ustOpt.length == ustIn) {
        console.log("Ust in");
      } else {
        console.log("absolute fail");
        recipeOptList3.splice(i, 1);
        i = i - 1;
      }
    }
    for (i = 0; i < recipeOptList3.length; i++) {
      if (recipeOptList3[i] == recipeOptList3[i - 1]||recipeOptList3[i] == recipeOptList3[i + 1]) {
        recipeOptList3.splice(i, 1);
        i = i-1
      }
    }
    console.log(recipeOptList3)
  displayMenu(recipeOptList3);
}
