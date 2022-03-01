var allIngredientsList = "";
var allAppliancesList = "";
var allUstensilsList = "";
addElListener()
function addElListener(){
document
  .querySelector("#ingredientList .DropDownIcon")
  .addEventListener("click", function () {
    if (document.querySelector("#ingredientList").className != "") {
      document.querySelector("#ingredientList").setAttribute("class", "");
    }
    else {
      document
        .querySelector("#ingredientList")
        .setAttribute("class", "active")   
    } 
      ingInputSearchField()
    }
  );

  document
  .querySelector("#applianceList .DropDownIcon")
  .addEventListener("click", function () {
    if (document.querySelector("#applianceList").className != "") {
      document.querySelector("#applianceList").setAttribute("class", "");
    }
    else {
      document
        .querySelector("#applianceList")
        .setAttribute("class", "active")   
    } 
    applInputSearchField()
    }
  );


  document
  .querySelector("#ustensilList .DropDownIcon")
  .addEventListener("click", function () {
    if (document.querySelector("#ustensilList").className != "") {
      document.querySelector("#ustensilList").setAttribute("class", "");
    }
    else {
      document
        .querySelector("#ustensilList")
        .setAttribute("class", "active")   
    } 
    ustInputSearchField()
    }
  );
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
  for(i=0; i< li.length ; i++){
  li[i].remove()}
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
  for(i=0; i< li.length ; i++){
    li[i].remove()}
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
  for(i=0; i< li.length ; i++){
    li[i].remove()}
  for (i = 0; i < allUstensilsListTemp.length; i++) {
    const applianceList = document.createElement("li")
    applianceList.innerText = allUstensilsListTemp[i]
    document.querySelector("#ustensilList").appendChild(applianceList);
  }
}

document
  .querySelector("#ingredientList")
  .addEventListener("click", function (event) {
    console.log(event.target.innerText.match(/(\n)/g));
    if (
      (event.target.innerHTML.indexOf("</li>") < 0 && event.target.innerHTML != "" &&
        event.target.innerText != "Ingredients" && event.target.innerHTML != ingInput.innerHTML)
    ){
      console.log("valid");
      const selectOptMark = document.createElement("div");
      selectOptMark.textContent = event.target.innerText;
      document.querySelector(".selectListOption").appendChild(selectOptMark);
      console.log(allIngredientsListTemp.indexOf(event.target.innerText));
      let index = allIngredientsListTemp.indexOf(event.target.innerText);
      selectOptMark.setAttribute("name", index);
      selectOptMark.setAttribute("class", "IngOpt");
      allIngredientsListTemp.splice(index, 1);
      console.log(allIngredientsListTemp);
      innerIngredientsFunction();
    }
  });
document
  .querySelector("#applianceList")
  .addEventListener("click", function (event) {
    console.log(event.target.innerText.match(/(\n)/g));
    if (
      (event.target.innerHTML.indexOf("</li>") < 0 && event.target.innerHTML != "" &&
        event.target.innerText != "Appareils" && event.target.innerHTML != ustInput.innerHTML)) {
      console.log("valid");
      const selectOptMark = document.createElement("div");
      selectOptMark.textContent = event.target.innerText;
      document.querySelector(".selectListOption").appendChild(selectOptMark);
      console.log(allApplianceListTemp.indexOf(event.target.innerText));
      let index = allApplianceListTemp.indexOf(event.target.innerText);
      selectOptMark.setAttribute("name", index);
      selectOptMark.setAttribute("class", "ApplOpt");
      allApplianceListTemp.splice(index, 1);
      console.log(allApplianceListTemp);
      innerApplianceFunction();
    }
  });
document
  .querySelector("#ustensilList")
  .addEventListener("click", function (event) {
    console.log(event.target.innerText.match(/(\n)/g));
    if (
      (event.target.innerHTML.indexOf("</li>") < 0 && event.target.innerHTML != "" &&
        event.target.innerText != "Ustensiles" && event.target.innerHTML != ustInput.innerHTML)
    ){
      console.log("valid");
      const selectOptMark = document.createElement("div");
      selectOptMark.textContent = event.target.innerText;
      document.querySelector(".selectListOption").appendChild(selectOptMark);
      console.log(allUstensilsListTemp.indexOf(event.target.innerText));
      let index = allUstensilsListTemp.indexOf(event.target.innerText);
      selectOptMark.setAttribute("name", index);
      selectOptMark.setAttribute("class", "UstOpt");
      allUstensilsListTemp.splice(index, 1);
      console.log(allUstensilsListTemp);
      innerUstensilsFunction();
    }
  });

allIngList(recipes);
allApplList(recipes);
allUstList(recipes);
