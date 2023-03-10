// array methods

// filter method 
const scores = [10,30,15,25,45,4];
 
const filtred_scores = scores.filter((score) => {
    return score > 20;
}); // takes an callback function 

console.log(scores);
console.log(filtred_scores);


const users = [
    {name : "shaun" , premium : true},
    {name : "yoshi" ,premium : true},
    {name : "mario" , premium : false},
    {name : "chun-li" , premium : true},
];

const premiumUsers = users.filter(user => user.premium); // this is how we can do it simplyfied

console.log(premiumUsers)


// map method 
const prices = [20,10,30,25,15,40,80,5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// })

const salePrices = prices.map(price => price / 2);


console.log(salePrices)


const products = [
    {name: "gold star", price: 20 },
    {name: "mushroom" , price: 40 },
    {name: "banana skin" , price: 10},
    {name: " red shells" , price: 50}
];

const saleProducts = products.map((product) => {
    if(product.price >30 ) {
        return {name: product.name, price:product.price /2};
    } else {
        return product;
    }
});

// this is better way bc it doesnt change the original array 

console.log(saleProducts)

// reduce or some shit no idea boyy

const scores2 = [10,60,15,25,45,4];

const result3 = scores2.reduce((accumulator,current) => {
    if(current > 50){
        accumulator++;
    }
    return accumulator
},0);

console.log(result3)

const scores4  = [
    {player:"mario" ,score: 50},
    {player: "yoshi" ,score:30},
    {player: "mario" , score:70},
    {player:"crystal" ,score:60}
];

const marioTotal = scores4.reduce((acc,curr) => {
    if(curr.player === "mario"){
        acc ++
    }
    return acc;
},0);


// find method 
//// returns the first value in array that returns true 
const firstHighScore = scores2.find((score) => { // we can take away the () and shit
    return score > 50;
});

console.log(firstHighScore)




//sort method 

// example 1
const names2 = ["mario" , "stephen" , "ziden" , "niggen" , "loissrossmann"];

// example 2
const scores6 = [10,20,55,8,66,78,45];

// example 3
const players3  = [
    {player:"mario" ,score: 50},
    {player: "yoshi" ,score:30},
    {player: "mario" , score:70},
    {player:"crystal" ,score:60}
];


/////////////////////

names2.sort(); // by default is sorts alphabetically , chenges the array not returning new one, its destructive
console.log(names2);

scores6.sort();
console.log(scores6);

players3.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    } else if (b.score > a.score){
        return 1;
    } else {
        return 0
    }
});

players3.sort((a,b) => b.score - a.score); // same thing as above

console.log(players3)