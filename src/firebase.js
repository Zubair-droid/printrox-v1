// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCH1_XYMYqpfrmy7rfAEOn4KqDmybpHXfc",
    authDomain: "printrox-c99b2.firebaseapp.com",
    projectId: "printrox-c99b2",
    storageBucket: "printrox-c99b2.appspot.com",
    messagingSenderId: "779038507351",
    appId: "1:779038507351:web:48664c27672c5753fdfe12",
    measurementId: "G-VG63F0CN7B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
   
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
  
   export{db, auth};