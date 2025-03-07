//your JS code here. If required.


let input = document.querySelector("form")


input.addEventListener("click",()=>{
   
    let select = document.querySelector("#colorSelect")
    if(select.selectedIndex==-1){
    alert("you haven't selected yet")
        return
    }
    
    select.remove(select.selectedIndex)
})

