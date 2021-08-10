const sliderContainer = document.querySelectorAll(".slider-container");
console.log(sliderContainer)
const sliderBox = document.querySelector(".slider-box");
const leftBtn = document.querySelector(".btn.left");
const rightBtn = document.querySelector(".btn.right");
leftBtn.addEventListener("click" ,event => changeSliderItem(event,0));
rightBtn.addEventListener("click" ,event => changeSliderItem(event,1));
function changeSliderItem(event,changeMode){
    const item = document.querySelector(".slider-container.active");
    let itemIndex = 0 ;
    sliderContainer.forEach((item,index)=>{
        if(item.classList.contains("active")){
            itemIndex = index ;
        }
    });
    let changeTo = 0;
    if(changeMode === 1){
        changeTo = itemIndex + 1 ;
        if(changeTo >= sliderContainer.length){
            changeTo = 0 ;
            console.log("high")
        }
        
    }
    if(changeMode === 0){
        changeTo = itemIndex - 1 ;
        if(changeTo === -1){
            changeTo = (sliderContainer.length) - 1 ;
            console.log("low")
        }
}
    const deviceSize = sliderContainer[0].clientWidth ;
    sliderContainer[itemIndex].classList.remove("active");
    sliderContainer[changeTo].classList.add("active");
    sliderContainer.forEach((item,index) => item.style.right = `${changeTo*deviceSize}px`);
}
