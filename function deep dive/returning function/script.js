const greet = function(greeting) {
    return function(name){
        console.log(`${greeting} ${name}`)
    };
};

const greeter = greet('Hey');
greeter('Rahul')
greeter('James')

greet('Hello')('Manu')


// Using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greet('Hello')('James Milner')
