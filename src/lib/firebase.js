// import Firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'


// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyDMK-CzjLZM6rekwNNxotUwhqGfpb3__L8",
    authDomain: "instagram-clone-634d6.firebaseapp.com",
    projectId: "instagram-clone-634d6",
    storageBucket: "instagram-clone-634d6.appspot.com",
    messagingSenderId: "306638576028",
    appId: "1:306638576028:web:e29f1b2add9395ab689059"
}


const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue }