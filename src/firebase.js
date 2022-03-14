import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCft_3VR1To5QKi8tSBzz5LbJo2X4f63rk",
    authDomain: "clone-ad203.firebaseapp.com",
    projectId: "clone-ad203",
    storageBucket: "clone-ad203.appspot.com",
    messagingSenderId: "668977829038",
    appId: "1:668977829038:web:adb78774354461db2d893f"
})

const auth = firebase.auth()

export { auth }
