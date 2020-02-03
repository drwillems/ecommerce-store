import  firebase from 'firebase/app';
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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //only want to perform save to database when we get a user auth object.
    //check whether we get a valid object. if there is no userAuth (if it is not false - if the user Auth object does not exisits.) stop and return.
    if (!userAuth) return;
        
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //if exists is false from thhe object that you receive back from firebase
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            //.set is the create method
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error catch', error.message);
        }

    }
    return userRef;
  };

  //firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

