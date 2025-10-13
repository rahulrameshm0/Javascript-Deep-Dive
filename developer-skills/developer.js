'use strict';

 const a = '5';
 
 const calcage = birthyear => 2037 - birthyear;

 console.log(calcage(1984))

 const temprature = [-2, -6, -8, 10, 20, 'error', -5, 6,15,16,18,19]

 const calcTempAmplitude = function (temps){
    let max = temps[0];
    for (let i = 0; i < temps.length; i++){
        if (temps[i]) max = temps[i];
    }

    console.log(max)
 }; 

 calcTempAmplitude([4,5,6])

console.log(1+3)