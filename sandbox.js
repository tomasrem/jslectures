
let age = 25;  //defining a variable 
let year = 2019;


console.log(age,year);  // output info in chormedev console

age = 30;   //updating a variable 

console.log(age);


const points = 100; // creating variable that wont change 

console.log(points);


var score = 75;  // var is the older style of creating variables but stil works 
console.log(score)



//strings 

let email = "something@gmail.com";
console.log(email);

//string concatenation

let firstName = "Tomas";
let lastName = "Remis";

let fullName = firstName + " " + lastName

console.log(fullName[10]);

// string lenght 

console.log(fullName.length);

// string methods 

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result,fullName);


let index = email.indexOf("@")  // its gonna fing index of the symbol in string 

console.log(index)


let hh = email.lastIndexOf("i");  // returns the index of the last position of given character
console.log(hh)

let pf = email.slice(0,10);  // slice the string - from and to an index 
console.log(pf)


let ok = email.substr(4,10); // go from index 4 and 10 characters eg from 4 to 14 
console.log(ok)


let shet = email.replace("m","oooo")
console.log(shet)




// numbers 

let radius = 10;
const pi = 3.14;
console.log(radius,pi);

// math operators 

console.log(10/5);
let meow = radius % 3;  // % returns remainder 
console.log(meow)



let likes = 10;
//likes = likes + 1;
likes++;              // ++ is adding one , -- is substracting one 
likes += 10;    // += is adding value to existing one , -= substracting , *= atd atd.. 
console.log(likes);


let dees = "the blog has " + likes + " likes";
console.log(dees)






const title = "Best reads of 2021";
const author = "Mario";
const meows = 30;
// concation way 

let shhh = "The blog called  " + title + " by " + author + " has " + meows + "likes";
console.log(shhh);     // very messy and unclean way of string joining

// template string concation 
let okok = `The blog called ${title} by ${author} has ${meows} likes`; // backtick ``, not jus "" algtr+7 ``
console.log(okok)
 let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>THis blog has ${meows} likes </span>
 
 `;

console.log(html);
// ${} is used to update dynamic content in html from server atd..

// booleans 
let names = ["luigy","niggga","pete"];
let check2 = names.includes("luigy");

let check = email.includes("@");
console.log(true,false,"true",check,check2);


// LOOSE VS STRICT COMPARATORS

let age1 = 30;
console.log(age1 == 30 ,age1 == "30" );  // loose comparators doest care about the data types 

console.log(age1 === 30 ,age1 === "30" ); // strict comparator is === and it has to be same data type
console.log(age1 !== 30 ,age1 !== "30" );




// data types conversions 
let score2 = "100" ;
score2 = Number(score2);
console.log(score2 + 1 );
console.log(typeof score2);

let something = Number("Hello ");
console.log(something); // not a number is result 

let uff = Boolean(0);  // positive and negative numbers are truthy , zero if falthyy , strings of any lenght are true - empty of zero lengt false 
console.log(uff, typeof uff);





// functions 

function greet(){    // declaring the function , function declaration 
   console.log("hello there boyy")
}



// calling the function 
const speak = function(){  // function expression , storing function inside a variable , note the ; at the end 
   console.log("good day!");
};


greet(); 
speak();
speak(); 
// HOISTING :)   means that function declarations are allways moved to the top when you run code and you can run them before declared in code , function expression works are regular variables


const speaker = function(name ="meow", time="evening" ){  //to prevent undefined we specify defaults 
   console.log(`Hello beautifull , ${name} at ${time}`)
}

speaker("nigga","morning");
speaker("haha" );

const calcArea = function(radius){
   return 3.14 * radius**2;
   
}

const q = calcArea(5);
console.log(q)



// arrow functions , cleaner and shorter functions

const calcAreaa = (radius) => {
   return 3.14 * radius**2
};

const calcAreaaa = radius => {  // when theres just one parameter we dont need parenthesis
   return 3.14 * radius**2
};

const calcAreaaaa = radius => 3.14 * radius**2 ; // we can do it even like this and its returning value when code is just one line




const meowmeow = () => "This is arrow func";

console.log(meowmeow());


//methods 

const namee = "tomasko";
namee.toUpperCase();


// zaciname po dlllhej pauze znova :D 
const shieet = (name) =>`Whats upp ${name}`;

console.log(shieet("jozef"))

function refresh(days){
   console.log(`Its been ${days} days since you been coding bruh you dont know anything hah`,typeof(days),days.toString())
}

refresh(1000)

// functions vs methods 

// callback function is when we pass function into another function 

// declariong the function
const myFunc = (callbackfunction) => {
   //do the stuff
   let value = 50  // this value is passed into the passed in function
   callbackfunction(value)
}


 // here we are just calling myFunc and passing a function inside 
 //wich requires parameter wich is in myFunc body 

 myFunc(function(value){ 
   //do shit
   console.log(value)
})



//variable
let people = ["mario","lugi","niggy","pete","kokotko"]



// for each is array method wich takes in function 
// first argument we get to name the thing we are iterationg over 
people.forEach(function(element,index,array){
   console.log(element,index)

})

people.forEach(element =>
   {console.log(element)})


//callbackfunction
const logperson = (element,index) => {
   console.log(`${index} -- Hello ${element}`)
}

// passing it into aother func 
people.forEach(logperson)




const ul = document.querySelector(".people");



//callaback functions in action 
 let html5 = ``;

 people.forEach(function(person,index){
   //create html template 
   html5 += `<li style = color:red>${index}--${person}</li>`;
 })

console.log(html5);
ul.innerHTML = html5;
