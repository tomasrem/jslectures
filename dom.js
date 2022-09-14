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

