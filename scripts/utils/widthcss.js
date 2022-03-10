function widthcss(){
    let sel= document.querySelector("#ingredientList")
    let list = document.querySelectorAll("#ingredientList li")
    if(list.length < 28){
    sel.style.width = "173px"
    }
    if(list.length >= 28){
        sel.style.width = "323px"
        }
    if(list.length >= 56){
    sel.style.width = "473px"
    }
    if(list.length >= 84){
        sel.style.width = "623px"
        }
    if(list.length >= 112){
            sel.style.width = "773px"
        }
}
widthcss()