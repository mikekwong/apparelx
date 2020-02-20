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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // If data doesn't exist, we will create some in its place using data from our userAuth object
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
