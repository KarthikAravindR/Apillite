import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaf9S6JjMDqJ2TaSLTmg1pDjO6uYXYQYE",
  authDomain: "apillite.firebaseapp.com",
  projectId: "apillite",
  storageBucket: "apillite.appspot.com",
  messagingSenderId: "681408999202",
  appId: "1:681408999202:web:b4991b37d5ec4aba6b7f7b",
  measurementId: "G-9YBYQEFH3Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db