import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyD7buWYJSyzTx95B4t0aOmbhGNWHDtmRpM",
    authDomain: "project1-admin-6055c.firebaseapp.com",
    databaseURL: "https://project1-admin-6055c.firebaseio.com",
    projectId: "project1-admin-6055c",
    storageBucket: "project1-admin-6055c.appspot.com",
    messagingSenderId: "9722355897",
    appId: "1:9722355897:web:bc6678305c73fe97a73b68",
    measurementId: "G-FF4TG2WFXL"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;