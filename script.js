//your JS code here. If required.


let input = document.querySelector('input[type="button"]')
    let colorSelect = document.querySelector("#colorSelect")


input.addEventListener("click",()=>{
   
    if(colorSelect.selectedIndex!=-1){
		
    colorSelect.remove(colorSelect.selectedIndex)
    
	}
    
})

