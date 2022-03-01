var ingInput = document.querySelector("#ingInput")
var applInput = document.querySelector("#applInput")
var ustInput = document.querySelector("#ustInput")

function inputSearchField(setting1,setting2,settingID,settingPlaceholder){
    input = setting1
    if(input.innerText == setting2){
        input.innerHTML = `<input type=text id=${settingID} placeholder=${settingPlaceholder} onkeyup="filtering()">
        <img src="asset/icons/DropDown.svg" class="DropDownIcon" alt="drop down arrow">`;
    } else {
        input.innerHTML = setting2 + '<img src="asset/icons/DropDown.svg" class="DropDownIcon" alt="drop down arrow">';
    }
    allELListener()
}

function inputSearch(selection,inpfield){
    const sel = selection
    const input = inpfield
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
