import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {apiKey: "AIzaSyDlD4mzwMw_Ye-IgdQndYg2SjtMLIbSL3g",
    authDomain: "ecommerce-store-94133.firebaseapp.com",
    databaseURL: "https://ecommerce-store-94133.firebaseio.com",
    projectId: "ecommerce-store-94133",
    storageBucket: "ecommerce-store-94133.appspot.com",
    messagingSenderId: "97508215881",
    appId: "1:97508215881:web:fd6984b8b8d7af05960398",
    measurementId: "G-K6T2GPR631"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

