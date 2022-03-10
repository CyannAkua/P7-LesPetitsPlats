function widthcss(sel1,list1){
    let sel= document.querySelector(sel1)
    let list = document.querySelectorAll(list1)
    if(list.length < 27){
    sel.style.width = "173px"
    }
    if(list.length >= 27){
        sel.style.width = "323px"
        }
    if(list.length >= 54){
    sel.style.width = "473px"
    }
    if(list.length >= 81){
        sel.style.width = "623px"
        }
    if(list.length >= 108){
            sel.style.width = "773px"
        }
}
widthcss("#ingredientList","#ingredientList li")
widthcss("#applianceList","#applianceList li")
widthcss("#ustensilList","#ustensilList li")