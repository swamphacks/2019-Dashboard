const driverRef = ref.child('carpoolDrivers');
const passengerRef = ref.child('carpoolPassengers');

function saveDriverInfo(driverInfo) {
    let data = {};
    data[loggedInUserKey] = driverInfo;
    driverRef.update(data);
}

function addPassenger() {
    let data = {};
    data[loggedInUserKey] = {
        email: userObj.email,
        fname: userObj.fname,
        lname: userObj.lname,
        transportationState: userObj.transportationState,
        phoneNumber: userObj.phoneNumber
    };
    passengerRef.set(data);
}

function addDriver() {
    let data = {};
    data[loggedInUserKey] = true;
    driverRef.set(data);
}

function acceptPassenger(userKey) {
    
}
// How to use Promise: when you call the function, in order to get the value from it
// it must be done like this:
// isDriver(userKey).then(function(value) { value is = to true or false in this case
//     // code goes here
// });
function isDriver(userKey) {
    let driver = new Promise(function(resolve, reject) {
        driverRef.child(userKey).once('value').then(function(snapshot) {
            if (snapshot.val()) {
                // is driver
                resolve(true);
            } else {
                // is not driver
                resolve(false);
            }
        });
    });
    return driver;
}
// How to use Promise: when you call the function, in order to get the value from it
// it must be done like this:
// isPassenger(userKey).then(function(value) {
//     // code goes here
// });
function isPassenger(userKey) {
    let passenger = new Promise(function(resolve, reject) {
        passengerRef.child(userKey).once('value').then(function(snapshot) {
            if (snapshot.val()) {
                // is passenger
                resolve(true);
            } else {
                // is not passenger
                resolve(false);
            }
        });
    });
    return passenger;
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

function getDrivers() {
    // driverRef.
}

function getPassengers() {
    
}

function removePassengers() {
    
}

function removeDriver() {
    
}
