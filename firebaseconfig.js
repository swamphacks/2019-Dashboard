// Initialize Firebase
const config = {
    apiKey: "AIzaSyAPcSN9HohHuNUKOTVJ0Fm3wfoAqUaxzhk",
    authDomain: "swamphacks-2019.firebaseapp.com",
    databaseURL: "https://swamphacks-2019.firebaseio.com",
    projectId: "swamphacks-2019",
    storageBucket: "swamphacks-2019.appspot.com",
    messagingSenderId: "243219143648"
};
firebase.initializeApp(config);

const ref = firebase.database().ref();