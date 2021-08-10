const mainContainer = document.querySelector(".main-container");
const flipperContainer = document.querySelector(".flipper-container");
const flipperNavBoxes = document.querySelectorAll(".flipper-nav-boxes");
const colorNameBox = document.querySelector(".color-name span");
const btn = document.querySelector(".btn");
const hexBox = document.querySelector(".hex-box");
let attrValue = 0 ;
flipperNavBoxes.forEach(function(item,index){
    item.addEventListener("click" , event => changeMode(event))
});
btn.addEventListener("click" , event => changeColor(event))

function changeMode(event){
    flipperNavBoxes.forEach( (item,index) => item.classList.remove("active") );
    const eventTarget = event.target ;
    attrValue = eventTarget.attributes.getNamedItem("data-mode").value;
    eventTarget.classList.add("active");
    attrValue == 1 ? hexBox.style.display = "block" : hexBox.style.display = "none" ;
}
function changeColor(event){
    const colorArr = ["blue" , "red" , "yellow" , "green" , "white"];
    let randomNumber = Math.floor(Math.random()*colorArr.length) ;
    let colorName ;
    while (randomNumber > colorArr.length){
        randomNumber = Math.floor(Math.random()*colorArr.length);
    }
    if(attrValue == 0){
        colorName = colorArr[randomNumber];
    }
    if(attrValue == 1){
        colorName = hexBox.querySelector(".input-hex").value;
    }
    flipperContainer.style.backgroundColor = colorName ;
    colorNameBox.innerText = colorName ;
    console.log(hexBox)
}


