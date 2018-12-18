const driverRef = ref.child('carpoolDrivers');
const passengerRef = ref.child('carpoolPassengers');

function saveDriverInfo(driverInfo) {
    let data = {};
    data[loggedInUserKey] = driverInfo;
    driverRef.update(data);
}
// TODO: make sure they are not a driver
function addPassenger() {
    let data = {};
    data[loggedInUserKey] = {
        driver: '',
        email: userObj.email,
        fname: userObj.fname,
        lname: userObj.lname,
        transportationState: userObj.transportationState,
        phoneNumber: userObj.phoneNumber
    };
    passengerRef.update(data);
}
// TODO: make sure they are not a passenger
// function addDriver() {
//     let data = {};
//     data[loggedInUserKey] = true;
//     driverRef.update(data);
// }
// TODO: check limit of passenger from driver info
function acceptPassenger(userKey) {
    
}
// How to use Promise: when you call the function, in order to get the value from it
// it must be done like this:
// isDriver(userKey).then(function(value) { value is = to true or false in this case
//     // code goes here
// });
function isDriver(userKey) {
    return driverRef.child(userKey).once('value');
}
// How to use Promise: when you call the function, in order to get the value from it
// it must be done like this:
// isPassenger(userKey).then(function(value) {
//     // code goes here
// });
function isPassenger(userKey) {
    return passengerRef.child(userKey).once('value');
}
// How to use: getDriverInfo(userKey).then(function(snapshot) {
//      let driverInfo = snapshot.val();
//      ...
// });
function getDriverInfo(userKey) {
    return driverRef.child(userKey).once('value');
}
// How to use: getPassengerInfo(userKey).then(function(snapshot) {
//      let passengerInfo = snapshot.val();
//      ...
// });
function getPassengerInfo(userKey) {
    return passengerRef.child(userKey).once('value');
}

function getPassengers() {
    return passengerRef.orderByChild('fname');
}

function getDrivers() {
    return driverRef.orderByChild('fname');
}

function addDriverItem(fname, lname, startLocation, key, passengerCount, passengerLimit) {
    //model = model ? model : 'N/A';
    const itemClass = 'driverItem';
    const itemId = 'driverItemId' + key;
    const listOpen = '<li class="' + itemClass + '" id="' +itemId + '">';
    const listClose = '</li>';
    const header = '<h1 class="driverCardName">' + fname + ' ' + lname + '</h1>';
    const location = '<br> <b>Driving from:</b> ' + startLocation;
    const passengerCountTag = '<span id="passenger'+ key +'">'+ passengerCount.toString() + '</span>';
    const current = '<br> <b>Current passengers in car:</b> ' + passengerCountTag;
    const limit = '<br> <b>Total passenger limit:</b> ' + passengerLimit.toString();
    return listOpen + header + location + current + limit + listClose;
}

function addPassengerItem(fname, lname) {
    const itemClass = 'passengerItem';
    const itemId = 'passengerItemId';
    const listOpen = '<li class="' + itemClass + '" id="' +itemId + '">';
    const listClose = '</li>';
    return listOpen + fname + ' ' + lname + listClose;
}

function removePassengers(userKey) {
    passengerRef.child(userKey).remove();
}

function removeDriver(userKey) {
    driverRef.child(userKey).remove();
}

function updatePassengerCount(key, driver) {
    // remove from list if limit is reached
    if (driver.currentPassengerCount >= driver.passengerLimit) {
        $('#driverItemId'+key).addClass('hide');
        $('#driverItemId'+key).removeClass('show');
    } else {
        let driverItem = $('#passenger'+key);
        if (driverItem.length == 0) {
            let driverListDOM = $('#driverList')[0];
            driverListDOM.innerHTML += addDriverItem(driver.fname, driver.lname, driver.startLocation,
                key, driver.currentPassengerCount, driver.passengerLimit);
        } else {
            driverItem.text(driver.currentPassengerCount.toString());
            $('#driverItemId'+key).addClass('show');
            $('#driverItemId'+key).removeClass('hide');
        }
    }
}

// function makeFakeDrivers() {
//     const driversRef = ref.child('carpoolDrivers');
//     let drivers = [
//         {
//             fname: 'John',
//             lname: 'Smith',
//             startLocation: 'Jacksonville',
//             passengerLimit: '3',
//             plate: '78NK7Q',
//             model: 'Toyota Corolla',
//             currentPassengerCount: 0,
//             currentPassengers: []
//         },
//         {
//             fname: 'Jane',
//             lname: 'Doe',
//             startLocation: 'Orlando',
//             passengerLimit: '2',
//             plate: '9HT75J',
//             model: 'Honda Civic',
//             currentPassengerCount: 0,
//             currentPassengers: []
//         },
//         {
//             fname: 'Alex',
//             lname: 'Gomez',
//             startLocation: 'Miami',
//             passengerLimit: '4',
//             plate: '305MIA',
//             model: 'Cadillac Escalade',
//             currentPassengerCount: 0,
//             currentPassengers: []
//         },
//         {
//             fname: 'Julian',
//             lname: 'Moreno',
//             startLocation: 'Tallahasee',
//             passengerLimit: '2',
//             plate: '9G8FH5',
//             model: 'Nissan Altima',
//             currentPassengerCount: 0,
//             currentPassengers: []
//         }
//     ];
//     driversRef.set(drivers);
// }
