// objects listerals 

const blogs = [
    { title:"why the fuck im single",likes:30}, // object
    {title:"10 things to do with marmite",likes:66}
];


console.log(blogs);



let user = {        //{} this braces for object literall
    name: "crystal", // key value pair, propety of user object
    age: 30,
    email: "nigga@gmail.com",
    location: "berlin",
    blogs: [
        { title:"why the fuck im single",likes:30}, // object
        {title:"10 things to do with marmite",likes:66}
    ],


    login: function(){
        console.log("the user is logged in");
    },


    logBlogs: function(){
        //console.log(this) this is just instance. in python
        console.log("this user has written following blogs:")
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        })
    },


    logOut(){
        console.log(this.name) //we can write methods with this syntax
    },
    //we cant user arrow functions inside as object cuz we wont have this keyword availabe bc some shit idk really :D
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["name"]); // this is usable when we are passing in key variable
user.login();

console.log(this);
user.logBlogs();
 

// math object

console.log(Math);
console.log(Math.LOG10E);

const random = Math.random();
console.log(random)
console.log(Math.round(random*1000)) // way of getting random numbereasy peasy

// primitive and reference types 
//when we create a variable and than we make new variable = variable it copies the value from the stack,if we make copy of referrence type it just copies the pointer not the actual object(value)
let score1 = 50;
let scoreTwo = score1;
console.log(`scoreOne ${score1} scoretwo ${scoreTwo}`);
score1 = 100;  // if we change value of primitive type it doesnt affect the others connected to it 
console.log(`scoreOne ${score1} scoretwo ${scoreTwo}`);


const userOne = { name: "jozef", age:30} 
const userTwo = userOne  // now it doesnt copy the object just the pointer on the heap 

console.log(userOne,userTwo);
userOne.name = "Pišta"
console.log(userOne,userTwo);