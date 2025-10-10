'use strict'; 

// let driversLisence = false;
// const passTest = true;

// if (passTest) driverLisence  = true;
// if (driversLisence) console.log("You have pass the test") 

// Functions

function add(a,b){
    return a + b;
}
console.log(add(5,6))
console.log(add(5,8))
console.log(add(5,12))


function fruits(apple, orange){
    // console.log(apple, orange)
    const juice = `Juice with ${apple} apples and ${orange} orange`
    return juice
}
const appljuice = fruits(5,6)
console.log(appljuice)

const orangeJuice = fruits(2,4);
console.log(orangeJuice)

// Funciton declaration

function birthYear(birth_Year){
    const age = 2025 - birth_Year
    return age
}
const total_year = birthYear(1998)
console.log(total_year)


// Function Expresion

const calcAge2 = function birthYear2(birth_Year){
    return 2025 - birth_Year;
}
const age2 = calcAge2(2008)
console.log(age2)

// Arrow Function

const calcage3 = birth_Year => 2025 - birth_Year
console.log(calcage3(1998)) 


// Nested Function

const cutfruitpieces = function(fruit){
    return fruit * 4;
}

function fruitProcessor(apple,grapes){
    const apples = cutfruitpieces(apple)
    const grape = cutfruitpieces(grapes)

    return `Juice with ${apples} pieces of apples and ${grape} pieces of grapes`
};

console.log(fruitProcessor(3, 6))


// const calcAges = function(birthYear){
//     return 2037 - birthYear
// }

// const yearUntilRetirement = function(birthyear, firstname){
//     const your_age = calcAges(birthyear);
//     const retirement = 60 - your_age;

//     if(retirement > 0){
//         return `${firstname} retires in ${retirement}`
        
//     }else{
//         return `${firstname} has been already retired`
//     }
// };

// console.log(yearUntilRetirement(1970, 'Rahul'))


// const findAverage = function average(a,b,c){
//     return (a + b + c)
// };

// const calcAverage = function addAverage(average){
//     const kolasAverage = findAverage(44,23,71 / average);
//     const dolphinesAverage = findAverage(55,25,66 / average)

//     if (kolasAverage > dolphinesAverage){
//         return `Kolas Average is ${Math.floor(kolasAverage)} and Dolpines average is ${Math.floor(dolphinesAverage)}, so the highest average is for Kolas`
//     }else{
//         return `Kolas Average is ${Math.floor(kolasAverage)} and Dolpines average is ${Math.floor(dolphinesAverage)}, so the higest average is for Dolphine`
//     }
// };

// console.log(calcAverage(3));

// Array

// const family = ["James", "Evans", "Manual"];
// console.log(family);

// const year = new Array(1998,2004,2005,1999)

// console.log(family[0]);
// console.log(family[2]);
// console.log(family.length);
// console.log(family.length - 1);
// family[2] = "Jonny" 
// console.log(family);

// const bestFriend = "Jonny";
// const friends = [bestFriend, 'Sony', 'Manu'];
// console.log(friends)

// Array Exercise

const calcAges = function(birthYear){
    return 2037 - birthYear
}


const fam = ["James", "Evans", "Manual"];
fam.push("Heaven") // Add as the last element
fam.unshift("Mani") // inserts into the 
fam.pop("Heaven") // Removes the last element from the list
// fam.shift() 


// first index
console.log(fam)
console.log(fam.indexOf('James')) //Finds which position is the element is

console.log(fam.includes('James')) // Checks weather they are available inside the list

console.log(fam.includes('Bob')) // Checks weather they are available inside the list

if (fam.includes('Manual')){
    console.log('You have a family member called Manual')
}else{
    console.log("You don't have a family member called Manual")
}


const calcTip = bill =>  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.12; 
console.log(calcTip(50))
 
const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[1]]
console.log(bills, tips)
console.log(totals)

// objects

// const objects = {
//     fname : "Rahul",
//     lname : "Rames",
//     age : 2025 - 1998,
//     job : 'Sofware Developer',
//     friends : ['james','jonny','manu','mani']
// };

// objects['fname'] = 'Rohith';

// console.log(objects.friends[2])

// const input = prompt("What you want to know about james, age,job or his last name?")


// if (objects[input]){
//     console.log(objects[input])
// }else{
//     console.log('Wrong request!')
// }

// objects.location = "India"
// objects['email'] = "rahulrameshm0@gmail.com"

// console.log(objects)

// console.log(`${objects.fname} has ${objects.friends.length} friends, and his best friend is ${objects.friends[0]}`)

const objects = {
    fname : "Rahul",
    lname : "Ramesh",
    birth : 1998,
    job : 'Sofware Developer',
    friends : ['james','jonny','manu','mani'],

    calc4: function(){
        this.age = 2025 - this.birth;
        return this.age;
    }
};

console.log(`Your total age is: ${objects.calc4()}`)


// console.log(objects.age);
// console.log(objects.age);
// console.log(objects.age);

// objects['fname'] = 'Rohith';

const mark = {
    fullname: 'Binsy Ramesh',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const james = {
    fullname: 'Rahul Ramesh',
    kg: 92,
    height: 1.95,

    calcBMI: function(){
    this.bmi = this.kg / this.height ** 2;
    return this.bmi;
    }

};

mark.calcBMI();
james.calcBMI();
console.log(james.bmi, mark.bmi)

if (mark.bmi > james.bmi){
    console.log(`${mark.fullname} has higher BMI than ${james.fullname}`)
}else{
    console.log(`${james.fullname} has higher BMI than ${mark.fullname}`)

}

for(let rep = 1; rep<=10; rep++){
    console.log(rep)
}

const jonas = [
    'jonas',
    2025-1998,
    'Engineer',
    ['Rahul', 'James', 'Jonny'],
    "True   "
];

for(let i = 0; i<jonas.length; i++){
    console.log(jonas[i]);
}

const year = [1990, 1997, 1998, 1999, 2000];
const age = []

for(let i=0; i<year.length; i++){
    age.push(2025 - year[i])
}
console.log(age)


console.log('--ONLY STRINGS--')
for(let i=0; i<year.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof(jonas[i]))
}

console.log('--ONLY Numbers--')
for(let i=0; i<year.length; i++){
    if(typeof jonas[i] !== 'number') continue;
    console.log(jonas[i], typeof(jonas[i]))
}