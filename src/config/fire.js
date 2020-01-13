import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDSfYJwtUlA97quBe721nNef9UeWFP4AxU",
    authDomain: "vocabulary-app-21cad.firebaseapp.com",
    databaseURL: "https://vocabulary-app-21cad.firebaseio.com",
    projectId: "vocabulary-app-21cad",
    storageBucket: "vocabulary-app-21cad.appspot.com",
    messagingSenderId: "657214350951",
    appId: "1:657214350951:web:04e203b28a7e28f27596c2"
};

const fire = firebase.initializeApp(config);
export default fire;