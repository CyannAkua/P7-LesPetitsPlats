var allIngredientsList = "";
var allAppliancesList = "";
var allUstensilsList = "";

function allELListener() {
  ELListShown("#ingredientList", "#ingredientList .DropDownIcon",ingInputSearchField)
  ELListShown("#applianceList", "#applianceList .DropDownIcon",applInputSearchField)
  ELListShown("#ustensilList", "#ustensilList .DropDownIcon",ustInputSearchField)
}

function ELListShown(parameter1, parameter2,functionCall) {
  document.querySelector(parameter2).addEventListener("click", function () {
      if (document.querySelector(parameter1).className != "") {
        document.querySelector(parameter1).setAttribute("class", "");
      }
      else {
        document
          .querySelector(parameter1)
          .setAttribute("class", "active")   
      } 
    functionCall()
  })
}

let allIngredientsListTemp = [];
function allIngList(recipeBuild) {
  allIngredientsListTemp = [];
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < recipeBuild[i].ingredients.length; i2++) {
      allIngredientsListTemp.push(
        recipeBuild[i].ingredients[i2].ingredient
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    }
  }
  allIngredientsListTemp.join();
  allIngredientsListTemp.sort();
  for (i = 0; i < allIngredientsListTemp.length; i++) {
    if (
      allIngredientsListTemp[i] == allIngredientsListTemp[i - 1] ||
      allIngredientsListTemp[i] == allIngredientsListTemp[i + 1]
    ) {
      allIngredientsListTemp.splice(i, 1);
      i = i - 1;
    }
  }
  innerIngredientsFunction();
}
function innerIngredientsFunction() {
  allIngredientsList = "";
  let li = document.querySelectorAll("#ingredientList li")
  li.forEach(element => element.remove())
  for (i = 0; i < allIngredientsListTemp.length; i++) {
    const ingredientList = document.createElement("li")
    ingredientList.innerText = allIngredientsListTemp[i]
    document.querySelector("#ingredientList").appendChild(ingredientList)
  }
}

let allApplianceListTemp = [];
function allApplList(recipeBuild) {
  allApplianceListTemp = [];
  for (i = 0; i < recipeBuild.length; i++) {
    allApplianceListTemp.push(
      recipeBuild[i].appliance
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  }
  allApplianceListTemp.join();
  allApplianceListTemp.sort();
  for (i = 0; i < allApplianceListTemp.length; i++) {
    if (
      allApplianceListTemp[i] == allApplianceListTemp[i - 1] ||
      allApplianceListTemp[i] == allApplianceListTemp[i + 1]
    ) {
      allApplianceListTemp.splice(i, 1);
      i = i - 1;
    }
  }
  innerApplianceFunction();
}
function innerApplianceFunction() {
  allApplianceList = "";
  let li = document.querySelectorAll("#applianceList li")
  li.forEach(element => element.remove())
  for (i = 0; i < allApplianceListTemp.length; i++) {
    const applianceList = document.createElement("li")
    applianceList.innerText = allApplianceListTemp[i]
    document.querySelector("#applianceList").appendChild(applianceList)
}}

let allUstensilsListTemp = [];
function allUstList(recipeBuild) {
  allUstensilsListTemp = [];
  for (i = 0; i < recipeBuild.length; i++) {
    for (i2 = 0; i2 < recipeBuild[i].ustensils.length; i2++) {
      allUstensilsListTemp.push(
        recipeBuild[i].ustensils[i2]
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    }
  }
  allUstensilsListTemp.join();
  allUstensilsListTemp.sort();
  for (i = 0; i < allUstensilsListTemp.length; i++) {
    if (
      allUstensilsListTemp[i] == allUstensilsListTemp[i - 1] ||
      allUstensilsListTemp[i] == allUstensilsListTemp[i + 1]
    ) {
      allUstensilsListTemp.splice(i, 1);
      i = i - 1;
    }
  }
  innerUstensilsFunction();
}
function innerUstensilsFunction() {
  allUstensilsList = "";
  let li = document.querySelectorAll("#ustensilList li")
  li.forEach(element => element.remove())
  for (i = 0; i < allUstensilsListTemp.length; i++) {
    const applianceList = document.createElement("li")
    applianceList.innerText = allUstensilsListTemp[i]
    document.querySelector("#ustensilList").appendChild(applianceList);
  }
}

document.querySelector("#ingredientList").addEventListener("click", function (event) {
  ingInput = document.querySelector("#ingInput")
  if (
    event.target.tagName == "LI"
  ) {
    const selectOptMark = document.createElement("div");
    selectOptMark.textContent = event.target.innerText;
    document.querySelector(".selectListOption").appendChild(selectOptMark);
    selectOptMark.setAttribute("class", "IngOpt");
    innerIngredientsFunction();
  }

}
);
document.querySelector("#applianceList").addEventListener("click", function (event) {
  if (
    event.target.tagName == "LI"
  ) {
    const selectOptMark = document.createElement("div");
    selectOptMark.textContent = event.target.innerText;
    document.querySelector(".selectListOption").appendChild(selectOptMark);
    selectOptMark.setAttribute("class", "ApplOpt");
    innerApplianceFunction();
  }
}
);
document.querySelector("#ustensilList").addEventListener("click", function (event) {
  if (
    event.target.tagName == "LI"
  ) {
    const selectOptMark = document.createElement("div");
    selectOptMark.textContent = event.target.innerText;
    document.querySelector(".selectListOption").appendChild(selectOptMark);
    selectOptMark.setAttribute("class", "UstOpt");
    innerUstensilsFunction();
  }
}
)
function globalList(recipeBuild) {
  allIngList(recipeBuild)
  allApplList(recipeBuild)
  allUstList(recipeBuild)
  displayMenu(recipeBuild)
}
globalList(recipes)
allELListener()
