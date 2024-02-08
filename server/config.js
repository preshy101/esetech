const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyB6-MeHW2hiUo9NrVk19XSc4_-qDfWojrs",
    authDomain: "esetech-80c21.firebaseapp.com",
    projectId: "esetech-80c21",
    storageBucket: "esetech-80c21.appspot.com",
    messagingSenderId: "142986588576",
    appId: "1:142986588576:web:a34eed4821a5836af5f4c5",
    measurementId: "G-J4TZHN4DEZ"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const Esetech = db.connection('esetech');
  module.exports = Esetech;