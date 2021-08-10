const container = document.querySelector(".container");
const showResult = document.querySelector(".show-result");
const upBtn = document.querySelector(".btn.up");
const downBtn = document.querySelector(".btn.down");
const resetBtn = document.querySelector(".btn.reset");

upBtn.addEventListener("click" , event => changeNumber(event , "up"));
downBtn.addEventListener("click" , event => changeNumber(event , "down"));
resetBtn.addEventListener("click" , event => changeNumber(event , "reset"));
(function (){
    const local = localStorage.getItem("number");
    if(local === null){
        localStorage.setItem("number" , JSON.stringify("0"));
    }else{
        showResult.innerText = JSON.parse(local);
    }
})()
function changeNumber(event , mode){
    let result = Number(showResult.innerText) ;
    if(mode === "up"){
        result ++ ;
        showResult.innerText = result ;
    }
    if(mode === "down" && result !== 0){
        result -- ;
        showResult.innerText = result ;
    }
    if(mode === "reset"){
        const confirmCheck = confirm("Are you sure wants to delete the data ?");
        if(confirmCheck === true){
          result = 0 ;
        showResult.innerText = result ;  
        }   
    }
    localStorage.setItem("number" , JSON.stringify(showResult.innerText));
}