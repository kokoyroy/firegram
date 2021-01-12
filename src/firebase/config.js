import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAS6Bq5M4E2to8rS13LYmd06BIvOb8ElUg",
    authDomain: "kokoyroy-firegram.firebaseapp.com",
    projectId: "kokoyroy-firegram",
    storageBucket: "kokoyroy-firegram.appspot.com",
    messagingSenderId: "778241594607",
    appId: "1:778241594607:web:767ce2b3ebf2179c68371a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }