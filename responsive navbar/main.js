const humberMenu = document.querySelector(".humber-bars");
const closeHumber = document.querySelector(".close-nav");

humberMenu.addEventListener("click" , event => openCloseHumber(1));
closeHumber.addEventListener("click" , event => openCloseHumber(0));

function openCloseHumber(mode){
    const navResponsiveContainer = document.querySelector(".responsive-nav-part");
    console.log("hi")
    if(mode===1){
        navResponsiveContainer.style.right = "0px";
    }
    if(mode===0){
        navResponsiveContainer.style.right = "-100vw";
    }
}

