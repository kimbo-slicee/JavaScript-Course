    /*
* BOM [Browser Object Model]
* - Local Storage
* - setItem
* - getItem
* - removeItem
* - clear
* - key
* - Info
* - No Expiration
* - HTTP and HTTPS
* - Private Tab ---> when u use private tab when you close it tall the local storage Info be cleared
*/
const list=document.querySelectorAll("ul li");
const colorBoard=document.querySelector(".color-board")

if(localStorage.getItem("color")){// check if we have already color item in local storage
    colorBoard.style.backgroundColor=getColorItemFromLocalStorage();
    document.querySelector(`[data-color="${getColorItemFromLocalStorage()}"]`).classList.add("active");
}else {
    document.querySelector("[data-color='darkred']").classList.add("active");
    localStorage.clear();
}
list.forEach((ele)=>{
  ele.addEventListener("click",(e)=>{
            removeActive();
            e.currentTarget.classList.add("active");
            // change color-board bg color
            colorBoard.style.backgroundColor=e.currentTarget.dataset["color"]
            // setColor to Item Storage
            addToLocalStorage(e.currentTarget.dataset);
  });
 })
const removeActive=()=>list.forEach(ele=>ele.classList.remove("active"));
const addToLocalStorage=(data)=>localStorage.setItem("color",JSON.stringify(data));
function getColorItemFromLocalStorage(){ return JSON.parse(localStorage.getItem("color"))["color"]}




