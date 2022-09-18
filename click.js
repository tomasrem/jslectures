const button = document.querySelector("button");
const button2 = document.querySelector(".btn2")
let ul = document.querySelector("ul")


button.addEventListener("click", () =>{  // adding event listener to element-->> what event and what to do 
    console.log("you clicked me boyy")
});

const items = document.querySelectorAll("li");

// items.forEach(item => {
//     item.addEventListener("click" , (event) => {  // event is object created by the browser to each button we clicked
//         //console.log("ittem clicked")  
//         // console.log(event)
//         // console.log(event.target)
//         console.log("event on li");
//         //event.stopPropagation(); // stopping the event bubbling up 
//         if(event.target.style.textDecoration == "line-through"){
//             event.target.style.textDecoration = ""
//         }
//         else{
//             event.target.style.textDecoration = "line-through"
//         }
        
//     } )
// });

items.forEach(item => {
    item.setAttribute("class" , "btn btn-outline-dark")
})

button.addEventListener("click", () => {
    items.forEach(item => {
        if (item.style.textDecoration == "line-through"){
            item.remove()
        }
    })
});

button2.addEventListener("click" , () => {
    // ul.innerHTML += "<li>new shitt</li>"
    const li = document.createElement("li"); // just empty tag sitting somewhere in the dom 
    li.textContent = "something new to do "; // adding text to it 
    li.setAttribute("class" , "btn btn-outline-dark");
    //ul.append(li); // inserting it to the DOM 
    ul.prepend(li)
});





///  event bubbling
// when we have event in child element it bubbles up to parent and than parent etc... we can stop it by .stopPropagation() method

ul.addEventListener("click" , e => {
    console.log("event in the ul")
    console.log(e.target)
    if(e.target.tagName === "LI"){
        if(e.target.style.textDecoration == "line-through"){
            e.target.style.textDecoration = ""
        }
        else{
            e.target.style.textDecoration = "line-through"
        }

    }
})