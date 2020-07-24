// FIREBASE
const firebaseApp = require('firebase');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACh0d5-LXgUazi34Ktvjp08Vwnl3e1axA",
    authDomain: "todoapp1-df0e5.firebaseapp.com",
    databaseURL: "https://todoapp1-df0e5.firebaseio.com",
    projectId: "todoapp1-df0e5",
    storageBucket: "todoapp1-df0e5.appspot.com",
    messagingSenderId: "539988844611",
    appId: "1:539988844611:web:c8eea7f44adb07dc47b4f6"
  };
  // Initialize Firebase
 firebaseApp.initializeApp(firebaseConfig);
 export default firebaseApp