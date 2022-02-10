var allIngredientsList = "";
var allAppliancesList = "";
var allUstensilsList = "";



document
  .querySelector("#ingredientList")
  .addEventListener("click", function () {
    const listIng = document.querySelectorAll("#ingredientList li");

    for (i = 0; i < listIng.length; i++) {
      if (listIng[i].style.display != "") {
        listIng[i].style.display = "";
        document.querySelector("#ingredientList").setAttribute("class", "");
      } else {
        listIng[i].style.display = "block";
        document
          .querySelector("#ingredientList")
          .setAttribute("class", "active");
      }
    }
  });

document.querySelector("#applianceList").addEventListener("click", function () {
  const listIng = document.querySelectorAll("#applianceList li");

  for (i = 0; i < listIng.length; i++) {
    if (listIng[i].style.display != "") {
      listIng[i].style.display = "";
      document.querySelector("#applianceList").setAttribute("class", "");
    } else {
      listIng[i].style.display = "block";
      document.querySelector("#applianceList").setAttribute("class", "active");
    }
  }
});

document.querySelector("#ustensilList").addEventListener("click", function () {
  const listIng = document.querySelectorAll("#ustensilList li");

  for (i = 0; i < listIng.length; i++) {
    if (listIng[i].style.display != "") {
      listIng[i].style.display = "";
      document.querySelector("#ustensilList").setAttribute("class", "");
    } else {
      listIng[i].style.display = "block";
      document.querySelector("#ustensilList").setAttribute("class", "active");
    }
  }
});

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
  for (i = 0; i < allIngredientsListTemp.length; i++) {
    allIngredientsList += "<li>" + allIngredientsListTemp[i] + "</li>";
  }
  document.querySelector("#ingredientList").innerHTML =
    "Ingredients" + allIngredientsList;
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
  allAppliancesList = "";
  for (i = 0; i < allApplianceListTemp.length; i++) {
    allAppliancesList += "<li>" + allApplianceListTemp[i] + "</li>";
  }
  document.querySelector("#applianceList").innerHTML =
    "Appareils" + allAppliancesList;
}
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
  for (i = 0; i < allUstensilsListTemp.length; i++) {
    allUstensilsList += "<li>" + allUstensilsListTemp[i] + "</li>";
  }
  document.querySelector("#ustensilList").innerHTML =
    "Ustensiles" + allUstensilsList;
}

document
  .querySelector("#ingredientList")
  .addEventListener("click", function (event) {
    console.log(event.target.innerText.match(/(\n)/g));
    if (
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Ingredients"
    ) {
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
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Appareils"
    ) {
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
      event.target.innerText.match(/(\n)/g) == null &&
      event.target.innerText != "Ustensiles"
    ) {
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
