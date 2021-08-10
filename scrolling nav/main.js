const navBar = document.querySelector("nav");
const header = document.querySelector("header");
const html = document.querySelector("html");
const humberBtn = document.querySelector("nav .fa-bars");
const closeNavBtn = document.querySelector("nav .fa-times");
const scrollerContainer = document.querySelector(".scroll-container");
const scrollerSpan = document.querySelector(".scroll-container span");
const dateObj = new Date ;
const fullYear = dateObj.getFullYear() ;
const footerYear = document.querySelector("footer span");
const navItems = document.querySelector(".nav-right-item-box");
const navRightSide = document.querySelector(".nav-right-side") ;
const clientScreenHeight = Number(document.scrollingElement.clientHeight) ;
window.addEventListener("scroll" , event => checkChange());
humberBtn.addEventListener("click" , event => openCloseNavigation(1));
closeNavBtn.addEventListener("click" , event => openCloseNavigation(0));
window.addEventListener("load" ,event =>  setScroll());

//** set scroll custom */
function setScroll(){
    scrollerContainer.style.height = `${ Number(clientScreenHeight.toFixed(5)) }px`;
    changeScroll();
}

//** change scroll top */
function changeScroll(){
    let htmlTopValue = -1 * (html.getBoundingClientRect().y) ;
    const documentHeight = html.getBoundingClientRect().height;
    const ratio = (htmlTopValue / documentHeight).toFixed(2);
    let scrollTop = clientScreenHeight * ratio ;
    const top_plus_screen = Number((htmlTopValue + clientScreenHeight).toFixed(0)) ; 
    if(top_plus_screen >= Number(documentHeight.toFixed(0))){
        console.log(htmlTopValue  , documentHeight.toFixed(0));
        scrollTop = clientScreenHeight - scrollerSpan.getBoundingClientRect().height ;
        htmlTopValue = Number((documentHeight.toFixed(0) - clientScreenHeight.toFixed(0))) - 3 ;
    }

    scrollerContainer.style.top = `${htmlTopValue}px` ;
    scrollerSpan.style.top = `${scrollTop}px` ;
}

//** check scroll change for nav bar */
function checkChange(){
    changeScroll();
    const nav_Y_value = html.getBoundingClientRect().top;
    if(nav_Y_value <= -50){
        navBar.classList.add("active");
    }else if(nav_Y_value >= -50  && !(navItems.classList.contains("active")) ){
        navBar.classList.remove("active");
    }
}

//** navigation bar */
function openCloseNavigation(mode){
    navItems.classList.toggle("active");
    if(mode === 1){
        if(navItems.classList.contains("active")){
            navBar.classList.add("active");
            navRightSide.classList.add("close");
        }else{
            checkChange()
        }
    }
    if(mode === 0){
            navBar.classList.remove("active");
            navRightSide.classList.remove("close");
            checkChange()
        }
}

// *** set year in the footer dynamic
footerYear.innerText = fullYear ;
