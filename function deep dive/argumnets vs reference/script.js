flight = 'FH5676'

const rahul = {
    name:'james',
    passport_number: 561081145,
};

const checkIn = function (flighNum, passenger){
    flighNum = 'LH199';
    passenger_name = 'Mr' + passenger;

    if(passenger.passport_number ===  561081145){
        alert('CheckIn')
    }else{
        alert('wrong passport number')
    }

};

// checkIn(flight, rahul);
// console.log(flight);
// console.log(rahul); 

// is the same as doing
// const flightNum = flight;
// const passenger =  rahul;


const newPassport = function(person){
    person.passport_number = Math.trunc(Math.random() * 100000000)
}
newPassport(rahul)
checkIn(flight,rahul)