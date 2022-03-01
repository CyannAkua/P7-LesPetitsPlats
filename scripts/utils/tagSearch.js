var ingInput = document.querySelector("#ingInput");
var applInput = document.querySelector("#applInput");
var ustInput = document.querySelector("#ustInput");

function inputSearchField(setting1,setting2,settingID,settingPlaceholder){
    input = setting1
    if(input.innerText == setting2){
        input.innerHTML = `<input type=text id=${settingID} placeholder=${settingPlaceholder} onkeyup="filtering()">
        <img src="asset/icons/DropDown.svg" class="DropDownIcon" alt="drop down arrow">`;
    } else {
        input.innerHTML = setting2 + '<img src="asset/icons/DropDown.svg" class="DropDownIcon" alt="drop down arrow">';
    }
    allELListener();
}

function inputSearch(selection,inpfield){
    const sel = selection
    const input = inpfield
    if (input != "") {
        let optionList = [];
        sel.forEach(element => optionList.push(element.innerText))
        for (i = optionList.length - 1 ; i >= 0; i--) {
            if (optionList[i].search("\\b" + input) == -1) {
                sel.item(i).remove();
                optionList.splice(i, 1);
            }
        }
    }
}
