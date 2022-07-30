import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCE9b7qidd2XPHb19oZoF28loJhSxrsBUs",
  authDomain: "tiktok-clone-3b4e1.firebaseapp.com",
  projectId: "tiktok-clone-3b4e1",
  storageBucket: "tiktok-clone-3b4e1.appspot.com",
  messagingSenderId: "427874309367",
  appId: "1:427874309367:web:9a68821e9d1818dd53eff2",
  measurementId: "G-1SY4126XY3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };