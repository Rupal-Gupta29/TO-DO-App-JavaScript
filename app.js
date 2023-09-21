let addTask = document.addTaskForm;
let itemsDiv = document.getElementById("items-div");
let searchFrm=document.searchForm;
let searchInput=searchFrm.searchInp;

addTask.addEventListener('submit', (e) => {
    e.preventDefault();
    let inp = addTask.taskName;
    let task = inp.value;
    if (task !== "") {
        let str = `<div class="todo-item">
        <span>${task}</span>
        <i class="fa-solid fa-trash-can mytrash"></i>
        </div>`;
        itemsDiv.innerHTML += str;
        inp.value = ""
    }
})

itemsDiv.addEventListener('click',(e)=>{
    if(e.target.nodeName==='I'){
        e.target.parentElement.remove();
    }
})


searchInput.addEventListener('keyup',()=>{
    let val=searchInput.value.toLowerCase();
    let allItems=document.getElementsByClassName("todo-item");
    for(let i of allItems){
        if(i.innerText.toLowerCase().includes(val)===false){
            i.classList.add("filtered");
        }
        else{
            i.classList.remove("filtered");
        }
    }
})