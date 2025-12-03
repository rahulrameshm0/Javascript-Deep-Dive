
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    containerMovements.innerHTML = ''
    movements.forEach(function (mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal' 
        const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class ="movements__value">${mov}</div>
        </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin', html)
    });
};

displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

let a = ['a', 'b', 'c', 'd', 'e']

// SLICE
console.log(a.slice(2));
console.log(a.slice(2, 4));
console.log(a.slice(-2));
console.log(a.slice(-1));
console.log(a.slice(1, -2));
console.log(a.slice(2));

// SPLICE
console.log('Splice')
a.splice(-1);
console.log(a);
a.splice(1, 2)
console.log(a);


// REVERSE
console.log('Reverse')
let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
console.log('Concat')
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// JOIN
console.log('Join');
console.log(letters.join('-'));

// at Method
console.log('at Method');
const number = [1,65,23,45,78,2365,458]
console.log(number.at(-1))
console.log(number.length - 1)


// LOOPING ARRAYS ForEach
console.log('LOOPIN THROUGH ARRAY');
const movements = [400, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const [i, movement] of movements.entries()){
    if (movement > 0){
        console.log(`Movement ${i + 1}: You Deposited ${movement}`);
    }else{
        console.log(`Movement ${i + 1}: You Withdrow ${Math.abs(movement)}`);
    }
};

console.log('-----FOREACH-----');
movements.forEach(function(movement, index){
    if (movement > 0){
        console.log(`Movement ${index + 1}: You Deposited ${movement}`);
    }else{
        console.log(`Movement ${index + 1}: You Withdrow ${Math.abs(movement)}`);
    }
});


// MAP
console.log('-----MAP-----');
const currencies = new Map([
    ['USD', 'United state dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
]);

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
});

// SET
const currenciesUnique = new Set(['USD', 'EUR', 'IND', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});


// const juliaData = [4,2,5,8,3,4,1,5,2] 
// const kateData = [14,12,5,18,3,4,11,9,12] 

function checkDogs(dogsJulia, dogsKate) {
    const juliaCorrected = dogsJulia.slice();
    juliaCorrected.splice(0, 1);
    juliaCorrected.splice(-2);
    // console.log(juliaCorrected)
    
    const dogs = juliaCorrected.concat(dogsKate)
    console.log(dogs)

    dogs.forEach(function(dogs, i){
        if (dogs >= 3){
            console.log(`The dog number is ${i + 1} an adult and it is ${dogs} years old`)
        }else{
            console.log(`The dog number is ${i + 1} is still a puppy`)
        }
    });
}

checkDogs([3,5,2,7,12],[4,1,15,8,3])


// Working with map
console.log('-------Using Function------')

const eurToUsd = 1.1;
const movementUSD = movements.map(function(mov){
    return mov * eurToUsd;
});
console.log(movementUSD)

// Using arroy function
console.log('-------Using Arow Statement------')
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD)

// console.log(movements)
// console.log(movementUSD)

// using loop statement 
console.log('-------LOOP------')
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
    console.log(movementsUSDfor)

const movementDescription = movements.map((mov, i) => 
`Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrow'} ${Math.abs(mov)}`
);

console.log(movementDescription)