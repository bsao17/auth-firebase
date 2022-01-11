import firebase from 'firebase'

const firebaseConfig = {
    apiKey: ",
    authDomain: "mysocialnetwork-72cd6.firebaseapp.com",

    databaseURL: "https://mysocialnetwork-72cd6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mysocialnetwork-72cd6",
    storageBucket: "mysocialnetwork-72cd6.appspot.com",
    messagingSenderId: "796443237708",
    appId: "",
    measurementId: "D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
