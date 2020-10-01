import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMfd9VVNvSUbZdcIz8mUiDpFsi6SqJoz8",
  authDomain: "cclone-9b9ef.firebaseapp.com",
  databaseURL: "https://cclone-9b9ef.firebaseio.com",
  projectId: "cclone-9b9ef",
  storageBucket: "cclone-9b9ef.appspot.com",
  messagingSenderId: "204936492401",
  appId: "1:204936492401:web:f227926ebc87640c1d32d0",
  measurementId: "G-F2EKENT3ZJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
