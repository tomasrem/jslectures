const ul = document.querySelector(".mygroup")
const myform = document.querySelector(".myform")
const trashIcon = document.getElementById("trash")



// take an ipnut and insert it into the list 
// fun addHtml = task => {
// html = `<li class="list-group-item myitem">${task}</li>`;
// ul.innerHTML += html;
// };

//console.log(ul.innerHTML)

// inserting into the html 
function addHtml(task) {
    html = `<li class="list-group-item myitem">${task}<i class="far fa-trash-alt delete" id="trash"></i></li>`;
    ul.innerHTML += html;
    
}


// submitting the form 
myform.addEventListener("submit" , e => {
    e.preventDefault()
    
    //console.log(myform.myinput.value)
    addHtml(myform.myinput.value.trim())
    myform.reset()
    myform.myinput.setAttribute("style","width:350")
});


ul.addEventListener("mouseover" , e => {
    e.target.classList.add("active")
    
});

ul.addEventListener("mouseout" , e => {
    e.target.classList.remove("active")
    
});



myform.myinput.addEventListener("click" , e => {
    e.target.setAttribute("style","")
    
});

ul.addEventListener("click" , e => {
    if(e.target.id === "trash" ){
        e.target.parentElement.remove()
    }
});


