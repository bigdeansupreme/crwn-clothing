import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJeBqf2Ks6ZJa1ElRaa_-0qqLYZZWkFcM",
    authDomain: "crwn-db-a579f.firebaseapp.com",
    projectId: "crwn-db-a579f",
    storageBucket: "crwn-db-a579f.appspot.com",
    messagingSenderId: "213080530433",
    appId: "1:213080530433:web:76a8347e115aaaa03b6a00",
    measurementId: "G-S5ZYHSCZMF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef

  }

//   firebase.initializeApp(config)
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;