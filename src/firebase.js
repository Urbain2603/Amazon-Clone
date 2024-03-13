import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-y0xwbxfvHsBRXm6CH6LTMMa52SGcbnQ",
  authDomain: "clone-27152.firebaseapp.com",
  databaseURL: "https://clone-27152.firebaseio.com",
  projectId: "clone-27152",
  storageBucket: "clone-27152.appspot.com",
  messagingSenderId: "1066471477452",
  appId: "1:1066471477452:web:4d484689eed14c0acdf269",
  measurementId: "G-51XWMQQ2ER"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }