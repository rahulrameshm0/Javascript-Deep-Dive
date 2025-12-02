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