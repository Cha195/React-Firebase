import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyBIDAPrfCxFvKMIRT-uMKm5usnHBgaNv0U",
authDomain: "react-firebase-70286.firebaseapp.com",
databaseURL: "https://react-firebase-70286.firebaseio.com",
projectId: "react-firebase-70286",
storageBucket: "react-firebase-70286.appspot.com",
messagingSenderId: "365785613036",
appId: "1:365785613036:web:24aa1d0d32baf143701bc9",
measurementId: "G-RYGBYFM3H6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;