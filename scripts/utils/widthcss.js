function widthcss(){
    let sel= document.querySelector("#ingredientList")
    let list = document.querySelectorAll("#ingredientList li")
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
widthcss()