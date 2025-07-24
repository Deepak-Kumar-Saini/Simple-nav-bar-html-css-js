const menuList = document.querySelector(".menu-list");
const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click",()=>{
    menuList.classList.toggle("menu-list")
})

