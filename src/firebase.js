// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAGVomOWMWLTUtJe5icQHhkrV44rhLdq6w",
    authDomain: "clone-488e7.firebaseapp.com",
    projectId: "clone-488e7",
    storageBucket: "clone-488e7.appspot.com",
    messagingSenderId: "113814712927",
    appId: "1:113814712927:web:29e19b8e62fc41058c21ea",
    measurementId: "G-8EN0GTKNRG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };