import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa_RyR6kcxWQnFE3Tdzeld4fosqrOQkKI",
  authDomain: "olx-clone-61983.firebaseapp.com",
  projectId: "olx-clone-61983",
  storageBucket: "olx-clone-61983.appspot.com",
  messagingSenderId: "993806301486",
  appId: "1:993806301486:web:c04efe1898f17885b3e2bf",
  measurementId: "G-VHJYFYZ5QR"
};

export default firebase.initializeApp(firebaseConfig)