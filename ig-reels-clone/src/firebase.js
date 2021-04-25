// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBStEaek4xCfW2JwtPdTWie-26DVgSfcjI",
  authDomain: "reel-clone-3d0ee.firebaseapp.com",
  projectId: "reel-clone-3d0ee",
  storageBucket: "reel-clone-3d0ee.appspot.com",
  messagingSenderId: "959582607047",
  appId: "1:959582607047:web:6644dc7170713a7daf10e2",
  measurementId: "G-0868Q3W5RT"
};

const firebaseapp = firebase.initializeApp
(firebaseConfig);
const db = firebaseapp.firestore();
export default db;
