var ingInput = document.querySelector("#ingInput")
var applInput = document.querySelector("#applInput")
var ustInput = document.querySelector("#ustInput")

function ingInputSearchField() {
    ingInput = document.querySelector("#ingInput");
    if (ingInput.innerText == "Ingredients") {
        ingInput.innerHTML =
            '<input type=text id=ingInputField placeholder="Search an Ingredient" onkeyup="ingInputSearchEL()">' +
            '<img src="asset/icons/DropDown.svg" class="DropDownIcon">';
    } else {
        ingInput.innerHTML =
            "Ingredients" +
            '<img src="asset/icons/DropDown.svg" class="DropDownIcon">';
    }
    addElListener()
}
function applInputSearchField() {
    applInput = document.querySelector("#applInput");
    if (applInput.innerText == "Appareils") {
        applInput.innerHTML =
            '<input type=text id=applInputField placeholder="Search an Appliance" onkeyup="applInputSearchEL()">' +
            '<img src="asset/icons/DropDown.svg" class="DropDownIcon">';
    } else {
        applInput.innerHTML =
            "Appareils" +
            '<img src="asset/icons/DropDown.svg" class="DropDownIcon">';
    }
    addElListener()
}

function ustInputSearchField() {
    ustInput = document.querySelector("#ustInput");
    if (ustInput.innerText == "Ustensiles") {
        ustInput.innerHTML =
            '<input type=text id=ustInputField placeholder="Search an Unstensil" onkeyup="ustInputSearchEL()">' +
            '<img src="asset/icons/DropDown.svg" class="DropDownIcon">';
    } else {
        ustInput.innerHTML =
            "Ustensiles" +
            '<img src="asset/icons/DropDown.svg" class="DropDownIcon">';
    }
    addElListener()
}
function ingInputSearchEL() {
    filtering()
}
function ingInputSearch() {
    const sel = document.querySelectorAll("#ingredientList li");
    const input = document.querySelector("#ingInputField").value.toLowerCase();
    if (input.match(/^\s/) == null && input != "") {
        let optionList = [];
        for (i = 0; i < sel.length; i++) {
            optionList.push(sel[i].innerText);
        }
        let index = 0
        for (i2 = 0; i2 < optionList.length; i2++) {
            if (optionList[i2].search("\\b" + input) == -1) {
                sel.item(index).remove();
                optionList.splice(i2, 1)
                i2--
            }
            index++
        }
    }
}

function applInputSearchEL() {
    filtering()
}
function applInputSearch() {
    const sel = document.querySelectorAll("#applianceList li");
    const input = document.querySelector("#applInputField").value.toLowerCase();
    if (input.match(/^\s/) == null && input != "") {
        let optionList = [];
        for (i = 0; i < sel.length; i++) {
            optionList.push(sel[i].innerText);
        }
        let index = 0
        for (i2 = 0; i2 < optionList.length; i2++) {
            if (optionList[i2].search("\\b" + input) == -1) {
                sel.item(index).remove();
                optionList.splice(i2, 1)
                i2--
            }
            index++
        }
    }
}

function ustInputSearchEL() {
    filtering()
}
function ustInputSearch() {
    const sel = document.querySelectorAll("#ustensilList li");
    const input = document.querySelector("#ustInputField").value.toLowerCase();
    if (input.match(/^\s/) == null && input != "") {
        let optionList = [];
        for (i = 0; i < sel.length; i++) {
            optionList.push(sel[i].innerText);
        }
        let index = 0
        for (i2 = 0; i2 < optionList.length; i2++) {
            if (optionList[i2].search("\\b" + input) == -1) {
                sel.item(index).remove();
                optionList.splice(i2, 1)
                i2--
            }
            index++
        }
    }
}