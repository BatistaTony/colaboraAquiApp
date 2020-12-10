import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJOd_-ENanM6OIFv5PoNXsSoFgJeaqt0Y",
  authDomain: "colaboraaqui.firebaseapp.com",
  projectId: "colaboraaqui",
  storageBucket: "colaboraaqui.appspot.com",
  messagingSenderId: "766092870165",
  appId: "1:766092870165:web:0dcd180060ba4f2943c41c",
  measurementId: "G-BXVY4SDSQE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
