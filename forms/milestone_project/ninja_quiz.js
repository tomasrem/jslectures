const correctAnswers = ["B","B","A","B"];

const form = document.querySelector(".quiz-form")

const results = document.querySelector("#score")
const resultspan = document.querySelector("#scorespan")

form.addEventListener("submit" , e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value , form.q4.value]

    // check answers 
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    console.log(score);
   
    
    scrollTo(0,0); // window object eg window.scrollTo() but window is everywhere so no need to write boyy
    // setTimeout(() => {
    //     results.setAttribute("class" , "result py-4 d-block bg-light text-center");
    // },1500);
    
    let output = 0;
    setTimeout(() => {
    results.setAttribute("class" , "result py-4 d-block bg-light text-center");
    const timer = setInterval(() => {
        resultspan.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        };
    },50);
    },1000);
});



//// window object 
console.log("hello");
window.console.log("meoww");

console.log(window.document.querySelector("form"))

// let i = 0;
// const timer = setInterval(() => {   
//     console.log("hello");
//     i++
//     if(i === 5){
//         clearInterval(timer); // end the interval 
//     }
// },1000); // fire up the function each 1000ms

