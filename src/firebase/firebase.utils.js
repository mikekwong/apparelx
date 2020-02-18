import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-lnee9IthVQNhH4EFXaU-tLBiN1ry5Vg",
  authDomain: "apparel-db.firebaseapp.com",
  databaseURL: "https://apparel-db.firebaseio.com",
  projectId: "apparel-db",
  storageBucket: "apparel-db.appspot.com",
  messagingSenderId: "501173583384",
  appId: "1:501173583384:web:2ece1d7d96b4ea4b66cd6d",
  measurementId: "G-40ZVZNSZLJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
