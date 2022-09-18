const para = document.querySelector("p"); // we use document each time we want to do something with the web page
// it scans the document from top to bootom and pick the first one matching

console.log(para);

const error = document.querySelector(".error"); // selecting by class
console.log(error);

const error_div = document.querySelector("div.error");
console.log(error_div);
// go to Elements/copy/selector to get css pointer :D
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs); // this is not an array but nodelist 
console.log(paragraphs[1])

const par = document.querySelector("p");
console.log(par.innerText);
//par.innerText = "Whats up dogg"; // changing text on the tag 
//par.innerText += "Whats up dogg";

// const paraas = document.querySelectorAll("p");

// paraas.forEach(para => { // logging each tag text to console
//     console.log(para.innerText);
//     para.innerText += " new text babyy";  // adding text to each one 
// });

// get a refference to the node 

const content = document.querySelector(".content");

console.log(content.innerHTML);

content.innerHTML = "<h3>This is sparta </h3>"

const people = ["mario","luigy","joshi"];

people.forEach(person => {
    content.innerHTML += `<p class = "btn btn-lg btn-danger m-3"> ${person}</p>`;
});


const link = document.querySelector("a");
console.log(link.getAttribute("href")); // this is how we get an attribute of html element 

link.setAttribute("href","www.somelink.com"); // this is how we change an attribute 
link.innerText = "Somelink textt";

const msg = document.querySelector("div.error");
console.log(msg.getAttribute("class"));
msg.setAttribute("class","success");

// changing css property, just one without overwritting everything else
const dom = document.querySelector("h1");

dom.style.color = "blue";
console.log(dom.style)  // all the css propereties possible to the element, just pick the one you want to change
dom.style.padding = "50px";

// if we have ex. font-size in javascrypt we vrite it as fontSize , without the - shit 
dom.style.fontSize = "40";

// adding removing classes from html elements 
console.log(dom.classList);
dom.classList.add("niggy"); // adding class 
dom.classList.remove("btn"); // removing class

const taggs =  document.querySelectorAll("div.tagggs p")
console.log(taggs)

taggs.forEach(para => {
    if(para.innerText.includes("error")){para.classList.add("error")}


    else if (para.innerText.includes("succes")){   // inner text gets us visible text but .textContent all of the text (including <span class="display:none"></span> and so on :D)
        para.classList.add("success")
    }
});

dom.classList.toggle("testik");  // adds the class
dom.classList.toggle("testik");  // when we call it again it removes the class


///////////// 009
/////adding class to each child of parent element
const article = document.querySelector("article");

console.log(article.children); // we cant do methods for each etc on html collection 

console.log(Array.from(article.children)); // we can do that on array tho 

Array.from(article.children).forEach(child=>{
    child.classList.add("article-element")
})

///// 



const title = document.querySelector("h2");   // getting parent element from the child 
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling); // previous next etcc
//

