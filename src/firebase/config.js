import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";
import secret from '../../secret';

// Your web app's Firebase configuration
var firebaseConfig = secret;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }