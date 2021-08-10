const tabs = [...document.querySelectorAll(".title-items")];
const textBox = document.querySelectorAll(".text-box-item");
const images = document.querySelectorAll(".image-box img");
window.addEventListener("load" ,event => addActiveClass(0));
tabs.forEach(
    (item,index) => item.addEventListener("click" , event => changeTabs(event))
);

function changeTabs(event){
    const eventTarget = event.target ;
    const indexNumber = tabs.indexOf(eventTarget);
    tabs.forEach(
        item => item.classList.remove("active")
    )
    textBox.forEach(
        item => item.classList.remove("active")
    )
    images.forEach(
        item => item.classList.remove("active")
    )
        addActiveClass(indexNumber);
}

function addActiveClass(index){
    console.log(textBox[index])
    const tabText = tabs[index].innerText ;
    textBox[index].querySelector("h3").innerText = tabText ;
    textBox[index].classList.add("active");
    images[index].classList.add("active");
    tabs[index].classList.add("active");
}