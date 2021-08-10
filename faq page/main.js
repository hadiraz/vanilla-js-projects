const allBtn = document.querySelectorAll(".open-icon");
const allFaqParts = document.querySelectorAll(".faq-part");
const allFaqText = document.querySelectorAll(".faq-text");
document.addEventListener("DOMContentLoaded" , event => { allBtn.forEach( (item,index) => { 
    item.addEventListener("click" , event => openCloseBox(event));
        })
    }
);

function openCloseBox(event){
    const eventTarget = event.target ;
    const parentTag = eventTarget.offsetParent;
    const faqText = parentTag.querySelector(".faq-text");
    parentTag.classList.toggle("active");
    faqText.classList.toggle("active");
    allFaqParts.forEach((item,index) => {
        if(item !== parentTag){
            item.classList.remove("active")
        }
    });
    allFaqText.forEach((item,index) => {
        if(item !== faqText){
            item.classList.remove("active")
        }
    });
}