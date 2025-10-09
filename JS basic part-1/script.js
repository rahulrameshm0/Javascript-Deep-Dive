// Declaring A Variable
// console.log('Rahul')

// let PI = "5+456444";

// Data Types

true
let javaScriptIsFun = true
console.log(javaScriptIsFun )

console.log(typeof(javaScriptIsFun))
console.log(typeof(5));
console.log(typeof("safds"));

// Reasinging the value

javaScriptIsFun = "Jonny";
console.log(javaScriptIsFun);

javaScriptIsFun = "James";

// undefined type
let year;
console.log(typeof year);
console.log(year);

//Reasigning 
year = 1998
console.log(year)

// Different types of varible

// Reasigning

let age = 30;
age = 31;
console.log(age);

// Variable that can't be changed
const amount = 1800;
console.log(amount);

// OPERATORS

const now = 2030
const agerahul = now - 1998;
const agerohith = now - 2008;
console.log(agerahul, agerohith);
console.log(agerahul * 2, agerohith - 10 ** 3);

// Concatinating String 
const firstName = "Rahul";
const lastName = "Ramesh";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10;
x += 10;
x *= 2;
x -= 10;
x++;
x--;
console.log(x);

// comparison operator

console.log(agerahul > agerohith);
console.log(agerahul < agerohith);
console.log(agerahul >= agerohith);
console.log(agerahul <= agerohith);

// Exercise

// const massMark = 78;
// const heightmark = 1.69;

// const massJohn = 85;
// const heightJohn = 1.95;

// const bmimark = (massMark / heightmark) ** 2;
// const bmijohn = massJohn / (heightJohn * heightJohn);
// console.log("The BMI of Mark is "+ bmimark);
// console.log("The BMI of John is "+ bmijohn);

// STRING

const fName = 'Rahul';
const job = 'Software Developer';
const birthYear = 1998;
const _year_ = 2025;
const rahul = "I am " + fName + ',' + " My profession is, "+ job + " I am "+ (_year_ - birthYear) + " years old!" 
const rahulNew = `I am ${fName}, work as a ${job} and I am ${_year_ - birthYear} years old!`
console.log(rahul)
console.log(rahulNew)

// Exersice for string

const requiredAge = 18 
const JamesAge = 18;

if (JamesAge >= 18){
    console.log(`You are eligible to take the driverse licence`);
}
else{
    console.log(`You are under ${requiredAge} and you are not elible to apply for the driverse lisence!`)
};

const dob = 1998;
const twenthCentury = 20;
const twentyFirstCentury = 20;
if (dob > 2000){
    let century = `You are born in ${twenthCentury}th century`
    console.log(century)
}else{
    let century = `You are born in ${twentyFirstCentury}th century`
    console.log(century)
};


const massMark = 78;
const heightmark = 0.9;

const massJohn = 85;
const heightJohn = 1.95;

const bmimark = (massMark / heightmark) ** 2;
const bmijohn = massJohn / (heightJohn * heightJohn);

const M_Name = 'Mark';
const J_Name = 'John';
if(massMark, heightmark > massJohn, heightJohn){
    console.log(`The BMI of Mark is ${Math.round(bmimark)} and the BMI of John is ${Math.round(bmijohn)}, so the higher BMI is for ${M_Name}`)
}else{
    console.log(`The BMI of Mark is ${Math.round(bmimark)} and the BMI of John is ${Math.round(bmijohn)}, so the higher BMI is for ${J_Name}`)
};


// Type Conversion

const inputYear = "1998";
console.log(Number(inputYear) + 2, inputYear)

// type coercion

let a = '5' + 10 + 5;
console.log(a);

let b = '15' - '10' - '5' + '5';
console.log(b);

// Truthy & Falsy

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(undefined));

const mony = 0;

if (mony){
    console.log("Dont't speed it all");
}else{
    console.log("Get in there!")
};

let height;

if (height){
    console.log('YAY! The height is defined');
}else{
    console.log('The height is undefined');

};

// Equality Operator

// const date = 18;
//  if (date === 18){
//     console.log("Todays date is 18");
//  }else{
//     console.log("It's not 18 to day!")
//  };

//  const user_input = Number(prompt("What is your age? : "));
// if (user_input === 26){
//     console.log("OMG! You are 26, don't look like you are 26!");
// };

// Logical Operator

const e = true;
const y = false;
console.log(y || e);
console.log(y && e);
console.log(y !== e);

const licence = e && y;

if(e && y){
    console.log("e is able to drive");
    
}else{
    console.log("e is not able to drive");
};

if(e || y){
    console.log("E is able to drive");
}else{
    console.log("E is not able to drive");
}

if(e !== y){
    console.log("E is able to drive");
}else{
    console.log("E is not able to drive");
}

// const dolphines = (96 + 108 + 89) / 3;
// const kolas = (96 + 108 + 89) / 3;
// console.log(Math.round(dolphines), Math.round(kolas));

// if(dolphines > kolas){
//     console.log("Dlophine has win the game!")
// }else if(kolas > dolphines){
//     console.log("Kolas has win the game!")
// }else if(dolphines === kolas){
//     console.log("The point it equal, so the trohyies would be shared")
// };

const dolphines = (196 + 50 + 89) / 3;
const kolas = (96 + 158 + 89) / 3;
console.log(Math.round(dolphines), Math.round(kolas));

if(kolas && dolphines >= 100 && kolas > dolphines){
    console.log(`Kolas has won the game!!`)
}else{
    console.log(`Both team has bellow hundred point, so both team is trophyless`)
};

// Switch statement

const day = "Monday";

switch(day){
    case 'Monday': // day === Monday
        console.log("Coding Exersice");
        break
    case 'Tuesday':
        console.log("Moving to city");
        break
    case 'Wednsday':
    case 'Tursday':
        console.log("Content Writing");
        break
    case 'Friday':
        console.log("Creating a Blog");
};     

// The conditional ternary

const ages = 15;

age < 18 ? console.log("This is my first language") : console.log("This is my last language")

const drink = age >= 83 ? "Water 💧" : "bread 🍞";
console.log(drink);

console.log(`I like to drink ${ages < 18 ? 'Water💧': 'Wine 🍷'}`);


const bill = 445;
const tip = bill <= 300 && bill >= 50 ? bill + 0.15: bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total i s ${bill + tip}`);