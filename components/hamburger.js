const hamburger = document.querySelector(".hamburger-wrapper").addEventListener("click", toggleClose);
const icon = document.querySelector(".icon");
var menuState = true;


function toggleClose() {
    icon.classList.toggle("close");
    document.querySelector(".dropdownMenu").classList.toggle("closeMenu")
   if(icon.classList.contains("close")) {
        document.getElementById("menu-text").innerHTML = "CLOSE"
       
    } else {
        document.getElementById("menu-text").innerHTML = "MENU" 
   }
    menuState = false;
    }
    
function changeMenuText() {
    menuState
    if (menuState) {
        document.getElementById("menu-text").innerHTML = "OPEN"
        if (icon.classList.contains("close")) {
            document.getElementById("menu-text").innerHTML = "CLOSE";
            menuState = false;
        }
    }    
}

function undoMenuTextChange() {
    if(menuState) {
        document.getElementById("menu-text").innerHTML = "MENU"
    }
}