import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyClQjFaVCD8yZNaiCyZTchlxW5DlHWyTFA",
    authDomain: "recipe-dir.firebaseapp.com",
    projectId: "recipe-dir",
    storageBucket: "recipe-dir.appspot.com",
    messagingSenderId: "265134742657",
    appId: "1:265134742657:web:aa43e3f79ada7d53ab8180"
};

//initialize
firebase.initializeApp(firebaseConfig)

//inisialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }