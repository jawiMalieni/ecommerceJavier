import  firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDnkIy6CJprYa4rFIh7klb6FT3eUJ0SqTs",
    authDomain: "ecomerce-1.firebaseapp.com",
    projectId: "ecomerce-1",
    storageBucket: "ecomerce-1.appspot.com",
    messagingSenderId: "594230634994",
    appId: "1:594230634994:web:6a2eb41498b24bca2de36b",
    measurementId: "G-0E0R9F4VGS" 
});

export function getFirebase() {
    return app; 
}

export function getFirestore(){
    return firebase.firestore(app);
}