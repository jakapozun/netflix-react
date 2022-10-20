import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCvbN4xXXXEn6aaTDcHUqMeoAM_DsmiBko",
    authDomain: "netflix-react-2ac82.firebaseapp.com",
    projectId: "netflix-react-2ac82",
    storageBucket: "netflix-react-2ac82.appspot.com",
    messagingSenderId: "503295173035",
    appId: "1:503295173035:web:3bcf5f4d6eddc91083b2ee"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {auth, db}