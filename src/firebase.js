import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyD-3kamU92wFmGLHv2PzNpaKJ3rG-qODTw",
  authDomain: "moep-b4bab.firebaseapp.com",
  projectId: "moep-b4bab",
  storageBucket: "moep-b4bab.appspot.com",
  messagingSenderId: "99733488525",
  appId: "1:99733488525:web:f20e3311c3f8f7d48373c4",
  measurementId: "G-0B0R2JMD4W"
};

firebase.initializeApp(config);

export default firebase.firestore();
