const btnSmallMenu = document.querySelector(".btn-small-menu")
const smallMenu = document.querySelector(".small-menu")
const btnMenuItem = document.querySelectorAll(".item")
let menuActivated = false


btnSmallMenu.addEventListener("click",()=>{
    if(menuActivated == false){
    smallMenu.classList.add("open")
    btnSmallMenu.src = "./img/exit.svg";
    smallMenu.style.display = "flex";
    menuActivated = true;
    }else{
        smallMenu.classList.remove("open")
        smallMenu.style.display = "none";
        menuActivated = false;
        btnSmallMenu.src = "./img/hamburguer.svg";
    }
})

btnMenuItem.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        smallMenu.style.display = "none";
        menuActivated = false;
        btnSmallMenu.src = "./img/hamburguer.svg";
    })
})

