import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCSuLLXopWulAnWrr1Y5-xQgtNhqfcKTDA",
    authDomain: "lectern-d16e5.firebaseapp.com",
    projectId: "lectern-d16e5",
    storageBucket: "lectern-d16e5.appspot.com",
    messagingSenderId: "217028493707",
    appId: "1:217028493707:web:bfed67283292a9a4912f8e",
    measurementId: "G-44JVC6P1JJ"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }
  
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export default firebase;