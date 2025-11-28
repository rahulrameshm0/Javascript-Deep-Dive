const oneword = function (str) {
    return str.replace(/ /g, '').toLowerCase()
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Original by: ${fn.name}`);
};

transformer('javaScript is the best!', upperFirstWord);
transformer('javaScript is the best!', oneword);


// JS uses callback function all the time

const high5 = function () {
    console.log('👋🏻')
}

document.body.addEventListener('click', high5); 
    ['jona', 'Martha', 'Adam'].forEach(high5);