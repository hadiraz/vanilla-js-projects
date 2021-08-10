const openBtn = document.querySelector(".btn");
const modalContainer = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-box");
openBtn.addEventListener("click" , event => openCloseModal(1));
closeBtn.addEventListener("click" , event => openCloseModal(0));
function openCloseModal(mode){
    if(mode === 1){
        modalContainer.style.display = "flex";
    }
    if(mode === 0){
        modalContainer.style.display = "none";
    }
}