import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_nR6UOoJ1u22rOKd9joRaHEJFvvnYaNI",
  authDomain: "crwn-db-5bf9a.firebaseapp.com",
  databaseURL: "https://crwn-db-5bf9a.firebaseio.com",
  projectId: "crwn-db-5bf9a",
  storageBucket: "crwn-db-5bf9a.appspot.com",
  messagingSenderId: "1061624990261",
  appId: "1:1061624990261:web:83552b45563ee8b22a3f7c",
  measurementId: "G-1BQ7K5JMP6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
