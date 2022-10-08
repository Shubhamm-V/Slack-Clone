// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6DLsDmu4DP81gMe5dR84Q0dPIqpMH-U",
  authDomain: "slack-clone-001.firebaseapp.com",
  projectId: "slack-clone-001",
  storageBucket: "slack-clone-001.appspot.com",
  messagingSenderId: "781811868670",
  appId: "1:781811868670:web:6fa8f5448c2c84cf5a96af",
  measurementId: "G-30W63WJX0M"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
export default db;
