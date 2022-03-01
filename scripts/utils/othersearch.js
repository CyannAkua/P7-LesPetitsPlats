var allIngredientsList = "";
var allAppliancesList = "";
var allUstensilsList = "";
let allIngredientsListTemp = [];
let allApplianceListTemp = [];
let allUstensilsListTemp = [];

function allELListener() {
  ELListShown("#ingredientList", "#ingredientList .DropDownIcon",0);
  ELListShown("#applianceList", "#applianceList .DropDownIcon",1);
  ELListShown("#ustensilList", "#ustensilList .DropDownIcon",2);
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
    if(functionCall == 0){
      inputSearchField(ingInput,"Ingredients","ingInputField","Rechercher un ingredient")
    }
    if(functionCall == 1){
      inputSearchField(applInput,"Appareils","applInputField","Rechercher un appareil")
    }
    if(functionCall == 2){
      inputSearchField(ustInput,"Ustensiles","ustInputField","Rechercher un ustensile")
    }
  })
}

function allIngList(recipeBuild) {
  allIngredientsListTemp = [];
  recipeBuild.forEach(recipe => recipe.ingredients.forEach(element => allIngredientsListTemp.push(element.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))))
  allIngredientsListTemp.join();
  allIngredientsListTemp.sort();
  for (i = 0; i < allIngredientsListTemp.length; i++) {
    if (
      allIngredientsListTemp[i] == allIngredientsListTemp[i - 1] ||
      allIngredientsListTemp[i] == allIngredientsListTemp[i + 1]
    ) {
      allIngredientsListTemp.splice(i, 1);
      i--;
    }
  }
  innerIngredientsFunction();
}
function innerIngredientsFunction() {
  allIngredientsList = "";
  let li = document.querySelectorAll("#ingredientList li");
  li.forEach(element => element.remove())
  allIngredientsListTemp.forEach(function(element){ 
    const ingredientList = document.createElement("li");
    ingredientList.innerText = element;
    document.querySelector("#ingredientList").appendChild(ingredientList);});
}

function allApplList(recipeBuild) {
  allApplianceListTemp = [];
  recipeBuild.forEach(recipe => allApplianceListTemp.push(recipe.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
  allApplianceListTemp.join();
  allApplianceListTemp.sort();
  for (i = 0; i < allApplianceListTemp.length; i++) {
    if (
      allApplianceListTemp[i] == allApplianceListTemp[i - 1] ||
      allApplianceListTemp[i] == allApplianceListTemp[i + 1]
    ) {
      allApplianceListTemp.splice(i, 1);
      i--;
    }
  }
  innerApplianceFunction();
}
function innerApplianceFunction() {
  allApplianceList = "";
  let li = document.querySelectorAll("#applianceList li");
  li.forEach(element => element.remove());
  allApplianceListTemp.forEach(function(element){ 
    const applianceList = document.createElement("li");
    applianceList.innerText = element;
    document.querySelector("#applianceList").appendChild(applianceList)});
}

function allUstList(recipeBuild) {
  allUstensilsListTemp = [];
  recipeBuild.forEach(recipe => recipe.ustensils.forEach(element => allUstensilsListTemp.push(element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))));
  allUstensilsListTemp.join();
  allUstensilsListTemp.sort();
  for (i = 0; i < allUstensilsListTemp.length; i++) {
    if (
      allUstensilsListTemp[i] == allUstensilsListTemp[i - 1] ||
      allUstensilsListTemp[i] == allUstensilsListTemp[i + 1]
    ) {
      allUstensilsListTemp.splice(i, 1);
      i--;
    }
  }
  innerUstensilsFunction();
}
function innerUstensilsFunction() {
  allUstensilsList = "";
  let li = document.querySelectorAll("#ustensilList li");
  li.forEach(element => element.remove());
  allUstensilsListTemp.forEach(function(element){ 
    const applianceList = document.createElement("li");
  applianceList.innerText = element;
  document.querySelector("#ustensilList").appendChild(applianceList);})
}

document.querySelector("#ingredientList").addEventListener("click", function (event) {
  ingInput = document.querySelector("#ingInput");
  if (event.target.tagName == "LI") {
    const selectOptMark = document.createElement("div");
    selectOptMark.textContent = event.target.innerText;
    document.querySelector(".selectListOption").appendChild(selectOptMark);
    selectOptMark.setAttribute("class", "IngOpt");
    innerIngredientsFunction();
  }
});
document.querySelector("#applianceList").addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    const selectOptMark = document.createElement("div");
    selectOptMark.textContent = event.target.innerText;
    document.querySelector(".selectListOption").appendChild(selectOptMark);
    selectOptMark.setAttribute("class", "ApplOpt");
    innerApplianceFunction();
  }
});
document.querySelector("#ustensilList").addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    const selectOptMark = document.createElement("div");
    selectOptMark.textContent = event.target.innerText;
    document.querySelector(".selectListOption").appendChild(selectOptMark);
    selectOptMark.setAttribute("class", "UstOpt");
    innerUstensilsFunction();
  }
});
function globalList(recipeBuild) {
  allIngList(recipeBuild);
  allApplList(recipeBuild);
  allUstList(recipeBuild);
  displayMenu(recipeBuild);
}
globalList(recipes);
allELListener();
