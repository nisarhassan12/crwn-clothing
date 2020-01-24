import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC5hxW4Mri_nsUghDBRntcEiAS4bXfqNEs",
    authDomain: "crwn-db-fc0cd.firebaseapp.com",
    databaseURL: "https://crwn-db-fc0cd.firebaseio.com",
    projectId: "crwn-db-fc0cd",
    storageBucket: "crwn-db-fc0cd.appspot.com",
    messagingSenderId: "443679583551",
    appId: "1:443679583551:web:a6c050516e9c3f3c9f378a"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase