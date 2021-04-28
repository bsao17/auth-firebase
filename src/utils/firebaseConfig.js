import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBc1Pd9frxj0oBe92MgNnfG9wVwpyUfb7w",
    authDomain: "mysocialnetwork-72cd6.firebaseapp.com",

    databaseURL: "https://mysocialnetwork-72cd6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mysocialnetwork-72cd6",
    storageBucket: "mysocialnetwork-72cd6.appspot.com",
    messagingSenderId: "796443237708",
    appId: "1:796443237708:web:d7613317801503e5a6c3e9",
    measurementId: "G-G2XVFX055D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;