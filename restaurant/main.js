const allItems = document.querySelectorAll(".menu-item");
const allFilters = document.querySelectorAll(".filter-items");
allFilters.forEach(
    (item,index) => item.addEventListener("click" , event => changeItems(event))
);
function changeItems(event){
    const eventText = event.target.innerText ;
       allFilters.forEach((item,index) => {
        item.classList.remove("active");
        if(item.innerText === eventText){
            item.classList.add("active");
        }
    });
    const allItemsSpread = [...allItems] ;
    let filteredItems = allItemsSpread.filter(input => filterItems(input , eventText));
    updateItems(filteredItems);
}
function filterItems(item , mode){
    const itemAttrVal = (item.attributes.getNamedItem("data-category").value).toLowerCase();
    const eventMode = mode.toLowerCase();
    if(itemAttrVal === eventMode || eventMode === "all"){
        return item
    }
}
function updateItems(items){
    const ItemsBoxContainer = document.querySelector(".menu-items-box");
    ItemsBoxContainer.innerHTML = "" ;
    items.forEach((item,index) => ItemsBoxContainer.append(item));
}