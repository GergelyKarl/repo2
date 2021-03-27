import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIuhLpgoD6MTDzcmTe-kqdcJsxs7unQmc",
  authDomain: "chat-application-fc96e.firebaseapp.com",
  projectId: "chat-application-fc96e",
  storageBucket: "chat-application-fc96e.appspot.com",
  messagingSenderId: "350329593491",
  appId: "1:350329593491:web:2114e72ebd640f097a3766",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
