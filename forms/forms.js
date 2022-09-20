const form = document.querySelector(".signup-form") // we attatch to the signup form not the button 
// cuz we are submitting form not the button 


const username = document.querySelector("#exampleInputEmail1") // querrying by the id 


var feedbackdiv = document.querySelector("#feedback")
form.addEventListener("submit" , e => {
    e.preventDefault();// default action of the borwser form is to reload the page and we are stopping it
    //1. way of doing it console.log(username.value)
    console.log(form.exampleInputEmail1.value)

    let username = form.exampleInputEmail1.value;
    const usernamePattern = /[a-zA-Z]{6,12}/;
    if(usernamePattern.test(username)){
        // feedback good info boyyyyy
        feedbackdiv.textContent = "this username is valid my nigga"

    } else {
        //feedback different info 
        feedbackdiv.textContent = "Username must be between 6 and 12 characters friend"
    }
                    
    
    // we can do it like this , dot notation looks for name or id attribute and than passes it in 
} ) // submit is any way of submit like enter etc not just click as a button 
 


/// testing regex
const user = "@@@@@dfddddddddddddddddddddddddddddddlooooooooooooooooooowwwwwwwwwwwwporrr"
const pattern = /[a-z]{6,}$/

// let result = pattern.test(user)        // thest is method for testing regex and returns boolean
// console.log(result)

// if(result){
//     console.log("regex passed nigga")
// }
// else {
//     console.log("uff fuck you bro ")
// }

let result = user.search(pattern)     //these is the opposite checking a pattern in string 
// returns integer as result with its position
console.log(result)




// live real time feedback and validation with keyboard listener
const usernamePattern = /[a-zA-Z]{6,12}/;



form.exampleInputEmail1.addEventListener("keyup" , e => {  // everytime we do keyup it tests it 
    //console.log(e.target.value, form.exampleInputEmail1.value)
    if(usernamePattern.test(e.target.value)){
        e.target.setAttribute("class" , "form-control is-valid")
    } else {
        e.target.setAttribute("class" , "form-control is-invalid")
    }
})

