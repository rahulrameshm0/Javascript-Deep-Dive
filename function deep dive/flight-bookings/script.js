bookings = []

// ES6 Version
const create_booking = function(flightNum,numPassanger=1,price= 199 * numPassanger){
    // ES5
    // numPassanger = numPassanger ||1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassanger,
        price
    };

    console.log(booking);
    bookings.push(booking);
};

create_booking('LH123')
create_booking('LH123',800)
create_booking('LH1223',5)  
create_booking('LH1223',undefined,1000)  