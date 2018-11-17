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
function addDriver() {
    let data = {};
    data[loggedInUserKey] = true;
    driverRef.update(data);
}
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

function addDriverItem(fname, lname) {
    const itemClass = 'driverItem';
    const itemId = 'driverItemId';
    const listOpen = '<li class="' + itemClass + '" id="' +itemId + '">';
    const listClose = '</li>';
    return listOpen + fname + ' ' + lname + listClose;
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
