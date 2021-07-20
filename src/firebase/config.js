import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBqxW_k1hzM7V-WbFMmAoE0EYQsQOHiJ-k",
  authDomain: "firegram-b115a.firebaseapp.com",
  projectId: "firegram-b115a",
  storageBucket: "firegram-b115a.appspot.com",
  messagingSenderId: "44325318212",
  appId: "1:44325318212:web:13a74c62bb2345701e1611",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStogare = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStogare, timestamp };
