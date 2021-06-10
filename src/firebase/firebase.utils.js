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

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;