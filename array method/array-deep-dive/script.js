
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
        <div class ="movements__value">${mov} €</div>
        </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin', html)
    });
};


// implementing current balance

const calcPrintBalance = function(movements){
    const balance = movements.reduce((acc,mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} €`
};

const calcDisplaysummary = function(acc) {
    const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outgoing)}€`
    
    const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int,i,arr) => {
        // console.log(arr)
        return int >= 1
    })
    .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${intrest}€`
};

// calcDisplaysummary(acc.movements)

const createUsernames = function(accs) {
    accs.forEach(function(acc){
        acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });

};
createUsernames(accounts);

// Event handler
let currentAccount; 


btnLogin.addEventListener('click', function (event) {
    // Preven form from submiting
    event.preventDefault();
    console.log('LOGIN');

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value)
        console.log(currentAccount);

        if (currentAccount?.pin === Number(inputLoginPin.value)){
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
            containerApp.style.opacity = 100;
        }else (
            alert("Username or password incorrect!"),
            containerApp.style.opacity = 0
        )

        // clear input
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur()
        // Display movement
        displayMovements(currentAccount.movements);
        
        // Display Blance
        calcPrintBalance(currentAccount.movements);

        // Display Summary
        calcDisplaysummary(currentAccount);

        
    });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log('------------Computing Username!--------');

// console.log(containerMovements.innerHTML);

// let a = ['a', 'b', 'c', 'd', 'e']

// SLICE
// console.log(a.slice(2));
// console.log(a.slice(2, 4));
// console.log(a.slice(-2));
// console.log(a.slice(-1));
// console.log(a.slice(1, -2));
// console.log(a.slice(2));

// SPLICE
// console.log('Splice')
// a.splice(-1);
// console.log(a);
// a.splice(1, 2)
// console.log(a);


// REVERSE
// console.log('Reverse')
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// console.log('Concat')
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);

// JOIN
// console.log('Join');
// console.log(letters.join('-'));

// at Method
// console.log('at Method');
// const number = [1,65,23,45,78,2365,458]
// console.log(number.at(-1))
// console.log(number.length - 1)


// LOOPING ARRAYS ForEach
// console.log('LOOPIN THROUGH ARRAY');
const movements = [400, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
// for (const [i, movement] of movements.entries()){
//     if (movement > 0){
//         console.log(`Movement ${i + 1}: You Deposited ${movement}`);
//     }else{
//         console.log(`Movement ${i + 1}: You Withdrow ${Math.abs(movement)}`);
//     }
// };

// console.log('-----FOREACH-----');
// movements.forEach(function(movement, index){
//     if (movement > 0){
//         console.log(`Movement ${index + 1}: You Deposited ${movement}`);
//     }else{
//         console.log(`Movement ${index + 1}: You Withdrow ${Math.abs(movement)}`);
//     }
// });


// MAP
// console.log('-----MAP-----');
// const currencies = new Map([
//     ['USD', 'United state dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound Sterling']
// ]);

// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`)
// });

// SET
// const currenciesUnique = new Set(['USD', 'EUR', 'IND', 'EUR'])
// console.log(currenciesUnique)
// currenciesUnique.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`);
// });


// const juliaData = [4,2,5,8,3,4,1,5,2] 
// const kateData = [14,12,5,18,3,4,11,9,12] 

// function checkDogs(dogsJulia, dogsKate) {
//     const juliaCorrected = dogsJulia.slice();
//     juliaCorrected.splice(0, 1);
//     juliaCorrected.splice(-2);
    // console.log(juliaCorrected)
    
//     const dogs = juliaCorrected.concat(dogsKate)
//     console.log(dogs)

//     dogs.forEach(function(dogs, i){
//         if (dogs >= 3){
//             console.log(`The dog number is ${i + 1} an adult and it is ${dogs} years old`)
//         }else{
//             console.log(`The dog number is ${i + 1} is still a puppy`)
//         }
//     });
// }

// checkDogs([3,5,2,7,12],[4,1,15,8,3])


// Working with map
// console.log('-------Using Function------')

// const eurToUsd = 1.1;
// const movementUSD = movements.map(function(mov){
//     return mov * eurToUsd;
// });
// console.log(movementUSD)

// Using arroy function
// console.log('-------Using Arow Statement------')
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD)

// console.log(movements)
// console.log(movementUSD)

// using loop statement 
// console.log('-------LOOP------')
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
//     console.log(movementsUSDfor)

// const movementDescription = movements.map((mov, i) => 
// `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrow'} ${Math.abs(mov)}`
// );

// console.log(movementDescription)



// Filter Method
// console.log("Fiter Mehod")
// const deposit = movements.filter(function(mov){
//     return mov > 0;
// });

// console.log(movements);
// console.log(deposit);

// const depositFor = [];
// for(const mov of movements) if(mov > 0) depositFor.push(mov);
// console.log(depositFor);


// const withdrowels = []
// const withdrowel = movements.filter(mov => mov < 0);
// for(const move of movements) if(move < 0) withdrowels.push(move);
// console.log(withdrowels)
// console.log(withdrowel)

// Reduce Method
// console.log("--------Reduce method--------")
// console.log(movements)

// const balance = movements.reduce((acc,cur) => acc + cur);
// console.log(balance)


// console.log(`Iteration ${i}: ${acc}`)

// MAXIMUM VALUE
// const max = movements.reduce((acc,mov) => {
//     if (acc > mov){
//         return acc;   
//     }else
//         return mov
// }, movements[0]);

// console.log(max)


// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age:16 * 4));
//     const adults = humanAges.filter(age => age >= 18);

//     console.log(humanAges)
//     console.log(adults)

// const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

// return average;

// };


// const avg1 = calcAverageHumanAge([5,2,4,1,6,7,8])
// const avg2 = calcAverageHumanAge([16,6,10,8,5,48])

// console.log(avg1,avg2)



// Magic of changing methods
// Pipeline
// const euroToUsd = 1.1;
// const totalDepositInUsd = movements
//     .filter(mov => mov < 0)
//     .map((mov, i, arr) => {
//         console.log(arr)
//         mov * eurToUsd
//     })
//     .reduce((acc,mov) => acc + mov, 0);

// console.log(totalDepositInUsd )





// const calcAverageHumanAges = ages => ages
// .map(ages => (ages <= 2 ? 2 * ages :16 * 4))
// .filter(age => age >= 18)
// .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


// const avg1 = calcAverageHumanAges([5,2,4,1,6,7,8])
// const avg2 = calcAverageHumanAges([16,6,10,8,5,48])
// console.log(avg1)
// console.log(avg2)


// Find method

// const first_withdrawel = movements.find(mov => mov < 0);
// console.log(first_withdrawel);
// console.log(movements);
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account)