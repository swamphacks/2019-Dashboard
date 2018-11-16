const driverRef = ref.child('carpoolDrivers');
const passengerRef = ref.child('carpoolPassengers');

function saveDriverInfo() {

}

function addPassenger() {
    let data = {loggedInUserKey: true};
    passengerRef.set(data);
}

function addDriver() {
    
}

function acceptPassenger() {
    
}

function getDriverInfo() {
    
}

function getPassengerInfo() {
    
}

function getDrivers() {
    
}

function getPassengers() {
    
}

function removePassengers() {
    
}

function removeDriver() {
    
}
