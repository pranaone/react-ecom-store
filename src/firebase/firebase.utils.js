import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBObPYjQ-UgGz1i0z9vkYCuWx4QHMK0haY",
    authDomain: "e-commerce-site-48833.firebaseapp.com",
    databaseURL: "https://e-commerce-site-48833.firebaseio.com",
    projectId: "e-commerce-site-48833",
    storageBucket: "e-commerce-site-48833.appspot.com",
    messagingSenderId: "979039673909",
    appId: "1:979039673909:web:e2af46f3ccdad26b105b7c",
    measurementId: "G-RPS8JNSBYP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
